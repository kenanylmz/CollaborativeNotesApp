import React from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import NoteItem from '../NoteItem';
import styles from './styles';

interface Note {
  id: string;
  content: string;
  timestamp: number;
}

interface NoteListProps {
  notes: Note[];
  onRefresh?: () => void;
  isRefreshing?: boolean;
  onNotePress?: (note: Note) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  notes,
  onRefresh,
  isRefreshing = false,
  onNotePress,
}) => {
  const renderItem = ({ item }: ListRenderItemInfo<Note>) => (
    <NoteItem
      content={item.content}
      timestamp={item.timestamp}
      onPress={() => onNotePress?.(item)}
    />
  );

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor="#007AFF"
          />
        ) : undefined
      }
    />
  );
};

export default NoteList; 