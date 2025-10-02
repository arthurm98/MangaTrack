import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Manga } from '../types/manga';

interface MangaCardProps {
  manga: Manga;
  onPress?: (manga: Manga) => void;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2; // 20 de padding em cada lado, e 20 de espaço entre os cards

const MangaCard: React.FC<MangaCardProps> = ({ manga, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress && onPress(manga)}>
      <Image source={{ uri: manga.cover }} style={styles.cover} />
      <Text style={styles.title} numberOfLines={2}>{manga.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cover: {
    width: '100%',
    height: CARD_WIDTH * 1.5, // Proporção comum para capas de mangá
    resizeMode: 'cover',
  },
  title: {
    padding: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MangaCard;

