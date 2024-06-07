import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Progress,
  ProgressFilledTrack,
  Text,
} from "@gluestack-ui/themed";
import PuzzleGame from "../../components/common/PuzzleGame";
import { PuzzlePieces } from "react-native-picture-puzzle";
import {
  EMode,
  checkEqualPuzzle,
  finishPuzzle,
  modePuzzle,
  puzzleData,
  randomPuzzle,
} from "../../db/puzzle";
import PuzzleModal from "../../components/common/PuzzleModal";
import useCountDown from "../../hook/UseCountDown";
import RatingStar from "../../components/RatingStar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams, "PuzzleScreen">;

const PuzzleScreen = ({ navigation, route }: Props) => {
  const idPuzzle = route.params.id;
  const myPuzzle = puzzleData.filter((puzzle) => puzzle.id === idPuzzle)[0];
  const mode = myPuzzle.mode;
  const source = { uri: myPuzzle.image };

  const [pieces, setPieces] = React.useState<PuzzlePieces>(
    randomPuzzle[mode][Math.floor(Math.random() * randomPuzzle[mode].length)]
  );
  const [show, setShow] = useState(false);
  const totalTime = 60 * (myPuzzle.mode + 1);
  const { remainingTime, pause } = useCountDown(totalTime);

  const handleHint = () => {
    setShow(true);
  };

  useEffect(() => {
    if (checkEqualPuzzle(pieces, finishPuzzle[mode])) {
      pause();
    }
  }, [pieces]);

  return (
    <Box flex={1} p="$4" pt="$10" gap="$12" bg="$white">
      <PuzzleModal show={show} setShow={setShow} source={source} />
      <Box gap="$2">
        <Progress
          value={(remainingTime / totalTime) * 100}
          size="sm"
          bg="$primary300"
        >
          <ProgressFilledTrack bg="$primary600" />
        </Progress>
        <Text textAlign="center" fontWeight={"$semibold"} color="$coolGray800">
          {remainingTime}
        </Text>
      </Box>
      <Box alignItems="center" gap={"$4"}>
        <RatingStar rate={myPuzzle.mode + 1} size={32} />
        <Box p={"$4"} rounded={"$2xl"} bg="$primary50">
          <PuzzleGame pieces={pieces} setPieces={setPieces} source={source} />
        </Box>
        <HStack justifyContent="flex-end" w="$full">
          <Button onPress={handleHint}>
            <Text
              color="$white"
              fontWeight={"$semibold"}
              fontSize={20}
              lineHeight={28}
            >
              Hint
            </Text>
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default PuzzleScreen;

const styles = StyleSheet.create({});
