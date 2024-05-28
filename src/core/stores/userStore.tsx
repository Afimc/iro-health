import { create } from "zustand";
import { IUserStore } from "../interfaces";
import { getSpecificDocument, onSnapsotUserData } from "../firebase/config";

export const userStore = create<IUserStore>()((set) => ({
    userData: {
        userUID: '',
        userName: '',
        userEmail: '',
        userPhoneNumber: '',
        userAddress: '',
        simptoms: [
            {
                strength:{
                    value: 0,
                    time: new Date().toString(),
                },
                symptom_description: {
                    value: '',
                    time: new Date().toString()
                },
            },
        ],
    },
    userStatus: 'LoggedOut',
    userUnSubscriber: null,

    setUserData: (s) => set(() => ({ userData: s })),
    // setUserUID: (s) => set((state) => ({ userData: {...state.userData, userUID: s,},})),
    // setUserName: (s) => set((state) => ({ userData: {...state.userData, userName: s,},})),
    // setUserEmail: (s) => set((state) => ({ userData: {...state.userData, userEmail: s,},})),
    // setUserPhoneNumber: (s) => set((state) => ({ userData: {...state.userData, userPhoneNumber: s,},})),
    // setUserAddress: (s) => set((state) => ({ userData: {...state.userData, userAddress: s,},})),
    // setSimptoms: (s) => set((state) => ({ userData: {...state.userData, simptoms: s,},})),
    setUserStatus: (s) => set(() => ({ userStatus: s })),
    logIn: (s) => {
        console.log('test in function')
        getSpecificDocument(s.uid)
            .then((resultDoc) => {
                console.log({resultDoc})
                const q = onSnapsotUserData(resultDoc?.userUID,(newData:any)=>{
                   // /?????????????????????????????????????????????????????????? newData is a promise ???????
                    set(() => ({ userData: newData }))})
                 set((state) => ({ userData: {...state.userData, userData: resultDoc}, userStatus: 'LoggedIn', userUnSubscribe: q }));
            });
    },
    
}));

