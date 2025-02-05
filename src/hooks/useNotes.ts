import {useState, useEffect} from 'react';
import {database} from '../config/firebase';
import {
  ref,
  push,
  remove,
  update,
  onValue,
} from '@react-native-firebase/database';
import {Note} from '../types';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const notesRef = ref(database, 'notes');
    const unsubscribe = onValue(notesRef, snapshot => {
      try {
        const data = snapshot.val();
        if (data) {
          const notesList = Object.entries(data).map(
            ([id, note]: [string, any]) => ({
              id,
              content: note.content,
              timestamp: note.timestamp,
            }),
          );
          setNotes(notesList.sort((a, b) => b.timestamp - a.timestamp));
        } else {
          setNotes([]);
        }
        setError(null);
      } catch (err) {
        setError('Error fetching notes');
        console.error('Error fetching notes:', err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const addNote = async (content: string) => {
    try {
      const notesRef = ref(database, 'notes');
      await push(notesRef, {
        content: content.trim(),
        timestamp: Date.now(),
      });
      return true;
    } catch (err) {
      setError('Error adding note');
      console.error('Error adding note:', err);
      return false;
    }
  };

  const deleteNote = async (noteId: string) => {
    try {
      const noteRef = ref(database, `notes/${noteId}`);
      await remove(noteRef);
      return true;
    } catch (err) {
      setError('Error deleting note');
      console.error('Error deleting note:', err);
      return false;
    }
  };

  const updateNote = async (noteId: string, content: string) => {
    try {
      const noteRef = ref(database, `notes/${noteId}`);
      await update(noteRef, {
        content: content.trim(),
        timestamp: Date.now(),
      });
      return true;
    } catch (err) {
      setError('Error updating note');
      console.error('Error updating note:', err);
      return false;
    }
  };

  return {
    notes,
    loading,
    error,
    addNote,
    deleteNote,
    updateNote,
  };
};
