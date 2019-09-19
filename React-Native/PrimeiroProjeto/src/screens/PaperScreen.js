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

const PaperScreen = () => (
  <ScrollView
    contentContainerStyle={styles.scrollContainer}
  >
    <Button
      icon={renderCalendarIcon}
      mode="contained"
      onPress={() => console.log('Pressed')}>
      Eu sou um botão
    </Button>
    <EvilIcons name="calendar" color="black" size={24} />
  </ScrollView>
);

export default PaperScreen;
