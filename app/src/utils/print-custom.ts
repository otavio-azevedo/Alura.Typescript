import { Printable } from "../interfaces/printable.js";

export function customPrint(...objs: Printable[]){
    for(let obj of objs)
    {
        console.log(obj.forText());
    }
}