// decided that the first pass should just be an interpreter in JS, which will make implementing modules, filesystem, etc. a lot easier

if (process.argv.length !== 3) {
  console.log('Usage: node lexer.js <file>.kch');
  process.exit(1);
}

const filename = process.argv[2];

const rl = require('readline');
const fs = require('fs');

const reader = rl.createInterface({ input: fs.createReadStream(filename); });

reader.on('line', function (line) {
  console.log('Line from file:', line);
});
