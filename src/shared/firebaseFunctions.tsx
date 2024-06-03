
import { SetDOC } from "../core/firebase/config"
import { IUserData, IsymptomDescription } from "../core/interfaces"



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
        simptoms: [],
      }
      return defaultData
}

export function OnSignIn(res:any) {
    const defaultData = getDefaultUserData(res)
    SetDOC(res.user.uid,defaultData)
    console.log({newUserID:res.user.uid})
}



export function setNewSimptoms(newData:any){
    console.log({newData})
const newSimptoms = []
const first:IsymptomDescription = newData._document.data.value.mapValue.fields.simptoms.arrayValue.values.map((f:any)=>{
    return {
        strength:{
            value:f.mapValue.fields.strength.mapValue.fields.value.stringValue,
            time:f.mapValue.fields.strength.mapValue.fields.time.stringValue,
        },
        symptom_description:{
            value:f.mapValue.fields.symptom_description.mapValue.fields.value.stringValue,
            time:f.mapValue.fields.symptom_description.mapValue.fields.time.stringValue,
        }
    }
})
console.log({first})
return first

}

// {
//     strength:{
//         value: 0,
//         time: new Date().toString(),
//     },
//     symptom_description: {
//         value: '',
//         time: new Date().toString()
//     },
// }