import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { Tomtest0412Auth } from '../Tomtest0412Auth';
import { GetPostInput } from './input';
import { GetPostOutput } from './output';
import { globalConfigHttp } from '../GlobalConfig';

export const getPostHandler = OperationHandlerSetup.configureHandler<
	Tomtest0412Auth,
	GetPostInput,
	GetPostOutput
>((handler) =>
	handler.withGlobalConfiguration(globalConfigHttp).usingHttp((http) =>
		http
			.get('/posts/:id')
			.handleRequest((ctx, input, request) =>
				request.addPathParameter('id', input.id.toString()).withoutBody()
			)
			.handleResponse((ctx, input, response) => response.parseWithBodyAsJson())
	)
);
