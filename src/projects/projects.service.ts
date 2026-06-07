import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {

  private readonly projects: Project[] = [

      {
        "name": "Tissquest",
        "desc": "Atlas de histología general.",
      },
      {
        "name": "Destino Genético",
        "desc": "Calculador de probabilidad de mutaciones.",
      },
      {
        "name": "Lente de Abstracción",
        "desc": "Lenguaje de modelado de procesos biológicos.",
      },
      {
        "name": "Pomo",
        "desc": "Temporizador alarma para arduino.",
      },
  ]

  create(createProjectDto: CreateProjectDto) {
    let newProject: Project = new Project(createProjectDto.name, createProjectDto.desc);
    this.projects.push(newProject);
    return newProject;
  }

  findAll() {
    return this.projects;
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
