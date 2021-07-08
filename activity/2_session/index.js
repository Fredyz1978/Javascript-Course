//Ejercicio 1
var person={
  name:"Fredy",
  age:42,
  profession:"Developer"
}

function getProperties(person)
{
  var obj;
  var result=[];
  var i =0;
  for (obj = person;obj!==null;obj=Object.getPrototypeOf(obj)){
    result[i]=Object.getOwnPropertyNames(obj);
    i++;
  }
  return result[0];
}
console.log(getProperties(person));

// Ejercicio 2

console.log(this===window);

//FUNCIONES SIN MODO ESTRICTO
function functionTest(){
  console.log(this===window);
}
functionTest();

//FUNCIONES CON MODO ESTRICTO
function functionTest(){
  'use strict';
  console.log(this===window);
}
functionTest();

//THIS EN UN METODO
let entidad={
  name:"Fredy",
  lastname:"Zurita",
  age:"42",
  present(){
    console.log(this);
  }
}
entidad.present();

//THIS EN UN METODO ARROW
let estudiante = {
  name:"Juan",
  lastname:"Perez",
  age:"26",
  present:() => {
      console.log(this);
  }
}
estudiante.present();

//EN UN EVENTO
function eventButton(){
  console.log(this);
}
eventButton();

//USANDO METODO CALL, BIND
let personCall = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
let person1 = {
  firstName:"Fredy",
  lastName: "Zurita"
}
console.log(personCall.fullName.call(person1, "Quito", "Ecuador"));


// Ejercicio 3
let cadena="";

// Función flecha
let add = (param) => {
  var i=param.length-1;
  var cadenaInvertida="";
  for(i;i>=0;i--){
    cadenaInvertida+=param[i];
  }
  return cadenaInvertida;
};
//llamado
let res=add.call(cadena, "Hola Mundo");
console.log(res); 

// Ejercicio 4
class user{
  constructor(username,password){
    this.username=username;
    this.password=password;  
  }

  login(){
    if(this.username=="admin" && this.password=="passwd"){
      console.log("El usuario se encuentra logueado.");
    }
    else{
      console.log("El usuario y/o password son incorrectos.");
    }
  }
}

//prueba login CORRECTO
let newLoginCorrecto=new user("admin","passwd");
newLoginCorrecto.login();

//prueba login INCORRECTO
let newLoginIncorrecto=new user("pepe","bad");
newLoginIncorrecto.login();

// Ejercicio 5
document.getElementById("loginSuccess").addEventListener("click", function loginCorrecto(){
  let newLoginCorrecto=new user("admin","passwd");
  newLoginCorrecto.login();
});

document.getElementById("loginFailure").addEventListener("click", function loginCorrecto(){
  let newLoginCorrecto=new user("pepe","bad");
  newLoginCorrecto.login();
});

// Ejercicio 6
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

document.getElementById("loginSuccessAsync").addEventListener("click",async ()=>{
  let res=await loginWitUsername("admin","passwd");
  console.log(res); 
})

document.getElementById("loginFailureAsync").addEventListener("click",async ()=>{
  try{
    let res=await loginWitUsername("fredy","1234")
    console.log(res); 
  }
  catch(ex){
    console.log("Ha ocurrido un error:"+ex);
  }
})

