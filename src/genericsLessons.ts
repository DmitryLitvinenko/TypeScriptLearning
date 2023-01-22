console.log("Generics: built-in generics")
const num: Array<number> = [1, 2, 3]

async function test1() {
    const a = await new Promise<number>((resolve, reject) => {
        resolve(1)
    })
}

const check: Record<string, boolean> = {
    driver: true,
    kpp: false
}

console.log("Generics: function with generic")

//1. with generic "T" we allow any type
function logMiddleWare<T>(data: T): T {
    console.log(data)
    return data;
}

//2. this type can be setup strictly in next functions
const result = logMiddleWare<number>(10)
console.log(result)

//allows to split any array with generics
function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, 1)
}

getSplitedHalf<number>([1, 2, 3])

console.log("Generics: function transformation to string")

function toString<T>(data: T): string | undefined {
    if (Array.isArray(data)) {
        return data.toString()
    }
    switch (typeof data) {
        case 'string':
            return data
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return data.toString()
        case 'object':
            return JSON.stringify(data)
        default:
            return undefined
    }
}

console.log(toString(3))
console.log(toString(true))
console.log(toString(['a', 'b']))
console.log(toString({a: 1}))

console.log("Generics: using generics in types")

function getSplitedHalf2<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, 1)
}

getSplitedHalf2<number>([1, 2, 3])
const split: <T> (data: Array<T>) => Array<T> = getSplitedHalf;

interface ILogLine<T> {
    timeStamp: Date
    data: T
}

type LogLineType<T> = {
    timeStamp: Date
    data: T
}

//with an INTERFACE (ILogLine) or TYPE (LogLineType) we can add type to the data field
const logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}

console.log("Generics: restrictions")

class Vehicle1 {
    run: number;
}

//without generic extend generic to not know from where field run should be taken
function kmToMiles<T extends Vehicle1>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62
    return vehicle;
}

class LCV extends Vehicle1 {
    capacity: number
}

const vehicle = kmToMiles(new Vehicle1())
const lcv = kmToMiles(new LCV())
//-------

//this function is useless, only for example, how to use few generics
function logId5<T extends string | number, Y>(id: T, additionalData: Y): { id: T, data: Y } {
    console.log(id)
    console.log(additionalData)
    return {id, data: additionalData}
}

console.log("Generics: generic classes")

class Resp<D, E> {
    data?: D
    error?: E

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data
        }
        if (error) {
            this.error = error
        }
    }
}

const response = new Resp<string, number>('data', 0)

class HTTPResponse<F> extends Resp<string, number> {
    code: F;

    setCode(code: F) {
        this.code = code
    }
}

const response2 = new HTTPResponse();

console.log("Generics: mixins")

type Constructor = new (...args: any[]) => {}
type GConstructor<T = {}> = new (...args: any[]) => T

class List {
    constructor(public items: string[]) {
    }
}

class Accordion {
    isOpened: boolean
}

type ListType = GConstructor<List>
type AccordionType = GConstructor<Accordion>

class ExtendedListClass extends List {
    first() {
        return this.items[0]
    }
}

// same functionality with MIXINS
//-----
//Sometimes Mixins function writing with big letter
function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0]
        }
    }
}

class AccordionList {
    isOpened: boolean

    constructor(public items: string[]) {
    }
}

const list = ExtendedList(AccordionList)
const res4 = new list(['first', 'second'])
console.log(res4.first())

//-----

