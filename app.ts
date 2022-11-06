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
