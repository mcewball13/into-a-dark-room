type SwitchType = {
    on: boolean;
    x: number | null;
    y: number | null;
};

export type LevelOneState = {
    isLoading: boolean;
    error: string | null;
    firstSwitch: SwitchType;
    secondSwitch: SwitchType;
    thirdSwitch: SwitchType;
};


