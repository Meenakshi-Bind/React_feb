//map function
let ar=[1,2,4,6,8];
let ar2=[1,3,4,5,7];
function mappi(ar)
{
    return 2*ar;
}
mappians=ar.map(mappi);
console.log(mappians);

//filter function

function filtu(x)
{
    return x%2==0;
}

let filtuu=ar.filter(filtu);
console.log(filtuu);

//reduce function

function sum(a,b)
{
    return a+b;

}
let redu=ar.reduce(sum) ;
console.log(redu);