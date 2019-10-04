/**
 * @format
 */

import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Titulo from './';

describe('Snapshot tests', () => {

  test('Título snapshot', () => {
    const treeJSON = renderer
      .create(<Titulo>Meu título</Titulo>)
      .toJSON();
    expect(treeJSON).toMatchSnapshot();
  });

});

describe('Shallow tests', () => {

  test('Test color style', () => {
    const comp = shallow(
      <Titulo textColor='green'>
        Meu título verde
      </Titulo>
    );
    expect(comp.getElement().props.style.color).toBe('green');
  });

  test('Test element type', () => {
    const comp = shallow(
      <Titulo textColor='green'>
        Meu título verde
      </Titulo>
    );
    expect(comp.getElement().type).toBe(Text);
  });

  test('Test title text', () => {
    const comp = shallow(
      <Titulo textColor='green'>
        Meu título verde
      </Titulo>
    );
    expect(comp.getElement().props.children).toBe('Meu título verde');
  });

});
