"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const task_entity_1 = require("../tasks/task.entity");
let Note = class Note extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Note.prototype, "note", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    sequelize_typescript_1.ForeignKey(() => task_entity_1.Task),
    __metadata("design:type", Number)
], Note.prototype, "task_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => task_entity_1.Task),
    __metadata("design:type", task_entity_1.Task)
], Note.prototype, "task", void 0);
Note = __decorate([
    sequelize_typescript_1.Table
], Note);
exports.Note = Note;
//# sourceMappingURL=note.entity.js.map