import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MangaGrid from '../components/MangaGrid';
import { Manga } from '../types/manga';
import { mockMangas } from '../data/mockData';

const CompletedScreen: React.FC = () => {
  const [completedMangas, setCompletedMangas] = useState<Manga[]>([]);

  useEffect(() => {
    const loadCompletedMangas = () => {
      setCompletedMangas(mockMangas.filter(manga => manga.readingStatus === 'completed'));
    };
    loadCompletedMangas();
  }, []);

  return (
    <View style={styles.container}>
      {completedMangas.length > 0 ? (
        <MangaGrid mangas={completedMangas} />
      ) : (
        <Text style={styles.noMangaText}>Nenhum mangá concluído.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  noMangaText: {
    color: 'gray',
  },
});

export default CompletedScreen;

