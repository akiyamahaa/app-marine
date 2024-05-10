import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Button,
  ButtonIcon,
  HStack,
  ImageBackground,
  SafeAreaView,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft2 } from "iconsax-react-native";

type Props = {};

const Detail = (props: Props) => {
  const navigation = useNavigation<any>();
  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../../assets/turtle.png")}
        w="$full"
        height={240}
      >
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
    </Box>
  );
};

export default Detail;

const styles = StyleSheet.create({});
