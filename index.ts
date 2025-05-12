// ****** Typescript ******

// ** initialize typescript **
// tsconfig.json = tsc --init
// -- Need compilation to js
// compile = tsc app.ts

// ** typing primities **
// objects = { name: string, age: number }
// arrays = string[]
// tuples = [string, number]
// or | i.e. string | number
// bespoke types = type example = "hello" | "world"

// ** create a type **
// type Example1 = {
//     name: string;
//     age: number;
// }
// option properties = ?
// ** extend type **
// type Example2 = Example1 & {
//     address: string;
//     phone: number;
// }

// ** type assertion **
// let example: any = 1
// let example2 = example as string
// OR
// let example2 = <string>example

// ** functions **
// params and returns
// const exampleFunc = (name: string, age: number): string => {
//     return `Hello ${name}, you are ${age} years old`
// }

// ** type and interface **
// type Example = {
//     name: string;
// }
// interface Example1 {
//     name: string;
// }

// ** generics **
// function exampleFunc(arr: any[]): any[] {`
//     return arr
// }
// let numArr = exampleFunc([1,2,3])
// let stringArr = exampleFunc(["hello","world"])
// numArr.push("Again")

// function exampleFunc<T>(arg: T[]): T[] {
//     return arg
// }
// let numArr = exampleFunc<number>([1,2,3])
// let stringArr = exampleFunc<string>(["hello","world"])
// numArr.push("Again")

// ****** Package.json ******
// need node.js
// npm init -y
// dependencies
// .gitignore
// node_modules
// install typescript npm install typescript -g
// install nodemon
