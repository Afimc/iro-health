import { create } from "zustand";
import { IUserStore } from "../interfaces";
import { getSpecificDocument, onSnapsotUserData } from "../firebase/config";

export const userStore = create<IUserStore>()((set,get) => ({
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
    setUserUID: (s) => set((state) => ({ userData: {...state.userData, userUID: s,},})),
    setUserName: (s) => set((state) => ({ userData: {...state.userData, userName: s,},})),
    setUserEmail: (s) => set((state) => ({ userData: {...state.userData, userEmail: s,},})),
    setUserPhoneNumber: (s) => set((state) => ({ userData: {...state.userData, userPhoneNumber: s,},})),
    setUserAddress: (s) => set((state) => ({ userData: {...state.userData, userAddress: s,},})),
    setSimptoms: (s) => set((state) => ({ userData: {...state.userData, simptoms: s,},})),
    setUserStatus: (s) => set(() => ({ userStatus: s })),
    setUserUnSubscriber: (s) => set(() => ({ userUnSubscriber: s })),
    logIn: (s) => {
        console.log('test in logIn')
        set(() => ({ userStatus: 'LoggedIn' }));
        getSpecificDocument(s.uid)
            .then((resultDoc) => {
                console.log({resultDoc})
                set((state) => ({ userData: {...state.userData, userUID: resultDoc?.userUID}}));
                set((state) => ({ userData: {...state.userData, userName: resultDoc?.userName}}));
                set((state) => ({ userData: {...state.userData, userEmail: resultDoc?.userEmail}}));
                set((state) => ({ userData: {...state.userData, userPhoneNumber: resultDoc?.userPhoneNumber}}));
                set((state) => ({ userData: {...state.userData, userAddress: resultDoc?.userAddress}}));
                set((state) => ({ userData: {...state.userData, simptoms: resultDoc?.simptoms}}));
                const q = onSnapsotUserData(resultDoc?.userUID,(newData:any)=>{
                    set((state) => ({ userData: {...state.userData, userUID: newData._document.data.value.mapValue.fields.userUID.stringValue},}));
                    set((state) => ({ userData: {...state.userData, userName: newData._document.data.value.mapValue.fields.userName.stringValue},}));
                    set((state) => ({ userData: {...state.userData, userEmail: newData._document.data.value.mapValue.fields.userEmail.stringValue},}));
                    set((state) => ({ userData: {...state.userData, userPhoneNumber: newData._document.data.value.mapValue.fields.userPhoneNumber.stringValue},}));
                    set((state) => ({ userData: {...state.userData, userAddress: newData._document.data.value.mapValue.fields.userAddress.stringValue},}));
                    set((state) => ({ userData: {...state.userData, simptoms: newData._document.data.value.mapValue.fields.simptoms.arrayValue.values},}));
                   console.log({newData})

                   set(() => ({ userUnSubscriber: q}));
                   console.log({q:q})
            })
                
        });
    },
    logOut: () => {
        console.log('logOut Test')

        const q = get().userUnSubscriber;
        if (q) {
            q();
        }
        
        set(() => ({ userStatus: 'LoggedOut' }))
        set((state) => ({ userData: {...state.userData, userUID: ''}}));
        set((state) => ({ userData: {...state.userData, userName: ''}}));
        set((state) => ({ userData: {...state.userData, userEmail: ''}}));
        set((state) => ({ userData: {...state.userData, userPhoneNumber: ''}}));
        set((state) => ({ userData: {...state.userData, userAddress: ''}}));
        set((state) => ({ userData: {...state.userData, simptoms: [{strength:{value: 0,time: ''},symptom_description: {value: '',time: ''}}]}}));
    },
    
}));

