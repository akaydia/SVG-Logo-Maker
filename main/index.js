// index.js
const inquirer = require("inquirer");
const fs = require("fs");

const Square = require("./library/square.js");
const Triangle = require("./library/triangle.js");
const Circle = require("./library/circle.js");

const promptText = {
    type: "input",
    name: "text",
    message: "Enter up to three characters: ",
    validate: (input) => input.length <= 3 || "Text must be 3 characters or less",
};

const promptTextColor = {
    type: "input",
    name: "textColor",
    message: "Enter a color keyword or hexadecimal number for the text: ",
};

const promptShape = {
    type: "list",
    name: "shape",
    message: "Select a shape: ",
    choices: ["circle", "triangle", "square"],
};

const promptShapeColor = {
    type: "input",
    name: "shapeColor",
    message: "Enter a color keyword or hexadecimal number for the shape: ",
};

inquirer
    .prompt([promptText, promptTextColor, promptShape, promptShapeColor])
    .then(({ text, textColor, shape, shapeColor }) => {
        let shapeObj;
        switch (shape) {
            case "circle":
                shapeObj = new Circle(50, shapeColor);
                break;
            case "triangle":
                shapeObj = new Triangle(80, shapeColor);
                break;
            case "square":
                shapeObj = new Square(80, shapeColor);
                break;
        }

const svg = `
    <svg width="300" height="200">
    ${shapeObj.draw()}
    <text x="150" y="100" text-anchor="middle" dominant-baseline="central"
        font-size="48" fill="${textColor}">${text}</text>
    </svg>
    `;

    fs.writeFileSync("logo.svg", svg);
    console.log("Generated logo.svg");
    })
    .catch((err) => console.error(err));
