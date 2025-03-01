"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = Button;
const jsx_runtime_1 = require("react/jsx-runtime");
// this is a simple button component
// it's a functional component that returns a button element
function Button() {
    return ((0, jsx_runtime_1.jsx)("button", { children: (0, jsx_runtime_1.jsx)("h1", { children: "Click me!" }) }));
}
