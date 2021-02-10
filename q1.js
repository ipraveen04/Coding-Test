 var arr = [34, 33, 69, 23, 67, 100, 23]

// first using set
function removeDupli(num) {
return [...new Set(num)];
}
console.log(removeDupli(arr));


// second using filter
function removeDuplicates(data){
    return data.filter((value, i) => data.indexOf(value) === i);
}
console.log(removeDuplicates(arr));