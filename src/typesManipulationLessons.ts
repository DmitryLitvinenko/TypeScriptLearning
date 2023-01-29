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