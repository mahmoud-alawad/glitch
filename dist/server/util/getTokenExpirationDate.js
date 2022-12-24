"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenExpirationDate = void 0;
const ms_1 = __importDefault(require("ms"));
const jwt_config_1 = require("../config/jwt.config");
function getTokenExpirationDate() {
    const expiresInDays = (0, ms_1.default)(jwt_config_1.refreshJwtConfig.expiresIn) / 1000 / 60 / 60 / 24;
    const expiresAt = addDaysFromNow(expiresInDays);
    return expiresAt;
}
exports.getTokenExpirationDate = getTokenExpirationDate;
function addDaysFromNow(days) {
    const result = new Date();
    result.setDate(result.getDate() + days);
    return result;
}
//# sourceMappingURL=getTokenExpirationDate.js.map