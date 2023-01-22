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