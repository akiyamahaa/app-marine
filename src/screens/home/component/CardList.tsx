import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { HStack, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { EDisplayType, IData } from "../../../types";
import { useNavigation } from "@react-navigation/native";

type Props = {
  data: IData[];
  displayType: EDisplayType;
  title: string;
};

const { width } = Dimensions.get("screen");

const SIZE_TYPE: {
  [key in EDisplayType]: {
    widthSize: number;
    heightSize: number;
  };
} = {
  [EDisplayType.NORMAL]: {
    widthSize: 152,
    heightSize: 152,
  },
  [EDisplayType.LARGE]: {
    widthSize: width - 32,
    heightSize: 192,
  },
};

const CardList = ({ data, displayType, title }: Props) => {
  const navigation = useNavigation<any>();
  return (
    <VStack>
      <HStack justifyContent="space-between" mb={"$4"}>
        <Text fontWeight="$semibold" fontSize={"$xl"} color="$primary600">
          {title}
        </Text>
        <Text fontWeight="$normal" fontSize={"$sm"} color="$textDark500">
          Xem tất cả
        </Text>
      </HStack>
      <ScrollView w={"$full"} horizontal showsHorizontalScrollIndicator={false}>
        <HStack gap={"$4"}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("Detail")}
            >
              <VStack gap={"$3"} width={SIZE_TYPE[displayType].widthSize}>
                <Image
                  source={item.image}
                  width={SIZE_TYPE[displayType].widthSize}
                  height={SIZE_TYPE[displayType].heightSize}
                  rounded={"$xl"}
                  alt="image"
                />
                <Text fontSize={"$md"} fontWeight="$semibold">
                  Cá heo
                </Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  color={"$coolGray500"}
                >
                  Cá heo là động vật có vú sống ở đại dương và sông nước có quan
                  hệ mật thiết với cá voi. Có gần 40 loài cá heo thuộc 17 chi
                  sinh sống ở các đại dương, số ít còn lại sinh sống tại một số
                  con sông trên thế giới (sông Dương Tử, sông Amazon, sông Ấn,
                  sông Hằng,...). Kích thước của cá heo có thể từ 1,2 m (4 ft)
                  và 40 kg (90 lb) (Cá heo Maui), cho tới 9,5 m (30 ft) và 10
                  tấn (9,8 tấn Anh; 11 tấn Mỹ) (Cá heo đen lớn hay Cá voi sát
                  thủ). Cá heo có trên toàn thế giới và thường cư ngụ ở các biển
                  nông của thềm lục địa. Cá heo là loài ăn thịt, chủ yếu là ăn
                  cá và mực. Họ cá voi đại dương Delphinidae là họ lớn nhất
                  trong bộ cá heo và cũng là họ xuất hiện muộn nhất: khoảng 10
                  triệu năm trước đây, trong thế Trung Tân. Cá heo là một trong
                  số những động vật thông minh và được biết đến nhiều trong văn
                  hóa loài người nhờ hình thức thân thiện và thái độ tinh nghịch
                  và hồ hởi với con người.
                </Text>
              </VStack>
            </TouchableOpacity>
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default CardList;

const styles = StyleSheet.create({});
