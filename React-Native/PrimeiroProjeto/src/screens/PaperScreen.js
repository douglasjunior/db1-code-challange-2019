import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Button } from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 8,
  },
});

const renderCalendarIcon = () => (
  <EvilIcons name="calendar" color="white" size={20} />
);

const PaperScreen = (props) => (
  <ScrollView
    contentContainerStyle={styles.scrollContainer}
  >
    <Button
      icon={renderCalendarIcon}
      mode="contained"
      onPress={() => props.navigation.navigate('First', { userId: 10 })}>
      Eu sou um botão
    </Button>
    <Button
      mode="contained"
      onPress={() => props.navigation.navigate('Tabs')}>
      Abrir Tabs
    </Button>
    <EvilIcons name="calendar" color="black" size={24} />
  </ScrollView>
);

export default PaperScreen;
