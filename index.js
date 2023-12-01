const franc = require('franc');
const langs = require('langs');
const color = require('colors');
try{
const langString = process.argv[2];
const langCode = franc(langString);
const language = langs.where('3',langCode);
console.log(language.name.green);
}catch(e){
    console.log('provide big string'.red);
}