import { ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { Box, ImageBackground, Text, VStack } from "@gluestack-ui/themed";

export interface MemberImageProps {
  id: number;
  image: ImageSourcePropType;
  title: string;
  description: string;
}



export default function MemberImage(props: MemberImageProps) {
  const { image, title, description } = props;

  return (
    <Box rounded={"$2xl"} overflow="hidden" height={"$96"}>
      <ImageBackground source={image} w="$full" alt="Animal" h={"$full"} resizeMode = "cover">
        <Box p={"$4"} flexDirection="column" justifyContent="flex-end" flex={1}>
          <VStack gap={"$3"} w={"70%"}>
            <Text color="$white" fontSize={18} fontWeight="$bold">
              {title}
            </Text>
            <Text color="$white" ellipsizeMode="tail" numberOfLines={2}>
              {description}
            </Text>
          </VStack>
        </Box>
      </ImageBackground>
    </Box>
  );
}

const styles = StyleSheet.create({});
