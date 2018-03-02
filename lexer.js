// decided that the first pass should just be an interpreter in JS, which will make implementing modules, filesystem, etc. a lot easier
// using this as a reference: http://lisperator.net/pltut/parser/

if (process.argv.length !== 3) {
  console.log('Usage: node lexer.js <file>.kch');
  process.exit(1);
}

const filename = process.argv[2];

const rl = require('readline');
const fs = require('fs');

const reader = rl.createInterface({ input: fs.createReadStream(filename); });

// do I stop at the 'end' or 'close' event?
