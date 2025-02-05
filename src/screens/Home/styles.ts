import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    marginRight: 12,
    backgroundColor: '#007AFF15',
    padding: 8,
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
    color: '#1A1A1A',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif-medium',
    fontStyle: 'italic',
  },
  titleBlue: {
    color: '#007AFF',
  },
  notesList: {
    flex: 1,
  },
  notesListContent: {
    padding: 16,
  },
  noteItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  noteText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#888888',
  },
  inputContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    minHeight: 48,
    maxHeight: 120,
    fontSize: 16,
    textAlignVertical: 'top',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 24,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Platform.OS === 'ios' ? '#0066CC' : 'transparent',
  },
  addButtonIcon: {
    marginLeft: 1,
  },
});
