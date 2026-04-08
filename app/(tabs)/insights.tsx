import { router } from "expo-router";
import { styled } from "nativewind";
import { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { useSubscriptionStore } from "../../lib/subscriptionStore";
import ListHeading from "../components/ListHeading";
import SubscriptionCard from "../components/Subscriptioncard";

const SafeAreaView = styled(RNSafeAreaView);

const chartValues = [35, 42, 33, 40, 36, 30, 28];
const chartLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const highlightedIndex = 3;

const Insights = () => {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<
    string | null
  >(null);
  const { subscriptions } = useSubscriptionStore();

  const maxValue = useMemo(() => Math.max(...chartValues), []);

  const handleSubscriptionPress = (item: Subscription) => {
    setExpandedSubscriptionId((currentId) =>
      currentId === item.id ? null : item.id,
    );
  };

  const HeaderComponent = () => (
    <>
      <Text className="text-3xl font-sans-bold text-primary mb-6">
        Insights
      </Text>

      <ListHeading
        title="Upcoming"
        onPress={() => router.push("/subscriptions")}
      />

      <View className="bg-card rounded-3xl p-5 pt-20 mb-6">
        <View className="flex-row justify-between items-end h-40">
          {chartValues.map((value, index) => {
            const barHeight = (value / maxValue) * 156;
            const isHighlighted = index === highlightedIndex;
            return (
              <View key={index} className="items-center">
                {isHighlighted ? (
                  <View className="mb-2 rounded-full bg-accent px-3 py-1">
                    <Text className="text-xs font-bold text-white">$40</Text>
                  </View>
                ) : (
                  <View className="mb-2 h-4" />
                )}

                <View
                  style={[styles.bar, { height: barHeight }]}
                  className={isHighlighted ? "bg-accent" : "bg-black"}
                />
                <Text className="text-xs text-gray-400 mt-2">
                  {chartLabels[index]}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View className="flex-row justify-between items-center p-5 border border-gray-200 rounded-3xl mb-6 bg-card">
        <View>
          <Text className="text-xl font-sans-bold text-primary">Expenses</Text>
          <Text className="text-gray-500 mt-1">
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </Text>
        </View>

        <View className="items-end">
          <Text className="text-2xl font-sans-bold text-primary">-$456.65</Text>
          <Text className="text-green-500 text-sm mt-1">+12%</Text>
        </View>
      </View>

      <ListHeading
        title="History"
        onPress={() => router.push("/subscriptions")}
      />
    </>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={subscriptions}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={HeaderComponent}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() => handleSubscriptionPress(item)}
          />
        )}
        extraData={expandedSubscriptionId}
        ItemSeparatorComponent={() => <View className="h-4" />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="home-empty-state">No subscriptions yet.</Text>
        }
        contentContainerClassName="pb-30 px-5"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: 14,
    borderRadius: 999,
    minHeight: 20,
  },
});

export default Insights;
