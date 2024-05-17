import { ILoadingWrapperProps } from "../../core/interfaces"


export const LoadingWrapper = (props:ILoadingWrapperProps) => {
    return ( 
        props.isLoading 
        ? <div className="spinner"> Loading ...</div>
        : props.children 
    )
}