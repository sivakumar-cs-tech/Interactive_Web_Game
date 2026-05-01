let b =Math.floor(Math.random()*101)
let count = 10
function a()
{
count--
document.getElementById("count").innerHTML= " "+count
   let a = document.getElementById("i1").value
   if(a>b)
   {
    document.getElementById("ans").innerHTML="the value is too high"
   }
   else if(a<b)
   {
    document.getElementById("ans").innerHTML="the value is too low"
   }
   else
   {
    document.getElementById("ans").innerHTML="the guess is correct"
    document.getElementById("ans").style.color="#000000"
    count=count+1
    if(count>=5)
    {
        document.getElementById("res").innerHTML="super "
        document.getElementById("res").style.color="#white"
    }
    else if(count>=2)
    {
        document.getElementById("res").innerHTML="better "
        document.getElementById("res").style.color="white"
    }
    else
    {
        document.getElementById("res").innerHTML="work more "
        document.getElementById("res").style.color="#F0EDCF"
    }
   }
  if(count<=0 )
  {
    document.getElementById("ans").innerHTML="game over"
    document.getElementById("ans").style.color="black"
    document.getElementById("count").innerHTML=" no more"
  }
}
console.log(b);