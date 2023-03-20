export default function wordCheck(inputWord, correctWord) {
    const checkedLetters = [];
    const lettersWithCorrectPlacement = [];
    for(let i=0; i<inputWord.length; i++) {
        const currentLetter = inputWord[i];
        const correctLetter= correctWord.includes(currentLetter);
        const correctPlacement = correctWord.indexOf(currentLetter) === i;
        if(correctLetter && correctPlacement) {
            const obj = {};
            obj[currentLetter] = "correct"
            checkedLetters.push(obj);
        } 
        else if(correctLetter){
            const obj = {};
            obj[currentLetter] = "misplaced";
            checkedLetters.push(obj);
        } else {
            const obj = {};
            obj[currentLetter] = "incorrect";
            checkedLetters.push(obj);
        }
    }
    return checkedLetters;
}

const t = wordCheck("HALLÅ", "CYKLA"); 
console.log(t)