"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
router.get('/', controllers_1.getDashboardData);
router.get('/agents', controllers_1.getAllAgents);
router.get('/agent/:identifier', controllers_1.getAgentRecords);
router.get('/call/:number', controllers_1.getNumberRecords);
exports.default = router;
