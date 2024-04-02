import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { I18nValidationPipe } from 'nestjs-i18n';
import { NestFactory } from '@nestjs/core';
import { I18nExceptionFilter } from '@/filters';
import { AppModule } from '@/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Organizational Logistics')
    .setDescription('Abstract system for management and logistics of organizational processes')
    .setVersion('0.0.1')
    .addTag('OrgLog')
    .build();

    app.useGlobalPipes(
      new I18nValidationPipe({
        transform: true,
        whitelist: true,
      }),
    );
  
    app.useGlobalFilters(
      new I18nExceptionFilter(),
    );
  
    app.enableCors({
      origin: true,
      methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
      credentials: true,
    });
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3001);
}

bootstrap();