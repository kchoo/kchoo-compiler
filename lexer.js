// decided that the first pass should just be an interpreter in JS, which will make implementing modules, filesystem, etc. a lot easier
// using this as a reference: http://lisperator.net/pltut/parser/

if (process.argv.length !== 3) {
  console.log('Usage: node lexer.js <file>.kch');
  process.exit(1);
}

const WHITESPACE_REGEX = /\s/;

const filename = process.argv[2];

const rl = require('readline');
const fs = require('fs');
const $q = require('kchoo-q');

const deferred = $q.defer();

const program = [];

const reader = rl.createInterface({ input: fs.createReadStream(filename); });

let currentExpression;

rl.on('line', function (line) {
  let pointer = 0;
  
  while (pointer < line.length) {
    const char = line[pointer];
    
    while (!WHITESPACE_REGEX.test(char)) {
      currentExpression += char;
    }
    
    ++pointer;
  }
});

rl.on('close', function () {
  deferred.resolve(program);
});

return deferred.promise;
