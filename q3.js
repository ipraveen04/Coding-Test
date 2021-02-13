// using filter to remove vowels
function removeVowel(str){
    vowels=['a', 'e', 'i', 'o', 'u']
    return str.split('').filter(function(ele){
        return vowels.indexOf(ele.toLowerCase()) == -1;
    }).join('')
}
console.log(removeVowel("Hi!, what are you doing?"));


// using replace to remove vowels

function removeVowels(str){
    return str.replace(/[aeiou]/gi, '')
}
console.log(removeVowels("Where are you going?"));