
//library Land
const uid = Symbol('uid')
console.log(uid);


const user = {
    //id: 'p1',
    [uid]: 'p1',
    name: 'Tom',
    age: 30,
    [Symbol.toStringTag]:'User Object '
}

user[uid] = 'p3'
// app land  =>using the library 
user.id = 'p2'

console.log(user[Symbol('uid')]);

const company  = {
    curEmployee: 0,
    employess: ['Tom', 'Manu', 'Anna'],
    next(){
        if(this.curEmployee >= this.employess.length){
            return{value: this.curEmployee, done : true}
        }
        const returnValue ={value: this.employess[this.curEmployee], done: false}
        this.curEmployee++
        return returnValue
    },
[Symbol.iterator]: function* employeeGenerator(){
    let employee =  company.next()
    
    while(!employee.done){
        yield employee.value
        console.log(employee.value);
        employee = company.next()
    }
}
}
console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());