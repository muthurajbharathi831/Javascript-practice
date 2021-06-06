//call,bind,apply demonstration

//making external object available to function through call, apply and bind

var obj1 = {
    n1:10,
    n2:20
}

var obj2 = {
    n1:30,
    n2:40
}

//without call, apply, bind accessing external object
function sum(p1,p2){
    console.log(obj1.n1+p1+p2);
}

//call
function sum(p1,p2){
    /*var obj1 = {
        n1:10,
        n2:20
    }*/
    console.log("call () method example ");
    console.log(this.n1+p1+p2);
}


sum.call(obj1,2,3); // always first object is external object and comma seperated parameters 

//apply 
function sum2(p1,p2){
    console.log("apply () method example");
    console.log(this.n1+p1+p2);
}

sum2.apply(obj1,[1,2]);//apply takes first argument as external object and second argument as array which contains rest of the parameters needed

//bind example
function sum3(p1,p2){
    console.log("bind() method example");
    console.log(this.n1+p1+p2);
}

var bindExample = sum3.bind(obj1,3,4);// bind always returns a function we have to call that function
bindExample();// first approach to call bind
sum3.bind(obj1)(4,5); // second approach
sum3.bind(obj1,5,5)(); // third approach