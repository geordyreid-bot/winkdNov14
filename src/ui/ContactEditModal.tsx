import React from 'react';
import { Modal } from './Modal';
import { Contact } from '../types';

interface ContactEditModalProps {
    isOpen: boolean;
    onClose: () => void;
    contact: Contact | null;
    onSave: (updatedContact: Contact) => void;
}

export const ContactEditModal: React.FC<ContactEditModalProps> = ({ isOpen, onClose, contact }) => {
  if (!contact) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Edit ${contact.name}`}>
      <div className="text-center text-sm text-gray-500 p-4">
        ContactEditModal placeholder
      </div>
    </Modal>
  );
};
