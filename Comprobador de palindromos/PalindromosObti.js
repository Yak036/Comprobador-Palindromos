function palindrome(str) {
    //a la palabra dada por el usuario se le quitan las mayúsculas con .toLowerCase()
    //luego se reemplazan los signos y espacios con la expression regular y el .remplace()
    let normal = str.toLowerCase().replace(/[\W_]/g, "");
    //se crea otra variable la cual voltea la palabra mediante la division de la misma en un array con .split(')
    //luego la gira mediante .reverse() y la vuelve a juntar con .join()
    let voltear = normal.split("").reverse().join("");
    console.log(`Palabra normal: ${normal} Palabra volteada: ${voltear}`);
    return normal === voltear;
}

console.log(palindrome("eyeDw.."));
