// index.js
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Square = require("./library/square.js");
const Triangle = require("./library/triangle.js");
const Circle = require("./library/circle.js");

const defaultHtml = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>My Logo</title>
        </head>
        <body>
            <h1>Welcome to My Logo</h1>
        </body>
    </html>
`;

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
                shapeObj = new Circle(200, shapeColor);
                break;
            case "triangle":
                shapeObj = new Triangle(200, shapeColor);
                break;
            case "square":
                shapeObj = new Square(200, shapeColor);
                break;
        }


        const svg = `
    <svg width="300" height="200">
        ${shapeObj.draw()}
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central"
            font-size="32" fill="${textColor}" >${text}</text>
    </svg>
`;

        fs.writeFileSync("logo.svg", svg);
        console.log("Generated logo.svg");

        // read the contents of the index.html file
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log('Successfully read index.html.');

             // remove any existing logo from the file
             const updatedHtml = data.replace(/<div id="logo">.*<\/div>/s, '<div id="logo"></div>');

            // insert the SVG logo into the file
            const logoSvg = fs.readFileSync(path.join(__dirname, 'logo.svg'), 'utf8');
            console.log(data);
            const updatedHtmlWithLogo = updatedHtml.replace('<div id="logo"></div>', `<div id="logo">${logoSvg}</div>`);
            // write the updated contents back to the file
            fs.writeFile(path.join(__dirname, 'index.html'), updatedHtmlWithLogo, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log('Successfully updated index.html with the SVG logo.');
            }); //write file
        });
    }) // .then()
    .catch((err) => console.error(err));