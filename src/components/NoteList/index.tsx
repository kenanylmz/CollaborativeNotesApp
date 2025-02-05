import React from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';
import NoteItem from '../NoteItem';
import {Note} from '../../types';
import styles from './styles';
import EmptyState from '../EmptyState';

interface NoteListProps {
  notes: Note[];
  onRefresh?: () => void;
  isRefreshing?: boolean;
  onNotePress?: (note: Note) => void;
  onNoteDelete?: (noteId: string) => void;
  onNoteEdit?: (note: Note) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  notes,
  onRefresh,
  isRefreshing = false,
  onNotePress,
  onNoteDelete,
  onNoteEdit,
}) => {
  if (notes.length === 0) {
    return <EmptyState />;
  }

  const renderItem = ({item}: ListRenderItemInfo<Note>) => (
    <NoteItem
      content={item.content}
      timestamp={item.timestamp}
      onPress={() => onNotePress?.(item)}
      onDelete={() => onNoteDelete?.(item.id)}
      onEdit={() => onNoteEdit?.(item)}
    />
  );

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
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
