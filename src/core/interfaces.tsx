export type TStatus = 'LoggedIn' | 'LoggedOut' | 'Pending';

export interface ILoadingWrapperProps {
    isLoading: string;
    children: React.ReactNode;
}

export interface ISimptomStrenght {
    value: number;
    time: string;
}

export interface IsymprmDescription {
    value: string;
    time: string;
}

export interface IUserStore {
    userUID: string;
    simptoms: ISimptomsData[];
    userStatus: TStatus;

    setUserUID: (s: string) => void;
    setSimptoms: (s: ISimptomsData[]) => void;
    setUserStatus: (s: TStatus) => void;
}

export interface ISimptomsData {
    strength: ISimptomStrenght;
    symptom_description: IsymprmDescription;
}


