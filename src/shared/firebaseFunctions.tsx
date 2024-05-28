
import { SetDOC, getSpecificDocument, } from "../core/firebase/config"
import { IUserData } from "../core/interfaces"



// export const onLogIn = (user:any) => {

// console.log('login TEST')
//  getSpecificDocument(user?.uid)
//     .then((resultDoc) => {
//     console.log({onlogin:resultDoc})

//     })

// }

const getDefaultUserData = (res:any) => {
    const defaultData:IUserData={
        userUID: res.user.uid,
        userName: 'not added',
        userEmail: res.user.email,
        userPhoneNumber: 'not added',
        userAddress: 'not added',
        simptoms: [
            {
                strength:{
                    value: 0,
                    time: new Date().toString(),
                },
                symptom_description: {
                    value: 'default',
                    time: new Date().toString(),
                }
            }
        ],
      }
      return defaultData
}

export function OnSignIn(res:any) {
    const defaultData = getDefaultUserData(res)
    SetDOC(res.user.uid,defaultData)
    console.log({newUserID:res.user.uid})
}