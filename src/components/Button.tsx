import React from "react";

// type ButtonType = {
//     name: string;
//     callBack: () => void;
// }
//
//
// export const Button = (props: ButtonType) => {
//
//
//     const onClickHandler = () => {
//         props.callBack()
//     }
//     return (
//         <button onClick={onClickHandler}>{props.name}</button>
//     )
// }

type ButtonType = {
    name: string;
    callBack: ()=>void
}


export const Button = (props:ButtonType)=>{

    const onClickHandler =  ()=>{
        return(
            props.callBack()
        )

    }

    return(
        <button onClick={onClickHandler} type="submit">{props.name}</button>
    )
}