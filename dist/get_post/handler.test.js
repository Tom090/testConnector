"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OperationHandlerTest_1 = require("@trayio/cdk-dsl/connector/operation/OperationHandlerTest");
const OperationHandler_1 = require("@trayio/cdk-dsl/connector/operation/OperationHandler");
const handler_1 = require("./handler");
require("@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner");
OperationHandlerTest_1.OperationHandlerTestSetup.configureHandlerTest(handler_1.getPostHandler, (handlerTest) => handlerTest
    .usingHandlerContext('test')
    .nothingBeforeAll()
    .testCase('should get a post', (testCase) => testCase
    .givenNothing()
    .when(() => ({ id: 2 }))
    .then(({ output }) => {
    // console.log(output);
    const outputValue = OperationHandler_1.OperationHandlerResult.getSuccessfulValueOrFail(output);
    expect(outputValue.id).toEqual(2);
})
    .finallyDoNothing())
    .nothingAfterAll());
