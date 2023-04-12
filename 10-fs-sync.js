const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./content/hello.txt','utf-8')
console.log(first)
writeFileSync('./content/create-sync.txt','niki is a bitch omg')