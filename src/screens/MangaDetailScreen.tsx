import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MangaDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de Detalhes do Mangá</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MangaDetailScreen;

