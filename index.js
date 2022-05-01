function temperature (unitTemp, temp, toTemp){
    let kelvin = 0;
    let celsius = 0;
    let fahrenheit = 0;
    let newton = 0;
    if(unitTemp.toLowerCase() === 'kelvin' && toTemp.toLowerCase() === 'celsius'){
        kelvin += temp;
        celsius = kelvin - 273;
        return `The temperature is ${celsius} degrees in Celsius`
    }
    else if (unitTemp.toLowerCase() === 'kelvin' && toTemp.toLowerCase() === 'farenheit'){
        kelvin += temp;
        celsius = kelvin - 273;
        fahrenheit = Math.floor(celsius * (9/5) + 32);
        return `The temperature is ${fahrenheit} degrees in Fahrenheit`
    }
    else if (unitTemp.toLowerCase() === 'kelvin' && toTemp.toLowerCase() === 'newton'){
        kelvin += temp;
        celsius = kelvin - 273;
        newton = Math.floor(celsius * (30/100));
        return `The temperature is ${newton} degrees in Newton`
    }
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

