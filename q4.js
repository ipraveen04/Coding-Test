// using sort method()
function findLongestWord(str) {
    var lgWord = str.split(' ').sort((a, b) => b.length - a.length);
    return lgWord[0].length
}
console.log(findLongestWord("Where are you going Praveen ?"));


// using reduce method() 
function findLongestWord(str){
    var lgWord = str.split(' ').reduce((longest, current) =>
        current.length > longest.length ? current : longest
    );
    return lgWord.length
}
console.log(findLongestWord("Where are you going Praveen ?"));


// 