import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const SafeAreaView = styled(RNSafeAreaView);
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-5 bg-primary text-white rounded p-4"
      >
        Get Started
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-5 bg-primary text-white rounded p-4"
      >
        Sign in
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-5 bg-primary text-white rounded p-4"
      >
        Sign up
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="mt-5 bg-primary text-white rounded p-4"
      >
        Spotify Subscriptions
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-5 bg-primary text-white rounded p-4"
      >
        Claude
      </Link>
    </SafeAreaView>
  );
}
