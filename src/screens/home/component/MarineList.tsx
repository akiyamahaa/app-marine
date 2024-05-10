import { StyleSheet } from "react-native";
import React from "react";
import { Text, Box, HStack, VStack, Image } from "@gluestack-ui/themed";

type Props = {};

const MarineList = (props: Props) => {
  return (
    <VStack gap={"$4"}>
      <HStack justifyContent="space-between" mb={"$4"}>
        <Text fontWeight="$semibold" fontSize={"$xl"} color="$primary600">
          Sinh vật biển
        </Text>
        <Text fontWeight="$normal" fontSize={"$sm"} color="$textDark500">
          Xem tất cả
        </Text>
      </HStack>
      <HStack h={"$96"} gap={"$4"}>
        <VStack flex={1} gap={"$4"}>
          <Image
            source={require("../../../assets/marine1.png")}
            alt="marine1"
            flex={3}
            w={"$full"}
            resizeMode="cover"
            rounded={"$xl"}
          />
          <Image
            source={require("../../../assets/marine4.png")}
            alt="marine1"
            flex={2}
            w={"$full"}
            resizeMode="cover"
            rounded={"$xl"}
          />
        </VStack>
        <VStack flex={1} gap={"$4"}>
          <Image
            source={require("../../../assets/marine2.png")}
            alt="marine1"
            flex={1}
            w={"$full"}
            resizeMode="cover"
            rounded={"$xl"}
          />
          <Image
            source={require("../../../assets/marine3.png")}
            alt="marine1"
            flex={2}
            w={"$full"}
            resizeMode="cover"
            rounded={"$xl"}
          />
        </VStack>
      </HStack>
      <Box>
        <Image
          source={require("../../../assets/marine5.png")}
          alt="marine1"
          h={"$32"}
          w={"$full"}
          resizeMode="cover"
          rounded={"$xl"}
        />
      </Box>
    </VStack>
  );
};

export default MarineList;

const styles = StyleSheet.create({});
