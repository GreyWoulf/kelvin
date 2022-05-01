// Define a function temperature passing in the parameters unitTemp, temp, and toTemp
function temperature (unitTemp, temp, toTemp){
    // create temperature variables and set them to 0
    let kelvin = 0;
    let celsius = 0;
    let fahrenheit = 0;
    let newton = 0;
    // create if statements to define what cases we need to convert kelvin to the requested temperature unit
    //  we start with Kelvin to Celsius 
    if(unitTemp.toLowerCase() === 'kelvin' && toTemp.toLowerCase() === 'celsius'){
        // add the temp paramenter to the kelvin variable
        kelvin += temp;
        // subtract 273 from the kelvin variable to get celsius
        celsius = kelvin - 273;
        // returned our converted temperature in Celsius
        return `The temperature is ${celsius} degrees in Celsius`
    }
    //  we create another if statment to get Kelvin to Fahrenheit 
    else if (unitTemp.toLowerCase() === 'kelvin' && toTemp.toLowerCase() === 'farenheit'){
        // add the temp parameter to the Kelvin variable
        kelvin += temp;
        // subtract 273 from the Kelvin varible to get celsius
        celsius = kelvin - 273;
        // converted celsius to fahrenheit and rounded the number
        fahrenheit = Math.floor(celsius * (9/5) + 32);
        // returned our converted temperature in Fahrenheit
        return `The temperature is ${fahrenheit} degrees in Fahrenheit`
    }
    //  we create another if statment to get Kelvin to Newton 
    else if (unitTemp.toLowerCase() === 'kelvin' && toTemp.toLowerCase() === 'newton'){
        // add the temp parameter to the Kelvin variable
        kelvin += temp;
        // subtract 273 from the Kelvin variable
        celsius = kelvin - 273;
        // converted celsius to newton and rounded the number
        newton = Math.floor(celsius * (30/100));
        // returned our converted temperature in Newton
        return `The temperature is ${newton} degrees in Newton`
    }
    // these are extra if statements if I wanted to begin converting all forms of unit temperature so celsius to fahrenheit and vice versa
    // might updated with more reverse use cases later
    else if (unitTemp.toLowerCase() === 'celsius' && toTemp.toLowerCase() === 'fahrenheit'){
        celsius += temp;
        fahrenheit = Math.floor(celsius * (9/5) + 32);
        return `The temperature is ${fahrenheit} degrees Fahrenheit`
    }
    else if (unitTemp.toLowerCase() === 'fahrenheit' && toTemp.toLowerCase() === 'celsius'){
        fahrenheit += temp;
        celsius = Math.floor((fahrenheit - 32) / (9/5));
        return `The temperature is ${celsius} degrees Celsius`
    }

}



console.log(temperature('kelvin', 500, 'celsius'))

