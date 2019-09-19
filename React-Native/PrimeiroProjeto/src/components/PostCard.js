import React from 'react';
import {
  View, Text, Image,
  StyleSheet, Linking,
  TouchableOpacity,
} from 'react-native';

import defaultStyles from '../styles';

const styles = StyleSheet.create({
  card: {
    margin: 8,
    overflow: 'hidden',
  },
  content: {
    padding: 16,
  },
  image: {
    height: 200
  },
  avatarContainer: {
    height: 60,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: 8,
  },
  avatarPhoto: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'green',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarContent: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
  },
  avatarName: {
    color: 'rgb(0,0,0)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  avatarDate: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 12
  },
  avatarInitials: {
    color: 'white',
    fontSize: 22,
  }
});

const cardStyle = [defaultStyles.card, styles.card];

const Avatar = () => (
  <View style={styles.avatarContainer}>
    <View style={styles.avatarPhoto}>
      <Text style={styles.avatarInitials}>
        DN
      </Text>
    </View>
    <View style={styles.avatarContent}>
      <Text
        style={styles.avatarName}
        numberOfLines={2}
      >
        Douglas Nassif
      </Text>
      <Text style={styles.avatarDate}>
        há 2 dias atrás
      </Text>
    </View>
  </View>
);

const PostCard = ({ photo }) => (
  <View style={cardStyle}>
    <View style={styles.content}>
      <Avatar />
      <Text>
        {photo.title}
      </Text>
    </View>
    <TouchableOpacity onPress={() => Linking.openURL(photo.url)}>
      <Image
        source={{
          uri: photo.url
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  </View>
);

export default PostCard;
