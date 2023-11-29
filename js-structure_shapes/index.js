console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/circle.js";
import Pentagon from "./components/Pentagon/pentagon.js";
import Square from "./components/Square/square.js";

const root = document.getElementById("root");

let circleElement = Circle();
let squareElement = Square();
let pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
