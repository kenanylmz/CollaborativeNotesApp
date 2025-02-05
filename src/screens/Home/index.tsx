import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import NoteList from '../../components/NoteList';
import {useNotes} from '../../hooks/useNotes';
import {Note} from '../../types';

const HomeScreen = () => {
  const [noteText, setNoteText] = useState('');
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const {notes, addNote, deleteNote, updateNote} = useNotes();

  const handleAddNote = async () => {
    if (noteText.trim()) {
      const success = await addNote(noteText);
      if (success) {
        setNoteText('');
      }
    }
  };

  const handleEditNote = async () => {
    if (editingNote && noteText.trim()) {
      const success = await updateNote(editingNote.id, noteText);
      if (success) {
        setNoteText('');
        setEditingNote(null);
      }
    }
  };

  const handleNoteEdit = (note: Note) => {
    setEditingNote(note);
    setNoteText(note.content);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            <Text style={styles.titleBlue}>Collaborative</Text> Notes
          </Text>
        </View>

        <NoteList
          notes={notes}
          onNoteDelete={deleteNote}
          onNoteEdit={handleNoteEdit}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={noteText}
            onChangeText={setNoteText}
            placeholder={editingNote ? 'Edit note...' : 'Write a note...'}
            multiline
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            style={[
              styles.addButton,
              {backgroundColor: editingNote ? '#34C759' : '#007AFF'},
            ]}
            onPress={editingNote ? handleEditNote : handleAddNote}>
            <MaterialCommunityIcons
              name={editingNote ? 'check' : 'plus'}
              size={28}
              color="#FFFFFF"
              style={styles.addButtonIcon}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
