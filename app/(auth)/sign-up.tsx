import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href="/sign-in">Already have an account? Sign In</Link>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
