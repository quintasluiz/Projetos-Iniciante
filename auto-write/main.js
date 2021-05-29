const text = 'My viewers on twich are the bests 💛'

let index = 0;

function writeText(){
    document.body.innerText = text.slice(0, index);

    index++;

    if(index > text.length) {
        index = 0
    }
}

setInterval(writeText, 100);