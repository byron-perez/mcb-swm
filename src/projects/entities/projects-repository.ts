import { Injectable } from "@nestjs/common";
import { Project } from "./project.entity";

export abstract class ProjectsRepository {
   abstract getAll(): Project[];
   abstract store(project: Project): string;
}