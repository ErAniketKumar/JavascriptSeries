const tinder=new Object(); //this is non singleton object

console.log(tinder) ; //empty object

tinder.name="Aniket"; //key value added in object
tinder.age=20;
console.log(tinder);

//we can also insert object in object
const obj={
    email: "aniket@boat",
    age:30,
    fullname:{ //nesting object
        username:"Aniket",
        nickName:"piku",
        add:"bettiah"
    },
    phone:"9123120581"

}

console.log(obj.fullname.nickName);

//copy one object to anpther /// or assign object to other

const obj1={1:'a', 2:'b', 3:'c'}
const obj2={4:'d', 5:'e'};
const obj3={6:'f', 7:'g'};
const obj4=Object.assign({}, obj1,obj2, obj3);
console.log(obj4);

//using spred object;
const obj5={...obj, ...obj1, ...obj2,...obj3}
console.log(obj5);

//array of object

const user=[

    {
        id: 1,
        email: 'a@gmail.com'
    },
    {
        id: 2,
        email: 'b@gmail.com'
    },
    {
        id: 3,
        email: 'c@gmail.com'
    }
]

console.log(user[1].email); // output b@gmail.com  because 1 idx i.e 2nd position element

console.log(Object.values(obj1)); //return all value 

console.log(Object.keys(obj1))
console.log(Object.entries(obj1));