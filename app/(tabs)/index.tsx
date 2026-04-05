import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import ListHeading from "../components/ListHeading";
import Subscriptioncard from "../components/Subscriptioncard";
import UpcomingSubscriptionCard from "../components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "../constants/data";
import { icons } from "../constants/icons";
import { images } from "../constants/images";

export default function App() {
  const [expandedSubId, setExpandedSubId] = useState<string | null>(null);
  const SafeAreaView = styled(RNSafeAreaView);
  return (
    <SafeAreaView className="flex-1 bg-background p-5 mb-10">
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className="home-header">
              <View className="home-user">
                <Image source={images.avatar} className="home-avatar" />
                <Text className="home-user-name">{HOME_USER.name}</Text>
              </View>
              <Image source={icons.add} className="home-add-icon" />
            </View>
            <View className="home-balance-card">
              <Text className="home-balance-label">Balance</Text>
              <View className="home-balance-row">
                <Text className="home-balance-amount">
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>
                <Text className="home-balance-date">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                </Text>
              </View>
            </View>
            <View>
              <ListHeading title="Upcoming" />
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={UPCOMING_SUBSCRIPTIONS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <UpcomingSubscriptionCard {...item} />
                )}
                ListEmptyComponent={
                  <Text className="home-empty-state">
                    No upcoming subscriptions
                  </Text>
                }
              />
            </View>

            <View>
              <ListHeading title="All Subscriptions" />
            </View>
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Subscriptioncard
            {...item}
            expanded={expandedSubId === item.id}
            onPress={() =>
              setExpandedSubId(expandedSubId === item.id ? null : item.id)
            }
          />
        )}
        extraData={expandedSubId}
        ItemSeparatorComponent={() => <View className="h-4"></View>}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="home-empty-state">No active subscriptions</Text>
        }
      />
    </SafeAreaView>
  );
}
