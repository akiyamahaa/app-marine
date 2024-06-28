export type RootStackParams = {
  TabNavigation: undefined;
  QuizzResult: undefined;
  QuizzScreen: undefined;
  PracticeScreen: undefined;
  PracticeResult: undefined;
  Detail: {
    groupSeaName: string;
  };
  DetailWaterArea: {
    waterName: string;
  };
  PuzzleScreen: {
    id: number;
  };
};

export type BottomTabsParams = {
  Home: undefined;
  Quizz: undefined;
  Practice: undefined;
  Puzzle: undefined;
} & RootStackParams;
