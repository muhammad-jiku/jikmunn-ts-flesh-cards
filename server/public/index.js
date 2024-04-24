"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const connectToDB_1 = require("./utils/connectToDB");
const port = process.env.PORT || 5000;
// Connecting to database
(0, connectToDB_1.connectToDB)();
const server = app_1.app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
