import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, ScrollView, VStack } from "@gluestack-ui/themed";
import SlideImage from "./component/SlideImage";
import { headerSlideData, mammal, softAnimal } from "../../db/slide-data";
import MarineList from "./component/MarineList";
import CardList from "./component/CardList";
import { EDisplayType } from "../../types";

type Props = {};

const Home = (props: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack flex={1} p={"$4"} gap={"$4"} bg="$white">
        <SlideImage data={headerSlideData} />
        <MarineList />
        <CardList
          title="Động vật có vú"
          data={mammal}
          displayType={EDisplayType.LARGE}
        />
        <CardList
          title="Động vật thân mềm"
          data={softAnimal}
          displayType={EDisplayType.NORMAL}
        />
      </VStack>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
