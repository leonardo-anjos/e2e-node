import express from 'express'
import { PrismaLessonRepository } from './repositories/prisma/PrismaLessonRepository';
import { CreateLesson } from './services/CreateLesson';

export const app = express()

app.use(express.json())

app.post('/lessons', async (request, response) => {
  const { title, description } = request.body;

  // TO BE DONE: transform to factory - Factory Pattern
  const prismaLessonRepository = new PrismaLessonRepository()
  const createLesson = new CreateLesson(prismaLessonRepository)

  try {
    await createLesson.execute({ title, description });
    return response.status(201).send()
  } catch (error: any) {
    return response.status(400).json({ error: error.message })
  }

})