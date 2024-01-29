import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); 
  await app.listen(3000);
  /* const appService = app.get(AppService);
  appService.iniciar();
 */
  
}
bootstrap();
