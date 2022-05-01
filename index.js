function temperature (unitTemp, temp, toTemp){
    let kelvin = 0;
    let celsius = 0;
    let fahrenheit = 0;
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

}



console.log(temperature('kelvin', 500, 'celsius'))

