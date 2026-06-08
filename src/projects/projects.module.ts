import { Module } from '@nestjs/common';
import { ProjectService } from './projects.service';
import { ProjectController } from './projects.controller';
import { ProjectsRepository } from './entities/projects-repository';
import { MemoryRepository } from './adapters/memory-repository';

@Module({
  controllers: [ProjectController],
  providers: [
    ProjectService,
    {
      provide: ProjectsRepository,
      useClass: MemoryRepository,
    }],
})
export class ProjectsModule {}
