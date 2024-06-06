
import { SetDOC } from "../core/firebase/config"
import { ISimptomsData, IUserData, IsymptomDescription } from "../core/interfaces"



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



export function getNewSimptoms(data:any){
    console.log({data})
    const newSimptoms:ISimptomsData[] = data.map((f:any)=>{
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
    console.log({newSimptoms})
    return newSimptoms

}


export function getDataForSetupOnSnapshot(newData:any){
    const newSimptoms = getNewSimptoms(newData._document.data.value.mapValue.fields.simptoms.arrayValue.values)

    const data:IUserData =  {
        userUID: newData._document.data.value.mapValue.fields.userUID.stringValue,
        userName: newData._document.data.value.mapValue.fields.userName.stringValue,
        userEmail: newData._document.data.value.mapValue.fields.userEmail.stringValue,
        userPhoneNumber: newData._document.data.value.mapValue.fields.userPhoneNumber.stringValue,
        userAddress: newData._document.data.value.mapValue.fields.userAddress.stringValue,
        simptoms: newSimptoms
    };
    return data
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



export function getDataForSetup(resultDoc:any){
    const data:IUserData =  {
        userUID: resultDoc.userUID,
        userName: resultDoc.userName,
        userEmail: resultDoc.userEmail,
        userPhoneNumber: resultDoc.userPhoneNumber,
        userAddress: resultDoc.userAddress,
        simptoms: resultDoc.simptoms
    };
    return data
}

