const { readFileSync, writeFileSync }  = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result.txt',
    `\nHere is the result from async file : \n${first} ${second}`,
    { flag: 'a' }
)