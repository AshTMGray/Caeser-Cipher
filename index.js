const lowercase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
const uppercase = lowercase.map(letter => letter.toUpperCase());
console.log(uppercase)
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random(-25, 25));

clearBoxes = () => {
    document.getElementById('output').innerHTML = '';
    document.getElementById('encodeInput').value = '';
    document.getElementById('decodeInput').value = '';
}

document.getElementById('randKey').addEventListener('click', () => {
    document.getElementById('keyVal').value = random(-25, 25);
})

//encode logic
function encrypt() {
    let input = document.getElementById('encodeInput').value.toLowerCase();
    let output = '';
    for (let i = 0; i < input.length; i++) {
        let key = document.getElementById('keyVal').value;
        let letter = input[i];
        let index = lowercase.indexOf(letter);
        let newIndex = (Number(index) + Number(key))           ;
        console.log(newIndex)
        if (newIndex < 0) {
            newIndex = newIndex + 26;
        }
        if (lowercase.includes(letter)) {
            output += lowercase[newIndex % 26];
        } else if (uppercase.includes(letter)) {
            output += uppercase[newIndex % 26];
        } else {
            output += letter;
        }
    }
    console.log(output)
    document.getElementById('output').innerHTML = output;
}
document.getElementById('encodeInput').addEventListener('keyup', encrypt);
// document.getElementById('keyVal').addEventListener('change', encrypt);
//decode logic
function decrypt() {
    let input = document.getElementById('decodeInput').value.toLowerCase();
    let output = '';
    for (let i = 0; i < input.length; i++) {
        let key = document.getElementById('keyVal').value;
        let letter = input[i];
        let index = lowercase.indexOf(letter);
        let newIndex = (Number(index) - Number(key))           ;
        console.log(newIndex)
        if (newIndex < 0) {
            newIndex = newIndex + 26;
        }
        if (lowercase.includes(letter)) {
            output += lowercase[newIndex % 26];
        } else if (uppercase.includes(letter)) {
            output += uppercase[newIndex % 26];
        } else {
            output += letter;
        }
    }
    console.log(output)
    document.getElementById('output').innerHTML = output;
}
document.getElementById('decodeInput').addEventListener('keyup', decrypt);
// document.getElementById('keyVal').addEventListener('change', encrypt);

document.getElementById('encodeBtn').addEventListener('click', () => {
    document.getElementById('encode').classList.remove('hidden');
    document.getElementById('decode').classList.add('hidden');
    clearBoxes();
    console.log('Switched to encode');
})
document.getElementById('decodeBtn').addEventListener('click', () => {
    document.getElementById('decode').classList.remove('hidden');
    document.getElementById('encode').classList.add('hidden');
    clearBoxes();
    console.log('Switched to decode');
})



