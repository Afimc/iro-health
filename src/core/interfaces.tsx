export type TStatus = 'LoggedIn' | 'LoggedOut' | 'Pending';

export interface ILoadingWrapperProps {
    isLoading: string;
    children: React.ReactNode;
}

export interface ISimptomsData {
    strength: ISimptomStrenght;
    symptom_description: IsymptomDescription;
}

export interface ISimptomStrenght {
    value: number;
    time: string;
}

export interface IsymptomDescription {
    value: string;
    time: string;
}

export interface IUserData {
    userUID: string;
    userName: string;
    userEmail: string;
    userPhoneNumber: string;
    userAddress: string;
    simptoms: ISimptomsData[];
}

export interface IUserStore {
    userData: IUserData
    userStatus: TStatus;
    userUnSubscriber: any;

    setUserData: (s: IUserData) => void;
    setSimptoms: (s: ISimptomsData[]) => void;
    setUserStatus: (s: TStatus) => void;
    setUserUnSubscriber: (s: any) => void;
    logIn: (s:any) => void;
    logOut: (s:any) => void;
}




