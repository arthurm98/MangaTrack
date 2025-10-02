export interface Manga {
  id: string;
  title: string;
  cover: string; // URL da capa
  author: string;
  status: 'reading' | 'completed' | 'plan_to_read' | 'dropped';
  totalChapters: number;
  lastReadChapter: number;
  readingStatus: 'reading' | 'completed' | 'plan_to_read' | 'dropped';
  // Adicione outros campos conforme necessário, com base no projeto web ou requisitos futuros
  // Exemplo:
  // description?: string;
  // genres?: string[];
  // score?: number;
  // startDate?: string;
  // endDate?: string;
}

