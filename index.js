// import dependencies
import { argv } from 'node:process';
import chalk from 'chalk';
import { randomColor } from 'randomcolor';

// define random color and chalk for formatting output color
const color = randomColor();
const chalkColor = chalk.hex(color);

const userColor = randomColor({ luminosity: argv[3], hue: argv[2] });
const chalkUserColor = chalk.hex(userColor);

const onlyColor = randomColor({ hue: argv[2] });
const chalkOnlyColor = chalk.hex(onlyColor);

// if argv.length is over 3, values for luminosity and hue are pulled from argv[3] & argv[2],if it's === 3, only hue is pulled from argv[2]; otherwise a random color is generated,
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
} else if (argv.length === 3) {
  console.log(
    chalkOnlyColor(`
 ###############################
 ###############################
 ###############################
 #####                     #####
 #####       ${onlyColor}       #####
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
