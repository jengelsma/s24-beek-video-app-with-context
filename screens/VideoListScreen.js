import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { BaseRouter } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getVideos } from '../api/YTServer';

const VideoListScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos((data) => {
      setVideos(data.items);
    });
  }, []);

  const renderVideo = ({ index, item }) => {
    return (
      <View>
        <Text> {item.snippet.title} </Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        extraData={videos}
        renderItem={renderVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
  },
});

export default VideoListScreen;
