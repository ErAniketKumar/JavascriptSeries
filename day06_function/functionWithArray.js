//function with array aur object
//this rest operator is convert in array parameter , we can acess by indexing
function calculateCarPrice(...num1)//rest operator i.e when we passing to much agrument then we can accept easy using rest operator (...) triple dot
{
        return num1[2];
}


console.log(calculateCarPrice(200,300,500,600,800))



function calculateCarPrice(num, num2,...num1)//rest operator i.e when we passing to much agrument then we can accept easy using rest operator (...) triple dot
{
        console.log(num);
        console.log(num2);
        console.log(num1);
}


console.log(calculateCarPrice(200,300,500,600,800))


//passing object in function
const user={
        username:"Aniket",
        price:1000,
        age:20,
        roll:1054
}

function handleObj(obj){
        console.log(`user name is ${obj.username}, and age is: ${obj.age} okay thakyou `);
}

handleObj(user);

// we can also pass object direct in function argument
handleObj({
        "username":"anup",
        "price":20,
        age:25
});

//passing array in funcrion argument

function arrayHandle(arr){
        arr.forEach(element => {
                console.log(element);
        });
}

const arr=[1,2,3,4,5,6];

arrayHandle(arr);

//we can also pass array directly in function argument

arrayHandle([10,11,12,13,14,15,"hyy","hello","this is 2nd Array","thankyou"]);






