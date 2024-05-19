import { SetDOC, onSnapshotUserCollection, unSubscribe } from "../core/firebase/config"

export const onLogIn = () => {


}

export function OnSignIn(res:any) {
    
    const data={
        userUID: res.user.uid,
        userEmail:  res.user.email,
        simptoms: [
            {
                strength:{
                    value: 0,
                    time: new Date().toString(),
                },
                symptom_description: {
                    value: 'defoult',
                    time: new Date().toString()
                }
            }
        ],
      }
      SetDOC(res.user.uid,data)
     console.log(res.user.uid)
}