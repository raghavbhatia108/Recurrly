import { formatCurrency, formatSubscriptionDateTime } from "@/lib/utils";
import clsx from "clsx";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const Subscriptioncard = ({
  name,
  price,
  billing,
  currency,
  icon,
  color,
  category,
  plan,
  renewalDate,
  expanded,
  onPress,
  paymentMethod,
  startDate,
  status,
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx("sub-card", expanded ? "sub-card-expanded" : "bg-card")}
      style={!expanded && color ? { backgroundColor: color } : {}}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image className="sub-icon" source={icon} />
          <View className="sub-copy">
            <Text className="sub-title" numberOfLines={1}>
              {name}
            </Text>
            <Text>
              {category?.trim() ||
                plan?.trim() ||
                (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
            </Text>
          </View>
        </View>
        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>
      {expanded && (
        <View className="sub-bdy">
          <View className="sub-details">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {paymentMethod?.trim()}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Category:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {category?.trim()}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Plan:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {plan?.trim()}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Start Date:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {startDate ? formatSubscriptionDateTime(startDate) : ""}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Renewal Date:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {renewalDate ? formatSubscriptionDateTime(renewalDate) : ""}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Status:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {status ? status : ""}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default Subscriptioncard;
