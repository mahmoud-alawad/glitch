"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const exception_interceptor_1 = require("./common/interceptors/exception.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    app.useGlobalInterceptors(new exception_interceptor_1.ExceptionInterceptor());
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('E-Commerce API')
        .setDescription('Project Commerce : Author: Mahmoud')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(process.env.PORT || 80, () => {
        console.log('app listen on port' + process.env.PORT);
        console.log(app);
    });
}
bootstrap().catch((err) => console.log(err));
//# sourceMappingURL=main.js.map