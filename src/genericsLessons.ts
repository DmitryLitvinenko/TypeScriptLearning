console.log("Generics: built-in generics")
const num: Array<number> =[1, 2, 3]

async function test() {
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
function getSplitedHalf<T>(data: Array<T>): Aarray <T> {
    const l = data.length / 2;
    return data.splice(0, 1)
}

getSplitedHalf<number>([1, 2, 3])