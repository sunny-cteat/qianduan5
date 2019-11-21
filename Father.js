function Father (bloodType) {
        this.bloodType=bloodType;
    }
Father.prototype.wife="haha";
function Son (name,age,phone,mother){
        Father.call(this,'A');
        this.name=name;
        this.age=age;
        this.mother=mother;
        this.phone=phone;
    }
let son1 = new Son('mike',18,123456789,Father.prototype.wife);
console.log(son1);
function Daugther(name,age,phone,mother){
        Father.call(this,'A');
        this.name=name;
        this.age=age;
        this.mother=mother;
        this.phone=phone;
    }
let daugther1 = new Daugther('marry',18,123422222,Father.prototype.wife);
console.log(daugther1);
Object.defineProperty(son1,"name",{
    configurable:true,
    enumerable:true,
    writable:true,
    value:"dog"
})
console.log(son1.name);
Object.defineProperty(son1,"name",{
    configurable:true,
    enumerable:true,
    writable:true,
    value:"mike"
})
console.log(son1);
console.log(Father.prototype.wife);
console.log(Son === Son.prototype.constructor);
