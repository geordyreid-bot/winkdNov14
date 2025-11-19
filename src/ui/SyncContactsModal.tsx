import React from 'react';
import { Modal } from './Modal';
import { Contact } from '../types';

interface SyncContactsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddContacts: (newContacts: Omit<Contact, 'id'>[]) => void;
    onSyncDeviceContacts: () => Promise<void>;
    isSyncingDevice: boolean;
}

export const SyncContactsModal: React.FC<SyncContactsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add & Sync Contacts">
      <div className="text-center text-sm text-gray-500 p-4">
        SyncContactsModal placeholder
      </div>
    </Modal>
  );
};
