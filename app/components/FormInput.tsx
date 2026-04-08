import { styled } from "nativewind";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface FormInputProps extends TextInputProps {
  label: string;
  error?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const FormInput = styled(
  React.forwardRef<TextInput, FormInputProps>(function FormInputComponent(
    { label, error, value, onChangeText, ...props },
    ref,
  ) {
    return (
      <View className="mb-5">
        <Text className="mb-2 text-lg font-sans-semibold text-primary">
          {label}
        </Text>
        <TextInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          className="border border-border rounded-xl bg-card px-4 py-3 text-base text-primary placeholder:text-muted-foreground"
          placeholderTextColor="#999"
          {...props}
        />
        {error && (
          <Text className="mt-2 text-sm font-sans-medium text-destructive">
            {error}
          </Text>
        )}
      </View>
    );
  }),
);
