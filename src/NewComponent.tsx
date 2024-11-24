import App from "./App";
import {spawn} from "node:child_process";


// type NewComponentType = {
//     students: Array<StudentType>
// }
//
// type StudentType = {
//     id: number,
//     name: string,
//     age:number
// }

type ComponentType = {
    title: string
}

export const Component =(props:ComponentType)=> {
    return (
        <div>{props.title}</div>
    )

}


type topCarsType = {
    manufacturer: string,
    model: string
}

type CarsType = {
    topCars: topCarsType[]
}


const NewComponent = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]




    return (
        // <ul>
        //     {props.students.map((student: StudentType,index:number) => {
        //         return (
        //             <li key={student.id}>
        //                 <span>{student.name}</span>
        //                 <span>{student.age}</span>
        //             </li>
        //         )
        //     })}
        // </ul>

        < table  >

            {topCars.map((car: topCarsType, index: number) => {
                return (
                    <tr  key={index}>
                        <td className={"tabl"}>
                            {car.model+": "}
                        </td>
                        <td className={"tabl"}>
                            {car.manufacturer}
                        </td>

                    </tr>
                )
            })}


        </table>


    )


}

export default NewComponent;