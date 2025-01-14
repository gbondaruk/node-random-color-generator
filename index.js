// import dependencies
import { argv } from 'node:process';
import chalk from 'chalk';
import { randomColor } from 'randomcolor';

console.log(randomColor({ luminosity: argv[2], hue: argv[3] }));
