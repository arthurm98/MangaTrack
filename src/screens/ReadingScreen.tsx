import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MangaGrid from '../components/MangaGrid';
import { Manga } from '../types/manga';
import { mockMangas } from '../data/mockData';

const ReadingScreen: React.FC = () => {
  const [readingMangas, setReadingMangas] = useState<Manga[]>([]);

  useEffect(() => {
    const loadReadingMangas = () => {
      setReadingMangas(mockMangas.filter(manga => manga.readingStatus === 'reading'));
    };
    loadReadingMangas();
  }, []);

  return (
    <View style={styles.container}>
      {readingMangas.length > 0 ? (
        <MangaGrid mangas={readingMangas} />
      ) : (
        <Text style={styles.noMangaText}>Nenhum mangá sendo lido no momento.</Text>
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

export default ReadingScreen;

