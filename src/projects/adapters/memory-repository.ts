import { Project } from "../entities/project.entity";
import { ProjectsRepository } from "../entities/projects-repository";
import { getRandomString } from "../utils/crypt";

export class MemoryRepository implements ProjectsRepository{
    private projects: any[] = [];

    constructor() {
        this.projects = [
            {
                "id": "1",
                "name": "Tissquest",
                "desc": "Atlas de histología general.",
            },
            {
                "id": "2",
                "name": "Destino Genético",
                "desc": "Calculador de probabilidad de mutaciones.",
            },
            {
                "id": "4",
                "name": "Lente de Abstracción",
                "desc": "Lenguaje de modelado de procesos biológicos.",
            },
            {
                "id": "3",
                "name": "Pomo",
                "desc": "Temporizador alarma para arduino.",
            },
        ]
    }

    public getAll(): any[] {
        return this.projects;
    }

    public store(project: Project): string {
        let newId = getRandomString();
        let newProject = {
            "id": newId,
            "name": project.name,
            "desc": project.desc,
        }
        this.projects.push(newProject)
        return newId;
    }
}
