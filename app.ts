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
    .map(s => s +'! ')
    .reduce((a, b) => a + b)
console.log("print result: ")
console.log(res);
//result: Dev! Testing!