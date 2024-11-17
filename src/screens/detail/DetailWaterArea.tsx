import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonIcon,
  HStack,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft2 } from "iconsax-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import { titleWaterSea, waterArea } from "../../db/slide-data";
import { Text } from "@gluestack-ui/themed";

type Props = {} & NativeStackScreenProps<RootStackParams, "DetailWaterArea">;

const DetailWaterArea = ({ navigation, route }: Props) => {
  const waterName = route.params.waterName;
  const [data] = useState(waterArea[waterName]);

  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <ImageBackground source={{ uri: data.image }} w="$full" height={240}>
        <SafeAreaView>
          <HStack>
            <Button
              variant="link"
              size="lg"
              px="$2"
              onPress={() => navigation.goBack()}
            >
              <ButtonIcon as={ArrowLeft2} size="xl" color="$white" />
            </Button>
          </HStack>
        </SafeAreaView>
      </ImageBackground>
      {/* Title */}
      <ImageBackground
        source={{
          uri: "https://media.istockphoto.com/id/1143347756/vector/underwater-landscape-realistic-vector-background.jpg?s=612x612&w=0&k=20&c=NfdFUgjlg1IUe_WSgQYvgeKUqGZjTqfRDnuGTd5TXlg=",
        }}
        flex={1}
        bgColor="$amber400"
        alt="Animal"
        resizeMode="cover"
      >
        <ScrollView flex={1}>
          <VStack p="$4" gap="$4" flex={1}>
            <Box marginTop={12}>
              <Text fontSize={"$2xl"} fontWeight={"$extrabold"} color="yellow">
                {titleWaterSea[waterName]}
              </Text>
            </Box>
            <VStack gap={"$2"}>
              <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
                Độ sâu
              </Text>
              <Text color="$white">{data.depth_range}</Text>
            </VStack>
            <VStack gap={"$1"}>
              <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
                Nhiệt độ
              </Text>
              <Text color="$white">{data.temperature}</Text>
            </VStack>
            <VStack gap={"$1"}>
              <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
                Ánh sáng
              </Text>
              <Text color="$white">{data.light}</Text>
            </VStack>
            <VStack gap={"$1"}>
              <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
                Áp suất
              </Text>
              <Text color="$white">{data.pressure}</Text>
            </VStack>
            <VStack gap={"$1"}>
              <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
                Các sinh vật
              </Text>
              <Text color="$white">{data.marine_life}</Text>
            </VStack>
          </VStack>
        </ScrollView>
      </ImageBackground>
    </Box>
  );
};

export default DetailWaterArea;

const styles = StyleSheet.create({});
