import { create } from "zustand";
import { IUserStore } from "../interfaces";
import { getSpecificDocument, onSnapsotUserData } from "../firebase/config";
import { getDataForSetupOnSnapshot, getDataForSetupSpecificDocument, getDefaultNoUserData } from "../../shared/firebaseFunctions";
// import { setNewSimptoms } from "../../shared/firebaseFunctions";

export const userStore = create<IUserStore>()((set,get) => ({
    userData: {
        userUID: '',
        userName: '',
        userEmail: '',
        userPhoneNumber: '',
        userAddress: '',
        simptoms: [],
    },
    userStatus: 'LoggedOut',
    userUnSubscriber: null,

    setUserData: (s) => set(() => ({ userData: s })),
    setSimptoms: (s) => set((state) => ({ userData: {...state.userData, simptoms: s,},})),
    setUserStatus: (s) => set(() => ({ userStatus: s })),
    setUserUnSubscriber: (s) => set(() => ({ userUnSubscriber: s })),
    logIn: (s) => {
        console.log('test in logIn')
        getSpecificDocument(s.uid)
            .then((resultDoc) => {
                console.log({resultDoc})
                const dataForSetup = getDataForSetupSpecificDocument(resultDoc)
                const unsubscribe = onSnapsotUserData(resultDoc?.userUID,(newData:any)=>{
                    const dataForSetup = getDataForSetupOnSnapshot(newData);
                    set(() => ({ userData: dataForSetup }));
                })
                set(() => ({ userUnSubscriber: unsubscribe, userStatus: 'LoggedIn', userData: dataForSetup}));
        });
    },

    logOut: () => {
        console.log('logOut Test')
        const unsubscribe = get().userUnSubscriber;
        if (unsubscribe) unsubscribe();
        set(() => ({ userStatus: 'LoggedOut' }));
        const dataForSetup = getDefaultNoUserData(); 
        set(() => ({ userData: dataForSetup }));
    },
    
}));