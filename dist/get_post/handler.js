"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostHandler = void 0;
const OperationHandlerSetup_1 = require("@trayio/cdk-dsl/connector/operation/OperationHandlerSetup");
const GlobalConfig_1 = require("../GlobalConfig");
exports.getPostHandler = OperationHandlerSetup_1.OperationHandlerSetup.configureHandler((handler) => handler.withGlobalConfiguration(GlobalConfig_1.globalConfigHttp).usingHttp((http) => http
    .get('/posts/:id')
    .handleRequest((ctx, input, request) => request.addPathParameter('id', input.id.toString()).withoutBody())
    .handleResponse((ctx, input, response) => response.parseWithBodyAsJson())));
