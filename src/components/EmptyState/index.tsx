import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Icon name="note-plus-outline" size={64} color="#007AFF" />
      <Text style={styles.title}>No Notes Yet</Text>
      <Text style={styles.description}>
        Start by adding your first note. Your notes will be automatically synced
        across all your devices.
      </Text>
    </View>
  );
};

export default EmptyState; 