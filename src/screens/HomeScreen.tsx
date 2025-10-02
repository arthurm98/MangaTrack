import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MangaGrid from '../components/MangaGrid';
import { Manga } from '../types/manga';
import { libraryService } from '../services/libraryService';
import { mockMangas } from '../data/mockData';

const HomeScreen: React.FC = () => {
  const [readingMangas, setReadingMangas] = useState<Manga[]>([]);
  const [recentlyUpdatedMangas, setRecentlyUpdatedMangas] = useState<Manga[]>([]);

  useEffect(() => {
    const loadMangas = async () => {
      // For demonstration, we'll use mock data and filter them.
      // In a real app, 'recently updated' would come from an API or specific logic.
      const allMangas = mockMangas; // await libraryService.getCollection();

      setReadingMangas(allMangas.filter(manga => manga.readingStatus === 'reading'));
      // For 'recently updated', we'll just show a few random ones from mock data for now
      setRecentlyUpdatedMangas(allMangas.slice(0, 4));
    };

    loadMangas();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Lendo Atualmente</Text>
      {readingMangas.length > 0 ? (
        <MangaGrid mangas={readingMangas} />
      ) : (
        <Text style={styles.noMangaText}>Nenhum mangá sendo lido no momento.</Text>
      )}

      <Text style={styles.sectionTitle}>Atualizados Recentemente</Text>
      {recentlyUpdatedMangas.length > 0 ? (
        <MangaGrid mangas={recentlyUpdatedMangas} />
      ) : (
        <Text style={styles.noMangaText}>Nenhum mangá atualizado recentemente.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  noMangaText: {
    marginLeft: 10,
    marginBottom: 10,
    color: 'gray',
  },
});

export default HomeScreen;

