import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReadingScreen from './ReadingScreen';
import PlanToReadScreen from './PlanToReadScreen';
import CompletedScreen from './CompletedScreen';

const TopTab = createMaterialTopTabNavigator();

const LibraryScreen: React.FC = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Lendo" component={ReadingScreen} />
      <TopTab.Screen name="Planejo Ler" component={PlanToReadScreen} />
      <TopTab.Screen name="Concluídos" component={CompletedScreen} />
    </TopTab.Navigator>
  );
};

export default LibraryScreen;

