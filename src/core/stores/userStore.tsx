import { create } from "zustand";
import { IUserStore } from "../interfaces";
import { onLogIn } from "../../shared/firebaseFunctions";

export const userStore = create<IUserStore>()((set) => ({
    userUID: '',
    simptoms: [
        {
            strength:{
                value: 0,
                time: new Date().toString(),
            },
            symptom_description: {
                value: '',
                time: new Date().toString()
            }
        }
    ],
    userStatus: 'LoggedOut',

    setUserUID: (s) => set(() => ({ userUID: s })),
    setSimptoms: (s) => set(() => ({ simptoms: s })),
    setUserStatus:(s) => set(() => ({ userStatus: s })),
    logIn : onLogIn()
}));

