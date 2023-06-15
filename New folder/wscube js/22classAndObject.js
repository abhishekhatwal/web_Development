class Person {
   constructor(uname,uage){
    this.name = uname;
    this.age=uage;
   }
    detail(){
    console.log(`The age of ${this.name} is ${this.age} `);
     }
}
       
    
    const p=new Person("abhi",25);
    p.detail();