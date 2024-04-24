"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const deckRoute_1 = require("./routes/deckRoute");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
// app.use(
//   cors({
//     origin: '*',
//   })
// );
exports.app.use(express_1.default.json());
// app.use(express.json({ limit: '25mb' }));
exports.app.use(express_1.default.urlencoded({ limit: '25mb', extended: true }));
exports.app.disable('x-powered-by'); // less hackers know about our stack
//  displaying welcome message
exports.app.get('/', (req, res) => {
    res.send({
        message: 'Welcome here!',
    });
});
exports.app.use('/api/v1', deckRoute_1.deckRoute);
