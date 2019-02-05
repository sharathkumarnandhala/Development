function display(name:string="Accenture")
{
console.log("welcome"+name);
}

display();
display("sharath");


function area(height:number,width?:number)
{
   var width=10;
    console.log("area"+(0.5*height*width));
}

area(10,20);

function addnumber(...nums:number[]){
    var i;
    var sum:number=0;
    for(i=0;i<nums.length;i++)
    {
       sum=sum+nums[i];
     
    }
    console.log("sum of numbers",sum);
}

addnumber(1,2,3);
