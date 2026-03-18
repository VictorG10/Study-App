import useSocialAuth from "@/hooks/useSocialAuth";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();

  const isLoading = loadingStrategy !== null;

  return (
    <View className="flex-1 bg-background">
      <View className="absolute inset-0">
        <LinearGradient
          colors={["#0F0E17", "#1A1A2E", "#2D1B69", "#1A1A2E", "#0F0E17"]}
          locations={[0, 0.25, 0.5, 0.75, 1]}
          style={{ width: "100%", height: "100%" }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>

      <SafeAreaView className="flex-1">{/* 1:21:58 */}</SafeAreaView>
    </View>
  );
}
