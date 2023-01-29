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

console.log("Conditional types")
const a1: number = Math.random() > 0.5 ? 1 : 0

interface HTTPResponse1<T extends 'success' | 'failed'> {
    code: number
    data: T extends 'success' ? string: Error
}

const suc: HTTPResponse1<'success'> = {
    code: 200,
    data: 'done'
}

const err: HTTPResponse1<'failed'> = {
    code: 200,
    data: new Error
}

//------------
//simplify overload
class User14 {
    id: number
    name: string
}

class UserPersistent extends User14{
    dbId: string
}
//simplify overload
function getUser14(id: number): User14
function getUser14(dbId: string): UserPersistent
function getUser14(dbIdOrId: string | number): User14 | UserPersistent {
   if (typeof dbIdOrId === 'number') {
       return new User14()
   } else {
       return new UserPersistent()
   }
}

//simplify overload 2
type UserOrUserPersistent<T extends string | number> = T extends number ? User : UserPersistent

function getUser2<T extends string | number> (id: T): UserOrUserPersistent<T> {
    if (typeof id === 'number') {
        return new User14() as UserOrUserPersistent<T> //this is minus of conditional types, TS can't check types in runtime
    } else {
        return new UserPersistent() as UserOrUserPersistent<T>
    }
}

const test1234253 = getUser2('string')
const test1234255 = getUser2(2)