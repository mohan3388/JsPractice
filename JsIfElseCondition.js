var a = Math.floor(100 + Math.random() * 900);
var b = Math.floor(100 + Math.random() * 900);
var c = Math.floor(100 + Math.random() * 900);
var d = Math.floor(100 + Math.random() * 900);
var e = Math.floor(100 + Math.random() * 900);

console.log("random numbers are: "+a+" "+b+" "+c+" "+d+" "+e);
 
if(a>b && a>c && a>d && a>e)
{
    console.log("greter number is: "+a);
}
if(b>a && b>c && b>d && b>e)
{
    console.log("greter number is: "+b);
}
if(c>b && c>a && c>d && c>e)
{
    console.log("greter number is: "+c);
}
if(d>b && d>c && d>a && d>e)
{
    console.log("greter number is: "+d);
}

if(e>b && e>c && e>a && e>d)
{
    console.log("greter number is: "+e);
}
// if(a<b && a<c && a<d && a<e || b<a && b<c && b<d && b<e || c<b && c<a && c<d && c<e || d<b && d<c && d<a && d<e)
// {
//     console.log("lower number is: "+a);
// }

else{
    
//max
if(a<b && a<c && a<d && a<e)
{
    console.log("lower number is: "+a);
}
if(b<a && b<c && b<d && b<e)
{
    console.log("lower number is: "+b);
}
if(c<b && c<a && c<d && c<e)
{
    console.log("lower number is: "+c);
}
if(d<b && d<c && d<a && d<e)
{
    console.log("lower number is: "+d);
}
if(e<b && e<c && e<a && e<d)
{
    console.log("lower number is: "+e);
}

}