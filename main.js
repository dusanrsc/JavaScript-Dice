// random number variable
var number = Math.floor(Math.random() * 6);

// condition
if (number === 0) {
	console.log(
` ___________
|           |
|           |
|           |
|     *     |
|           |
|           |
|           |
-------------`);
} else if (number === 1) {
	console.log(
` ___________
|           |
|  *        |
|           |
|           |
|           |
|        *  |
|           |
-------------`);
} else if (number === 2) {
	console.log(
` ___________
|           |
|  *        |
|           |
|     *     |
|           |
|        *  |
|           |
-------------`);
} else if (number === 3) {
	console.log(
` ___________
|           |
|  *     *  |
|           |
|           |
|           |
|  *     *  |
|           |
-------------`);
} else if (number === 4) {
	console.log(
` ___________
|           |
|  *     *  |
|           |
|     *     |
|           |
|  *     *  |
|           |
-------------`);
} else {
	console.log(
` ___________
|           |
|  *     *  |
|           |
|  *     *  |
|           |
|  *     *  |
|           |
-------------`);
}
