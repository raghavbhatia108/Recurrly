import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const SafeAreaView = styled(RNSafeAreaView);
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-bold">Home</Text>
      <Link
        href="/onboarding"
        className="mt-4 font-sans-bold bg-primary text-white rounded p-4"
      >
        Get Started!
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 font-sans-bold bg-primary text-white rounded p-4"
      >
        Sign in
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 font-sans-bold bg-primary text-white rounded p-4"
      >
        Sign up
      </Link>
    </SafeAreaView>
  );
}
