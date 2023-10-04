
function wordCounter(sentence){
    let wordFrequencyMap = new Map () ;
    const words = sentence.split(/\s+/);

    for (let word of words){
        let cleanword = word.toLowerCase().replace(',','');
        if (cleanword.length > 0){
            wordFrequencyMap.set(cleanword , ( wordFrequencyMap.get(cleanword) || 0 ) + 1 );
        }
    }
    return wordFrequencyMap;
}

let sentence = "please please submit your assignment on time, your assignments are important ";
let result = wordCounter(sentence);

console.log(result);