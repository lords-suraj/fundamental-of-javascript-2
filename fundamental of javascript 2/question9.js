
const testString = 'Mithun';
const testString2 = 'anurag';

function uniqueCharactersCheck(str){

    let storage = {};
    for ( let i = 0; i < str.length; i++ ){
        if ( storage[str[i]]){
            return `The input string contains Duplicate`;
        } else 
        {
            storage[str[i]] = true;
        }
    }
    return `The input string contains unique characters`; // if condition doesn't match
}

console.log (uniqueCharactersCheck(testString));
console.log (uniqueCharactersCheck(testString2));