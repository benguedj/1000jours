export type RootStackParamList = {
  Onboarding: undefined;
  Profile: undefined;
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type UserSituation = {
  id: number;
  label: string;
  isChecked: boolean;
}

export type UserContext = {
  situations: UserSituation[];
  childBirthday: Date | null;    
}