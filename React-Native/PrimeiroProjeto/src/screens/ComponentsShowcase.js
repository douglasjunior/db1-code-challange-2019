import React, { Component } from 'react';
import {
  View, Text, Image,
  ScrollView, TextInput,
  StyleSheet, TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import defaultStyles from '../styles';
import imgPaisagem from '../assets/paisagem.jpg';

const MeuTouchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  redBox: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  textContainer: {
    margin: 8,
    padding: 16,
  },
  button: {
    padding: 8,
    backgroundColor: '#1155ff',
    borderRadius: 4,
    elevation: 4,
    alignItems: 'center',
    margin: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default class ComponentsShowcase extends Component {

  state = {
    inputValue: '',
  }

  renderFlexBox = () => (
    <View
      style={{
        backgroundColor: 'yellow',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
      <View style={styles.redBox} ></View>
    </View>
  )

  renderText = () => (
    <View
      style={[
        defaultStyles.card,
        styles.textContainer,
        this.state.disabled ? styles.disabledText : undefined
      ]}
    >
      <Text
        style={{ fontSize: 30, color: 'green' }}
      >
        A maioria dos apps irão utilizar alguns desses componentes
        básicos, e você precisará se familiarizar com eles se for
        novo no 🎉
        {' '}
        <Text style={{ fontWeight: 'bold', borderRadius: 8, backgroundColor: 'blue' }}>
          React
        {' '}
          <Text style={{ color: 'red' }}>
            Native
          </Text>
        </Text>
        .
      </Text>
    </View>
  )

  renderImages = () => (
    <View>
      <Image
        source={{
          uri: 'https://www.estudokids.com.br/wp-content/uploads/2015/03/paisagem-geografia-historia-e-tipos-1200x675.jpg',
        }}
        style={{
          width: 300,
          height: 300,
          borderColor: 'red',
          borderWidth: 5,
        }}
        resizeMode='cover'
      />
      <Image
        source={imgPaisagem}
        style={{
          width: 300,
          height: 300,
          borderColor: 'green',
          borderWidth: 5,
        }}
        resizeMode='contain'
      />
    </View>
  )

  onChangeText = text => {
    this.setState({
      inputValue: text
    });
  }

  renderInput = () => (
    <View style={{ padding: 8 }}>
      <TextInput
        style={{
          borderColor: 'black',
          borderWidth: 1,
        }}
        onChangeText={this.onChangeText}
      />
      <Text>
        {this.state.inputValue}
      </Text>
    </View>
  )

  renderTouchable = () => (
    <View>
      <MeuTouchable
        onPress={() => alert('Clicou')}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>PRESSIONE</Text>
        </View>
      </MeuTouchable>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderFlexBox()}
          {this.renderText()}
          {this.renderImages()}
          {this.renderInput()}
          {this.renderTouchable()}
        </ScrollView>
      </View>
    );
  }

}
