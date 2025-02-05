import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDate} from '../../utils';
import styles from './styles';
import CustomAlert from '../CustomAlert';

interface NoteItemProps {
  content: string;
  timestamp: number;
  onPress?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({
  content,
  timestamp,
  onPress,
  onDelete,
  onEdit,
}) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDelete = () => {
    setShowDeleteAlert(true);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={toggleExpand}
        activeOpacity={0.9}>
        <View style={styles.contentContainer}>
          <Text style={styles.content} numberOfLines={3}>
            {content}
          </Text>
          <View style={styles.timestamp}>
            <Icon
              name="clock-outline"
              size={12}
              color="#888888"
              style={{marginRight: 4}}
            />
            <Text style={styles.timestamp}>{formatDate(timestamp)}</Text>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
            <Icon
              name="pencil"
              size={18}
              color="#007AFF"
              style={styles.actionButtonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.actionButton}>
            <Icon
              name="delete"
              size={18}
              color="#FF3B30"
              style={styles.actionButtonIcon}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isExpanded}
        transparent
        animationType="fade"
        onRequestClose={toggleExpand}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={toggleExpand}>
          <View
            style={styles.modalContent}
            onStartShouldSetResponder={() => true}
            onTouchEnd={e => e.stopPropagation()}>
            <ScrollView
              style={styles.modalScrollView}
              contentContainerStyle={styles.modalScrollViewContent}
              showsVerticalScrollIndicator={true}
              bounces={false}>
              <Text style={styles.modalText}>{content}</Text>
            </ScrollView>
            <View style={styles.modalFooter}>
              <View style={styles.timestamp}>
                <Icon
                  name="clock-outline"
                  size={14}
                  color="#888888"
                  style={{marginRight: 4}}
                />
                <Text style={[styles.timestamp, styles.modalTimestamp]}>
                  {formatDate(timestamp)}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={toggleExpand}>
                <Icon name="close" size={24} color="#666666" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <CustomAlert
        visible={showDeleteAlert}
        title="Delete Note"
        message="Are you sure you want to delete this note? This action cannot be undone."
        type="warning"
        actions={[
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => setShowDeleteAlert(false),
          },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: () => {
              setShowDeleteAlert(false);
              onDelete?.();
            },
          },
        ]}
        onDismiss={() => setShowDeleteAlert(false)}
      />
    </>
  );
};

export default NoteItem;
