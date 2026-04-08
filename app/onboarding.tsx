import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require("../assets/images/splash-pattern.png")}
        style={styles.background}
        imageStyle={styles.image}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>Gain Financial Clarity</Text>
          <Text style={styles.subtitle}>
            Track, analyze and cancel with ease
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => router.push("/sign-in")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  background: {
    flex: 1,
    backgroundColor: "#ea7a53",
  },
  image: {
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.14)",
  },
  content: {
    flex: 1,
    padding: 15,
    paddingBottom: 40,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 20,
    lineHeight: 26,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ffffff",
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "700",
  },
  link: {
    color: "#374151",
    textAlign: "center",
    fontSize: 15,
  },
});
