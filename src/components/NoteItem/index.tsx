import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

  const handleDelete = () => {
    setShowDeleteAlert(true);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
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
