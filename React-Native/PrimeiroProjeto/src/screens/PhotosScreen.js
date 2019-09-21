import React, { Component } from 'react';
import {
  View, ActivityIndicator,
  FlatList, RefreshControl,
} from 'react-native';

import axios from 'axios';
import PostCard from '../components/PostCard';

async function getTokenFromStore() {
  return 'sdf79a78dsf69as76f89ads6f87sda6';
}

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.interceptors.request.use(async (config) => {
  const token = await getTokenFromStore();
  config.headers.Authentication = `Bearer ${token}`;
  return config;
});

const keyExtractor = photo => String(photo.id);

export default class PhotosScreen extends Component {

  state = {
    fetching: false,
    photos: [],
    page: 1,
    fetchingPage: false,
  }
  waitingPage = false

  componentDidMount() {
    this.getFirstPage();
  }

  getNextPage = async () => {
    this.setState({ fetchingPage: true });
    try {
      const { page } = this.state;
      await this.requestPhotos(page + 1);
    } finally {
      this.setState({ fetchingPage: false });
    }
  }

  getFirstPage = async () => {
    this.setState({ fetching: true });
    try {
      await this.requestPhotos(1);
    } finally {
      this.setState({ fetching: false });
    }
  }

  requestPhotos = async (page) => {
    try {
      const response = await axios.get('/photos', {
        params: {
          _limit: 10,
          _page: page,
        }
      });
      const { photos } = this.state;
      const newPhotos = page === 1
        ? response.data
        : photos.concat(response.data);
      this.setState({
        photos: newPhotos,
        page,
      });
    } catch (error) {
      console.warn(error)
    }
  }

  renderItem = (record) => {
    const { item: photo, index } = record;
    return (
      <PostCard photo={photo} />
    );
  }

  onEndReached = async () => {
    const { page, fetching, fetchingPage } = this.state;
    if (fetching || fetchingPage || page > 500) return;
    console.log(page);
    await this.getNextPage();
  }

  renderFooter = () => {
    const { fetchingPage } = this.state;
    if (!fetchingPage) return null;
    return (
      <ActivityIndicator
        size="large"
      />
    );
  }

  render() {
    const { photos, fetching } = this.state;
    return (
      <View>
        <FlatList
          data={photos}
          keyExtractor={keyExtractor}
          renderItem={this.renderItem}
          refreshControl={(
            <RefreshControl
              colors={['red', 'green', 'blue']}
              refreshing={fetching}
              onRefresh={this.getFirstPage}
            />
          )}
          onEndReached={this.onEndReached}
          ListFooterComponent={this.renderFooter()}
        />
      </View>
    );
  }
}
