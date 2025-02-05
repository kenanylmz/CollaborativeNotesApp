import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {database} from '../../config/firebase';
import {ref, push, onValue} from '@react-native-firebase/database';
import styles from './styles';
import NoteList from '../../components/NoteList';
import {useNotes} from '../../hooks/useNotes';
import {lightTheme} from '../../styles/theme';
import {validateNote} from '../../utils';

interface Note {
  id: string;
  content: string;
  timestamp: number;
}

const HomeScreen = () => {
  const [noteText, setNoteText] = useState('');
  const {notes, loading, error, addNote} = useNotes();

  const handleAddNote = async () => {
    if (validateNote(noteText)) {
      const success = await addNote(noteText);
      if (success) {
        setNoteText('');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Collaborative Notes</Text>
        </View>

        <NoteList
          notes={notes}
          onNotePress={note => {
            // İleride not detayı veya düzenleme için kullanılabilir
            console.log('Note pressed:', note);
          }}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={noteText}
            onChangeText={setNoteText}
            placeholder="Write a note..."
            multiline
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
            <Text style={styles.addButtonText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
