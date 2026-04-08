import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return isSignedIn ? (
    <Redirect href="/home" />
  ) : (
    <Redirect href="/onboarding" />
  );
}
