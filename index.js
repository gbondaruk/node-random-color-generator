// import dependencies
import { argv } from 'node:process';
import chalk from 'chalk';
import { randomColor } from 'randomcolor';

// define random color and chalk for formatting output color
const color = randomColor();
const chalkColor = chalk.hex(color);

const userColor = randomColor({ luminosity: argv[3], hue: argv[2] });
const chalkUserColor = chalk.hex(userColor);

// if argv.length is over 3, values for luminosity and hue are pulled from argv[2] & argv[3], otherwise a random color is generated
if (argv.length > 3) {
  console.log(
    chalkUserColor(`
 ###############################
 ###############################
 ###############################
 #####                     #####
 #####       ${userColor}       #####
 #####                     #####
 ###############################
 ###############################
 ###############################`),
  );
} else {
  console.log(
    chalkColor(`
 ###############################
 ###############################
 ###############################
 #####                     #####
 #####       ${color}       #####
 #####                     #####
 ###############################
 ###############################
 ###############################`),
  );
}
