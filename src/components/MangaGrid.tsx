import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MangaCard from './MangaCard';
import { Manga } from '../types/manga';

interface MangaGridProps {
  mangas: Manga[];
  onPressManga?: (manga: Manga) => void;
}

const MangaGrid: React.FC<MangaGridProps> = ({ mangas, onPressManga }) => {
  return (
    <FlatList
      data={mangas}
      renderItem={({ item }) => <MangaCard manga={item} onPress={onPressManga} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.gridContainer}
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default MangaGrid;

