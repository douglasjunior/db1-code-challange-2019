import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import {
  Button, TextInput, Text,
  IconButton,
} from 'react-native-paper';
import { Form, Field } from 'react-final-form';

import defaultStyles from '../styles';
import { actions as postsActions } from '../redux/posts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 8,
  },
  postCard: {
    margin: 8,
    padding: 16,
    paddingRight: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  errorMessage: {
    color: 'red'
  }
});

const postCardStyle = [defaultStyles.card, styles.postCard];

const keyExtractor = (post, index) => String(index);

const validateDescription = value => (
  value && value.length < 20
    ? undefined
    : 'Informe a descrição com até 20 caracteres.'
);

class PostsScreen extends Component {

  state = {
    postDescription: ''
  }

  onClearPress = () => {
    this.props.clearPosts();
  }

  onAddPress = (values, formProps) => {
    const { addPost } = this.props;
    addPost(values.description);
    setTimeout(formProps.reset);
  }

  renderItem = (record) => {
    const { item: post, index } = record;
    const { removePost } = this.props;
    return (
      <View style={postCardStyle}>
        <Text>
          {post.description}
        </Text>
        <IconButton
          icon="delete"
          size={20}
          color="red"
          onPress={() => removePost(index)}
        />
      </View>
    )
  }

  renderDescriptionField = (fieldProps) => {
    const { meta, input, ...others } = fieldProps;
    const { onChange, ...inputOthers } = input;
    const displayError = meta.touched && meta.invalid;
    return (
      <>
        <TextInput
          {...others}
          error={displayError}
          onChangeText={onChange}
          {...inputOthers}
        />
        {displayError
          ?  <Text style={styles.errorMessage}>{meta.error}</Text>
          : null
        }
      </>
    )
  }

  renderForm = (formProps) => {
    const { handleSubmit, form } = formProps;
    const formState = form.getState();
    return (
      <View style={styles.form}>
        <Field
          name="description"
          label="Descrição"
          mode="outlined"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          blurOnSubmit={false}
          validate={validateDescription}
          render={this.renderDescriptionField}
        />
        <Button disabled={formState.invalid} onPress={handleSubmit}>ADICIONAR</Button>
        <Button onPress={this.onClearPress}>LIMPAR</Button>
      </View>
    );
  }

  render() {
    const { posts } = this.props;
    return (
      <View style={styles.container}>
        <Form
          onSubmit={this.onAddPress}
          render={this.renderForm}
        />
        <FlatList
          data={posts}
          renderItem={this.renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  ...postsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
