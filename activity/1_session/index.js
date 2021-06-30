// Ejercicio 1

import {} from "./aboutme.js";

console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
for(var i=1;i<100;i++){
    if(i%7==0)
        console.log(i);
}

// Ejercicio 5

// Ejercicio 6
let formatter={prefix:"Hola", 
    append: function(param){console.log(formatter.prefix+" "+param);},
    toLowerString: function(parameter){console.log(parameter.toLowerCase());}
};

formatter.append("World");

formatter.toLowerString("I´m Fredy Zurita");
