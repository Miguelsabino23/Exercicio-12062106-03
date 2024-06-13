// Extração de dominio 
const extractDomain = (email) => {
    if (email.includes('@')) {
    const emailDivision = email.split("@")
    return emailDivision[1];
    } else {
        return "Esse não é um email válido"
    }
}
console.log(extractDomain('miguel2012palhada@gmail.com'));

// Frequência de palavras 
const wordFrequency = (words) => {
    words = words.toLowerCase()
    words = words.replace(/[.,?!;()"'-]/g, " ")
    const wordsArr = words.split(/\s+/)
    const frequency = {};
    
    for (let word of wordsArr) {
        if (word.length > 0) {  
            if (frequency[word]) {
                frequency[word]++
            } else {
                frequency[word] = 1
            }
        }
    }
    return frequency;
}
console.log(wordFrequency("Miguel Sabino de Sabino"));

//Verificação de palíndromo
function checkPalindrome(word) {
    word = word.toLowerCase();
    word = word.replace(/[^a-z0-9]/g, '');
    const wordReversed = word.split('').reverse().join('');
    
    if (word === wordReversed) {
        return "É um palíndromo"
    } else {
        return "Não é um palíndromo"
    }
}
console.log(checkPalindrome("arara"))

//Verificação anagrama
const areAnagrams = (word1, word2) => {
    const normalize = (word) => word.toLowerCase().replace(/\s+/g, '').split('').sort().join('')

    return normalize(word1) === normalize(word2) ? "É um anagrama" : "Não é um anagrama"
} 
console.log(areAnagrams("amor", "roma"))

//Formatar string
const formatString = (word, convention) => {
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    word = word.toLowerCase().trim()
    const words = word.split(/\s+/)

    if (convention === "camelCase") {
        return words.map((w, index) => index === 0 ? w : capitalizeFirstLetter(w)).join('')
    } else if (convention === "PascalCase") {
        words.map(w => capitalizeFirstLetter(w)).join('')
    } else if (convention === "snake_case") {
        words.join('_')
    } else if (convention === "kebab-case") {
        words.join('-')
    } else {
        word
    }
}

console.log(formatString("sei la", "camelCase"))