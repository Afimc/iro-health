import { create } from "zustand";
import { IUserStore } from "../interfaces";
import { auth } from "../firebase/config";


export const userStore = create<IUserStore>()((set) => ({
    userUID: '',
    simptoms: [{strength: [0], symptom_description: ''}],
    userStatus: {islogedIn: !!auth.currentUser, pending: false},

    setUserUID: (s) => set(() => ({ userUID: s })),
    setSimptoms: (s) => set(() => ({ simptoms: s })),
    setUserStatus:(s) => set(() => ({ userStatus: s })),
}));

