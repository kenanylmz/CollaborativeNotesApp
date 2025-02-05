import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface NoteItemProps {
  content: string;
  timestamp: number;
  onPress?: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ content, timestamp, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.content} numberOfLines={3}>
          {content}
        </Text>
        <Text style={styles.timestamp}>
          {new Date(timestamp).toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteItem; 