import { onSnapshotUserCollection, unSubscribe } from "../core/firebase/config"

export const onLogIn = () => {
   const info = unSubscribe()
   console.log(info)
   

}