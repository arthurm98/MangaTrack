import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatisticsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de Estatísticas</Text>
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

export default StatisticsScreen;

