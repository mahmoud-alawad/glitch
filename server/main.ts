import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionInterceptor } from './common/interceptors/exception.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new ExceptionInterceptor());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('E-Commerce API')
    .setDescription('Project Commerce : Author: Mahmoud')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 80, ()=> {
    console.log('app listen on port' + process.env.PORT);
    
      console.log(app);
  });
}
bootstrap().catch((err) => console.log(err));
