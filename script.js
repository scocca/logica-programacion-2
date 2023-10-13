function TempConverter(){
  let input =parseInt(prompt("Ingrese la temperatura a convertir: "))
  
  while (isNaN(input)){
   
    input=parseInt(prompt("Ingrese la temperatura a convertir: "))
    
  }
  
    const kelvin = input + 273.5
    const farenheit =  input*1.8+32
  

  console.log("conversion a kelvin: "+kelvin)
  console.log("conversion a Farenheit: "+farenheit)
}

TempConverter()