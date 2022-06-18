function Dog(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;

    this.bark= function(){
        console.log("I'm, Barking");
    };
}
class Cat{
    constructor(name,age, color){
        this.name=name;
        this.age=age;
        this.color=color;
    }

    meow(){
        console.log("I'm, Meowing");
    }

}


function testObjects(){
    
    // object literal
    let dog1 = {
        name: "Blaq",
        age: 3,
        color: "blue"
    };
    let dog2 ={
        name: "Fido",
        age:7,
        color:"Grey"
    };  

    console.log(dog1, dog2);
    //object constructors
    let dog3= new Dog("Fido",4,"Blue");
    console.log(dog3);
    dog3.bark();


    //classes
    let cat1 =new Cat ("Mr. Whispers", 4, "Grey");
    console.log(cat1);
    cat1.meow();
}

function runTests(){
    console.log("------TESTS------");
    testObjects();
    
}


