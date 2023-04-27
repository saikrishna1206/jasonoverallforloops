//given json data iterate with for,for in,for of and forEach loops respectively.
var employee=[{"Name":"kalai",
         "age":"23",
         "email":"kalai@gmail.com",
         "salary":"5000$"},
         
         {"Name":"vikki",
         "age":"21",
         "email":"vikki@gmail.com",
         "salary":"4000$"},
         
         {"Name":"prakash",
         "age":"22",
         "email":"prakash@gmail.com",
         "salary":"3000$"}];


//for loop   
for(i=0;i<employee.length;i++){
   console.log(employee[i]);          
} ;
console.log("...............");
//for in loop

for( const x in employee){
    console.log(employee[x]);
} ;       
console.log("..............");
//for of loop

for(let a of employee){
    console.log(a);
};
console.log("..............");
//for Each loop
employee.forEach(function()
{
    console.log(employee[0]);
});
