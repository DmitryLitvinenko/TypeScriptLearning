console.log("Keyof lesson")

interface IUser11 {
    name: string
    age: number
}

type KeysOfUser = keyof IUser11

const key: KeysOfUser = 'age'

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const user11: IUser11 = {
    name: 'Dmitry',
    age: 30
}

const userName = getValue(user11, 'name')

console.log("Typeof lesson")

let strOrNum: string | number
if (Math.random() > 0.5) {
    strOrNum = 5
} else {
    strOrNum = 'str'
}

let str2OrNum: typeof strOrNum

const user12 = {
    name: 'Dmitry'
}

type keyOfUser = keyof typeof user12;

enum Direction {
    Up,
    Down
}

type d = keyof typeof Direction

console.log("Indexed access types lesson")

interface Role2 {
    name: string
}

interface User13 {
    name: string;
    roles: Role[]
}

const user13: User13 = {
    name: 'Dmitry',
    roles: []
}

const nameUser13 = user13['name']
type rolesType = User13['roles']

type roleType = User13['roles'][number] //getting type from array

const roles = ['admin', 'user', 'super-user'] as const
type roleTypes = typeof roles[number] // transforming object to union type