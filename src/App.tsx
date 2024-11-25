import React from "react";
import {Button} from "./components/Button";
import {log} from "node:util";


function App() {

    const Button1Foo = (name: string,age:number,secondName:string) => {
        console.log(name,age,secondName)
    }
    const Button2Foo = (name: string,age:number) => {
        console.log(name,age)
    }


      const Button4Foo = (name:string, age:number, address:string) => {
        return (
            console.log(name,age,address)

        )
      }

    return (
        <>
            <Button name={"YouTubeChanel1"} callBack={()=>Button1Foo("Vasia",21,"semenov")}/>
            <Button name={"YouTubeChanel2"} callBack={()=>Button2Foo("Timo", 45)}/>

            <Button name={"newbiii"} callBack={()=>Button4Foo("peta",155,"msk")}/>
        </>

    )

}

export default App;