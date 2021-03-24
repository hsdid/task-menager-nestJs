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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const user_entity_1 = require("../users/user.entity");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async create(task, userId) {
        return await this.taskRepository.create(Object.assign(Object.assign({}, task), { userId }));
    }
    async findAll() {
        return await this.taskRepository.findAll({
            include: [{ model: user_entity_1.User, attributes: { exclude: ['password'] } }],
        });
    }
    async findOne(id) {
        return await this.taskRepository.findOne({
            where: { id },
            include: [{ model: user_entity_1.User, attributes: { exclude: ['password'] } }],
        });
    }
    async delete(id, userId) {
        return await this.taskRepository.destroy({ where: { id, userId } });
    }
    async update(id, data, userId) {
        return await this.taskRepository.update({ data }, { where: { id, userId }, returning: true });
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.TASK_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map