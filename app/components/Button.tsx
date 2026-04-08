import { clsx } from "clsx";
import { styled } from "nativewind";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
} from "react-native";

interface ButtonProps extends PressableProps {
  text: string;
  variant?: "primary" | "secondary";
  loading?: boolean;
}

const StyledPressable = styled(Pressable);

export const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(({ text, variant = "primary", loading = false, disabled, ...props }, ref) => {
  const isDisabled = disabled || loading;

  return (
    <StyledPressable
      ref={ref}
      disabled={isDisabled}
      className={clsx(
        "items-center justify-center rounded-xl py-4 px-4",
        variant === "primary"
          ? "bg-accent"
          : "border border-border bg-background",
        isDisabled && "opacity-50",
      )}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? "white" : "#081126"}
          size="small"
        />
      ) : (
        <Text
          className={clsx(
            "text-lg font-sans-semibold",
            variant === "primary" ? "text-white" : "text-primary",
          )}
        >
          {text}
        </Text>
      )}
    </StyledPressable>
  );
});

Button.displayName = "Button";
