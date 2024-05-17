export interface ILoadingWrapperProps {
    isLoading: boolean;
    children: React.ReactNode;
}


interface IStatus {
    islogedIn: boolean;
    pending: boolean;
}


export interface IUserStore {
    userUID: string;
    simptoms: ISimptomsData[]
    userStatus: IStatus;

    setUserUID :(s: string) => void
    setSimptoms : (s: ISimptomsData[]) => void;
    setUserStatus : (s: IStatus) => void;

}

export interface ISimptomsData {
    strength:number[],
    symptom_description :string,
}


