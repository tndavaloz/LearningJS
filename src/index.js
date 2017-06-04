#! /usr/bin/env node
'use strict';

const program = require('commander');
const _version = require('../package.json').version;

program
  .version(_version);

program
  .option('-p, --pepper', 'adds pepper to the pizza')
  .option('-c, --cheese', 'adds pepper to the pizza')
  .option('-h, --hot-level <hot>', 'select hotness level of pizza', 'not that')

program
  .parse(process.argv);

if (program.pepper) {
  console.log('Your pizza contains pepper');
} 
if (program.cheese) {
  console.log('You pizza containes cheese');
}
if (program.hotLevel) {
  console.log('Your pizza is ' + program.hotLevel + ' hot');
}
