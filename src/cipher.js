
window.cipher = {

  encode : () => {
  // declarar las variables dondde se van a guardar los datos que el usario ingrese
  let cifrando =" ";
  let mensaje = mnsj.value;
  // el parseit se aplica para asegurarnos de que ingresen unicamente numeros
  let saltos=parseInt(salts.value);
  // nos separa las letras en bloques, el i se iguala a 0 y luego le indicamos que nuestro i debe ser menor a la extension de el mensaje y si es asi nos devolvera, el i aumentado en una vez
  for( i = 0; i < mensaje.length; i++){
  // para obtener el codigo ascii del mensaje ingresado
  let palabra= mensaje.charCodeAt(i);

  // se hace el parametro de las palabras tomando en cuenta que 65 es A mayuscula y 90 que es Z mayuscula. SI LA FRASE INGRESADA ES MAYOR O IGUAL A 65 Y MENOR O IGUAL A 90
  if (palabra >= 65 && palabra <= 90) {
  // NOS INDICA QUE EL VALOR DE LOS INDICES DEL MENSAJE NOS LO CAMBIA A EL VALOR ACTUAL DE LA PALABRAADEMAS NOS PIDE QUE SUSTITUYAMOS LAS LETRAS ANTERIORES DEPENDIENDO DEL NUMERO DE SALTOS CON EL RESIDUO QUE NOS PIDE %
  cifrando += String.fromCharCode((palabra - 65 + saltos) % 26 +65);
  // MANDA LLAMAR EL RESULTADO A JS Y LE PIDE QUE LO IMPRIMA EN LA PAGINA CON .innerHtml.
  // document.getElementById("resultado").innerHTML += cifrando;
  console.log(cifrando  + "mayusculas")
    }
  else if (palabra >= 97 && palabra <= 122) {
    cifrando +=String.fromCharCode((palabra -97 + saltos)% 26 +97);
  // document.getElementById("resultado").innerHTML += cifrando;
 

  }
  if (palabra === 32) {
    cifrando += String.fromCharCode(palabra);
    // document.getElementById("resultado").innerHTML += cifrando;
    
  }
}
 document.getElementById('resultado').innerHTML = cifrando
},
    decode : () => {
    let descifrando =" ";
    // guardamos el valor ingresado en la variable  mensaje
    let mensaje = mnsj.value;
    // el parseit se aplica para asegurarnos de que ingresen unicamente numeros
    let saltos=parseInt(salts.value);
    // nos separa las letras en bloques, el i se iguala a 0 y luego le indicamos que nuestro i debe ser menor a la extension de el mensaje y si es asi nos devolvera, el i aumentado en una vez
    for( i = 0; i < mensaje.length; i++){
    // para obtener el codigo ascii del mensaje ingresado
    let palabra= mensaje.charCodeAt(i);

    // se hace el parametro de las palabras tomando en cuenta que 65 es A mayuscula y 90 que es Z mayuscula. SI LA FRASE INGRESADA ES MAYOR O IGUAL A 65 Y MENOR O IGUAL A 90
    if (palabra >= 65 && palabra <= 90) {
      console.log(descifrando + "mayusculas")
    // NOS INDICA QUE EL VALOR DE LOS INDICES DEL MENSAJE NOS LO CAMBIA A EL VALOR ACTUAL DE LA PALABRAADEMAS NOS PIDE QUE SUSTITUYAMOS LAS LETRAS ANTERIORES DEPENDIENDO DEL NUMERO DE SALTOS CON EL RESIDUO QUE NOS PIDE %
    descifrando += String.fromCharCode((palabra - 90 - saltos) % 26 + 90);
    // MANDA LLAMAR EL RESULTADO A JS Y LE PIDE QUE LO IMPRIMA EN LA PAGINA CON .innerHtml.
      
      }
    else if (palabra >= 97 && palabra <= 122) {
      descifrando += String.fromCharCode((palabra - 122 - saltos)% 26 + 122);
      console.log(descifrando + "minusculas")
      

    }

   if (palabra === 32) {
      descifrando += String.fromCharCode(palabra);
      console.log(descifrando + "espacios vacios")
    

    }
    }
  document.getElementById("resultado").innerHTML += descifrando;
  }
}
