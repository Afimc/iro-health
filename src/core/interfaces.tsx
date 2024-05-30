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
    setUserUID: (s: string) => void;
    setUserName: (s: string) => void;
    setUserEmail: (s: string) => void;
    setUserPhoneNumber: (s: string) => void;
    setUserAddress: (s: string) => void;
    setSimptoms: (s: ISimptomsData[]) => void;
    setUserStatus: (s: TStatus) => void;
    setUserUnSubscriber: (s: any) => void;
    logIn: (s:any) => void;
    logOut: (s:any) => void;
}

export interface ISimptomsData {
    strength: ISimptomStrenght;
    symptom_description: IsymprmDescription;
}


