"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksProviders = void 0;
const task_entity_1 = require("./task.entity");
const constants_1 = require("../../core/constants");
exports.tasksProviders = [{
        provide: constants_1.TASK_REPOSITORY,
        useValue: task_entity_1.Task,
    }];
//# sourceMappingURL=tasks.providers.js.map