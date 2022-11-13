function getFullName(userEntity: { firstName: string, surName: string }): string {
    return `${userEntity.firstName} ${userEntity.surName}`
}

const getFullNameArrow = (firstName: string, surname: string): string => {
    return `${firstName} ${surname}`
}
const user = {
    firstName: 'Dmitry',
    surName: 'Flame',
    city: 'Riga',
    age: '30'
}
console.log(getFullName(user))

//--------------------------------------------------------------------------------------//
console.log("work with arrays")
const skills: string[] = ['Dev', 'DevOps', 'Testing']

console.log("print skills in lowercase: ")
for (const skill of skills) {
    console.log(skill.toLocaleLowerCase())
}

const res = skills
    .filter((s: string) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b)
console.log("print result: ")
console.log(res);
//result: Dev! Testing!

//--------------------------------------------------------------------------------------//
console.log("work with Tuples")
const skill: [number, string] = [1, 'Dev']
const skillId = skill[0]
const skillNamee = skill[1]
const [id, skillName] = skill;

//spread param
const arr: [number, string, ...boolean[]] = [1, 'test', true, false, false]

//--------------------------------------------------------------------------------------//
console.log("work with Readonly")
const skill1: [number, string] = [1, 'Dev']
skill1[0] = 2 // we can override element in the array
const skill2: readonly [number, string] = [1, 'Dev']
//skill2[0] = 2 // we can't override element in the array
//OR we can use generics
const skill3: ReadonlyArray<string> = ['Dev', 'DevOps']

//--------------------------------------------------------------------------------------//
console.log("work with Enums")
const response1 = {
    message: 'payment success',
    statusCode: 1
}

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 2,
    FAILED = 3
}

if (response1.statusCode === StatusCode.SUCCESS) {
    // ...something
}

//--------------------------------------------------------------------------------------//
console.log("work with Union type")

function logId(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id)
    } else if (typeof id === 'number') {
        console.log(id)
    } else {
        console.log(id)
    }
}

function logObject(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b)
    }
}

//--------------------------------------------------------------------------------------//
console.log("work with Literal type")

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1
}

fetchWithAuth('url', 'post')
let method = 'post'
fetchWithAuth('url', method as 'post') //need to be very varefull with casts

//--------------------------------------------------------------------------------------//
console.log("work with Aliases type")
type httpMethod = 'post' | 'get'
type coolString = string

function fetchWithAuth2(url: coolString, method: httpMethod): 1 | -1 {
    return 1
}

type User = {
    name: string,
    age: number,
    skills: string[]
}
type Role = {
    id: number
}
type UserWithMandatoryRole = User & Role
let userWithRole: UserWithMandatoryRole = {
    name: 'Flamio',
    age: 30,
    skills: ['1', '2'],
    id: 1
}
type UserWithMandatoryNotRole = User | Role
let userWithRole1: UserWithMandatoryNotRole = {
    name: 'Flamio',
    age: 30,
    skills: ['1', '2'],
}

//--------------------------------------------------------------------------------------//
console.log("work with Interfaces")

interface User1 {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
}

interface Role1 {
    roleId: number
}

interface UserWithRole extends User1, Role1 {
    createdAt: Date
}

let user1: UserWithRole = {
    name: 'Flamio',
    age: 30,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),

    log(id) {
        return ''
    }
}

interface UserDic {
    [index: number]: User
}

//--------------------------------------------------------------------------------------//
console.log("work with Optional")

interface UserOpt {
    login: string,
    password?: string, // ? -> means that field is optional
}

const userOpt: UserOpt = {
    login: 'dmitry@flame.yes',
    password: '1',
}

const userOpt2: UserOpt = {
    login: 'dmitry@flame.yes',
}

function multiply(first: number, second?: number): number {
    if (!second) {
        return first + first
    }
    return first + second;
}

multiply(5)

interface UserProOpt {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass(user: UserProOpt) {
    const t = user.password?.type
}

function test(param?: string) {
    const t = param ?? multiply(5) // if param is null or undenfined it will run function multiply()
}

//--------------------------------------------------------------------------------------//
console.log("work with Void type")

function logId2(id: string | number): void {
    console.log(id)
}

const a = logId2(1); //void return type

function multiply2(f: number, s?: number): number | void {
    if (!s) {
        return f * f;
    }
}

type voidFunc = () => void

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return true
}
const b = f2() // will be void

const skills3 = ['Dev', 'DevOps']

const user3 = {
    s: ['s']
}
skills3.forEach((skill) => user3.s.push(skill)) // void shows, that function can return anything,
// that why we can do such manipulations

//--------------------------------------------------------------------------------------//
console.log("work with Unknown type")
// Unknown != any

let input: unknown

input = 3
input = ['s', 'sdf']

//let rest: string = input // Unknown CAN'T be assigne to the type

function run(i: unknown) {
    if (typeof i == 'number') {
        i++
    } else {
        i
    }
}

run(input)

async function getData() {
    try {
        await fetch('')
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

type U1 = unknown | number;
type I1 = unknown & string;

//--------------------------------------------------------------------------------------//
console.log("work with Never")

function generateError(message: string): never {
    throw new Error(message)
}

function dumpError(): never {
    // return 'string'; can't return nothing, because return type -> never
    while (true) {
    }
}

type paymentAction = 'refund' | 'checkout' | 'reject'

function processAction(action: paymentAction) {
    switch (action) {
        case "refund":
            // ...
            break
        case "checkout":
            // ...
            break
        default:
            //  const _: never = action; // we can't assign action to never, because "reject" option note used in switch case, but exists. That's type never could be used as additional check
            throw new Error('Action do not exist')
    }
}

function isString (x: string | number): boolean {
    if (typeof x === 'string') {
        return true
    } else if (typeof  x=== 'number'){
        return false
    }
    generateError('sss') // here we return never. Without this we can't return boolean type
}

//--------------------------------------------------------------------------------------//
console.log("work with Null")

const n: null = null;
const n1: any = null;
//const n2: number = null; can't assign because of param !!!strictNullCheck!!! in the TS config;


