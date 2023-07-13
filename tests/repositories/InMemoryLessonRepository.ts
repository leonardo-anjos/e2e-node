import { Lesson } from "@prisma/client";
import { CreateLessonData, LessonRepository } from "../../src/repositories/LessonRepository";
import crypto from 'node:crypto';

export class InMemoryLessonRepository implements LessonRepository {
  public items: Lesson[] = []
  
  async create(data: CreateLessonData) {
    this.items.push({
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description ?? null
    })
  }
}