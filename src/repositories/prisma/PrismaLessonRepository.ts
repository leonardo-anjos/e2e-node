import { prisma } from "../../prisma";
import { CreateLessonData, LessonRepository } from "../LessonRepository";

export class PrismaLessonRepository implements LessonRepository {
  async create(data: CreateLessonData) {
    await prisma.lesson.create({ data })
  }
}