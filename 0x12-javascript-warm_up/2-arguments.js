#!/usr/bin/node
const strArgs = process.argv.length - 2;
if (strArgs === 0) {
  console.log('No argument');
} else if (strArgs === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}