import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [ProjectsModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('projects');
  }
}
