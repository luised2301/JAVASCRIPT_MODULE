/*Practica Grupal 2
Arrow function
Pedir al usuario una cadena de texto
Declarar una función flecha para
Pasarle la oración del usuario como parámetro de la función declarada
verificar si esa oración es un palíndromo
Retornar el resultado y mostrarlo al usuario (usando log o aler)
Por ejemplo:
// isPalindrome('hola') -> No es un palíndromo
// isPalindrome('oso') -> SI es un palindromo
 
   Podemos probar con las siguientes ->
   anita lava la tina -> Palindromo
   oso -> Palindromo
   seres -> Palindromo
 
   Hint / Pista
    Quitamos los espacios*/

    const word = prompt ("Escribe una oracion para determinar si es palindromo: ");

    function isPalindrome(a){
        let wordLength = a.length;
        console.log (`Tu palabra es: "${a}" y tiene ${wordLength} caracteres`);

        
        for (let index = 0; index < wordLength/2; index++) {


            if ((word.charAt(index))!=(word.charAt(wordLength-index-1))){
                console.log("tu palabra no es palindromo")
                break
            }
            else{
                console.log("tu palabra es palindromo")
              
            }
        }
        

    }

    isPalindrome(word);
