import { StyleSheet, View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsMap from "@/components/ListingsMap";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";

const GOOGLEAPI_API_KEY = process.env.EXPO_PUBLIC_GOOGLEAPI_API_KEY;

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);
  const geoItems = useMemo(() => listingsDataGeo as any, []);

  const onDataChanged = (category: string) => {
    console.log("CHANGED_", category);

    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={geoItems} />
      <ListingsBottomSheet listings={items} category={category} />
      

      
    </View>
  );
};


const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1
  }
})
export default Page;
