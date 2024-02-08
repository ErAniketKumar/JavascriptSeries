//function defination

function fun(){
    console.log("hello function");
}
fun(); //calling function


//return type and accept parameter
function fun1(x,y)
{
    return x+y;
}

const res=fun1(5,2);
console.log(res);


function loginUser(username)
{
    return `${username}, login`;
}

console.log(loginUser("Aniket"));


