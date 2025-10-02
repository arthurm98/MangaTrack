import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MangaGrid from '../components/MangaGrid';
import { Manga } from '../types/manga';
import { mockMangas } from '../data/mockData';

const PlanToReadScreen: React.FC = () => {
  const [planToReadMangas, setPlanToReadMangas] = useState<Manga[]>([]);

  useEffect(() => {
    const loadPlanToReadMangas = () => {
      setPlanToReadMangas(mockMangas.filter(manga => manga.readingStatus === 'plan_to_read'));
    };
    loadPlanToReadMangas();
  }, []);

  return (
    <View style={styles.container}>
      {planToReadMangas.length > 0 ? (
        <MangaGrid mangas={planToReadMangas} />
      ) : (
        <Text style={styles.noMangaText}>Nenhum mangá planejado para ler.</Text>
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

export default PlanToReadScreen;

