import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: require("../assets/turtle.png"),
      ques: "Question 1: Where do Turtles lay eggs?",
      choose: ["Under the sea", "At the place they were born", "On the sand"],
      ans: 1,
    },
  ],
  medium: [],
  hard: [],
};
