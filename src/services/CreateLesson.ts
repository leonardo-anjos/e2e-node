// Inversao de dependencias
// camada de aplicacao

import { LessonRepository } from "../repositories/LessonRepository";

interface CreateLessonRequest {
  title: string;
  description?: string;
}

// Command/Query Segregation
// Ações de escrita/update/delete SEM RETORNO (comandos)
// Acções de query (select) onde tras o retorno

export class CreateLesson {
  constructor(
    private lessonRepository: LessonRepository
  ) {}
  
  async execute({ title, description }: CreateLessonRequest) {
    // validacoes
    // 1. verificar se ja existe uma lesson com o mesmo titulo

    if (!title) {
      throw new Error('Title is required')
    }

    await this.lessonRepository.create({ title, description })
  }
}