"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePublicacion = exports.postPublicacion = exports.deletePublicacion = exports.getPublicacion = exports.getPublicaciones = void 0;
const publicacion_1 = __importDefault(require("../models/publicacion"));
const getPublicaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPublicaciones = yield publicacion_1.default.findAll();
    res.json(listPublicaciones);
});
exports.getPublicaciones = getPublicaciones;
const getPublicacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const publicacion = yield publicacion_1.default.findByPk(id);
    if (publicacion) {
        res.json(publicacion);
    }
    else {
        res.status(404).json({
            msg: `no se encontro la publicacion ${id}`
        });
    }
});
exports.getPublicacion = getPublicacion;
const deletePublicacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const publicacion = yield publicacion_1.default.findByPk(id);
    if (!publicacion) {
        res.status(404).json({
            msg: `no se encontro la publicacion ${id}`
        });
    }
    else {
        yield publicacion.destroy();
        res.json({
            msg: 'La publicacion fue eliminada con exito'
        });
    }
});
exports.deletePublicacion = deletePublicacion;
const postPublicacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield publicacion_1.default.create(body);
        res.json({
            msg: 'Publicacion publicada correctamente'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Uy parece que algo esta mal, revise si le funciona el cerebro porque el programa funciona aleta'
        });
    }
});
exports.postPublicacion = postPublicacion;
const updatePublicacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const publicacion = yield publicacion_1.default.findByPk(id);
        if (publicacion) {
            yield publicacion.update(body);
            res.json({ msg: 'Publicacion actualizada correctamente' });
        }
        else {
            res.status(400).json({
                msg: `no se encontro la publicacion ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Uy parece que algo esta mal, revise si le funciona el cerebro porque el programa funciona aleta'
        });
    }
});
exports.updatePublicacion = updatePublicacion;
