import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-5 bg-primary text-white rounded p-4"
      >
        Get Started
      </Link>
      <Link href="/(auth)/sign-in">Sign in</Link>
      <Link href="/(auth)/sign-up">Sign up</Link>
      <Link href="/subscriptions/spotify">Spotify Subscriptions</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude
      </Link>
    </View>
  );
}
