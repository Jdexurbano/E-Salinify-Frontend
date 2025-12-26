import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
export default function Index() {
  const [hasOnboarded, setHasOnBoarded] = useState<boolean | null>(null);

  //check in the localstorage if the user is already onboarded
  useEffect(() => {
    AsyncStorage.getItem("hasOnBoarded").then((value) => {
      setHasOnBoarded(value === "true");
    });
  });

  if (hasOnboarded === null) return null;

  //decide what the screen to be loaded
  return hasOnboarded ? (
    <Redirect href="/home" />
  ) : (
    <Redirect href="/onboarding" />
  );
}
