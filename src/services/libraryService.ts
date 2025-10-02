import AsyncStorage from '@react-native-async-storage/async-storage';
import { Manga } from '../types/manga';

const MANGA_COLLECTION_KEY = '@MangaTrack:collection';

class LibraryService {
  async getCollection(): Promise<Manga[]> {
    try {
      const jsonValue = await AsyncStorage.getItem(MANGA_COLLECTION_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error('Error getting collection:', e);
      return [];
    }
  }

  async addManga(manga: Manga): Promise<void> {
    try {
      const collection = await this.getCollection();
      const newCollection = [...collection, manga];
      const jsonValue = JSON.stringify(newCollection);
      await AsyncStorage.setItem(MANGA_COLLECTION_KEY, jsonValue);
    } catch (e) {
      console.error('Error adding manga:', e);
    }
  }

  async updateManga(updatedManga: Manga): Promise<void> {
    try {
      const collection = await this.getCollection();
      const newCollection = collection.map((manga) =>
        manga.id === updatedManga.id ? updatedManga : manga
      );
      const jsonValue = JSON.stringify(newCollection);
      await AsyncStorage.setItem(MANGA_COLLECTION_KEY, jsonValue);
    } catch (e) {
      console.error('Error updating manga:', e);
    }
  }

  async removeManga(mangaId: string): Promise<void> {
    try {
      const collection = await this.getCollection();
      const newCollection = collection.filter((manga) => manga.id !== mangaId);
      const jsonValue = JSON.stringify(newCollection);
      await AsyncStorage.setItem(MANGA_COLLECTION_KEY, jsonValue);
    } catch (e) {
      console.error('Error removing manga:', e);
    }
  }
}

export const libraryService = new LibraryService();

