import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { ProjectsRepository } from './entities/projects-repository';

@Injectable()
export class ProjectService {
  private projectsRepository: ProjectsRepository;

  constructor(projectsRepository: ProjectsRepository) {
    this.projectsRepository = projectsRepository;
  }

  private readonly projects: Project[] = []

  create(createProjectDto: CreateProjectDto) {
    let newProject: Project = new Project(createProjectDto.name, createProjectDto.desc);
    let newId = this.projectsRepository.store(newProject);
    return newId;
  }

  findAll() {
    return this.projectsRepository.getAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
