// Note: this is fairly untested currently
// arguments: plaintext, base64string
function searchForPlainTextInBase64(plaintext, base64string){
    let bEnc = Buffer.from(base64string, 'base64');
    let bPlain = Buffer.from(plaintext);
    let fullString = bEnc.toString('hex')
    let searchString = bPlain.toString('hex')
    let start = fullString.indexOf(searchString)
    if (start == -1) { return null }
    finish = start + searchString.length
    // console.log(bEnc.toString('hex'), bPlain.toString('hex'));
    // console.log(bEnc, bPlain);
    // for(i=0; i<bEnc.length; i++){
    //     let finish = i+bPlain.length
    //     if(bEnc.slice(i,finish) == bPlain){return [i, finish]}
    // }
    return [start * 2, finish * 2]; //convert nibbles to bytes by multiplying by 2
}

function searchForPlainTextInBase64Url(plaintext, base64UrlString) {
    searchForPlainTextInBase64(plainText, base64UrlString.replaceAll('-', '+').replaceAll('_', '/'))
}

