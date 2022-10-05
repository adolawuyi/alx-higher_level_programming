#!/usr/bin/node
const strArgs = process.argv[2];
if (strArgs === undefined) {
  console.log('No argument');
} 
else {
  console.log(strArgs);
}