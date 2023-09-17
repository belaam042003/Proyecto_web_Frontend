"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Publicacion = connection_1.default.define('Publicacione', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    Publicaciones: {
        type: sequelize_1.DataTypes.TEXT
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Publicacion;