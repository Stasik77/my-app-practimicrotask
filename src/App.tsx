import React from "react";
import {Button} from "./components/Button";
import {releaseAllKeys} from "@testing-library/user-event/dist/keyboard/keyboardImplementation";


function App() {

    const Button1Foo = (name: string,age:number,secondName:string) => {
        console.log(name,age,secondName)
    }
    const Button2Foo = (name: string,age:number) => {
        console.log(name,age)
    }
      const Button3Foo = () => {
        console.log("iam stupedd")


    return (
        <>
            <Button name={"YouTubeChanel1"} callBack={()=>Button1Foo("Vasia",21,"semenov")}/>
            <Button name={"YouTubeChanel2"} callBack={()=>Button2Foo("Timo", 45)}/>
            <Button name={"YouTubeChanel2"} callBack={()=>Button3Foo()}/>
        </>

    )

}

export default App;