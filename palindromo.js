function isPalindromo(text){
    let cleanText = text.normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "") //quitando tildes
                        .replace(/ /g, "")  //quitando espacios
                        .toLowerCase(); //volviendo todo a minúscula
    
    let invertedText = cleanText
                            .split('') //separando caracteres en un array
                            .reverse() //dando la vuelta al array
                            .join('') //uniendo los caracteres nuevamente en un texto
                            .toLowerCase(); //volviendo todo a minúscula

    if(cleanText == invertedText){
        return true;
    }
    return false;
}
console.log(isPalindromo("Reconocer"));