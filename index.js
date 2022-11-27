var prompt = require('prompt');

prompt.start();

prompt.get(['ваш неправильный текст'], function (err, result) {
    const text = result['ваш неправильный текст'].split("");
    let baza = ""
    text.forEach(bukva => {
        if(bukva == "з" || bukva == "З") {
            return baza += "Z"
        };
        if(bukva == "в" || bukva == "В") {
            return baza += "V"
        };
        baza += bukva
    });
    console.log(baza)
});
