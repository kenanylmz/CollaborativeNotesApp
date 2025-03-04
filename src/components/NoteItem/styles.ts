import {StyleSheet, Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    overflow: 'hidden',
    borderLeftWidth: 8,
    borderLeftColor: '#007AFF',
    minHeight: 120,
  },
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  content: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 16,
    lineHeight: 26,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
  timestamp: {
    fontSize: 14,
    color: '#888888',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsContainer: {
    padding: 16,
    justifyContent: 'space-around',
    backgroundColor: '#F8F8F8',
    borderLeftWidth: 1,
    borderLeftColor: '#E0E0E0',
    width: 72,
  },
  actionButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  actionButtonIcon: {
    marginLeft: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: width * 0.9,
    maxHeight: height * 0.8,
    borderLeftWidth: 8,
    borderLeftColor: '#007AFF',
    flexDirection: 'column',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalScrollView: {
    maxHeight: height * 0.65,
  },
  modalScrollViewContent: {
    padding: 20,
    flexGrow: 1,
  },
  modalText: {
    fontSize: 18,
    color: '#333333',
    lineHeight: 26,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
  modalCloseButton: {
    padding: 4,
  },
  modalTimestamp: {
    fontSize: 14,
  },
});
