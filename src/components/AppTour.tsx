import React from 'react';
import { Modal } from '@/ui/Modal';

interface AppTourProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AppTour({ isOpen, onClose }: AppTourProps) {
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="App Tour">
      <div className="text-center text-gray-400 text-sm p-4">
        AppTour placeholder
      </div>
    </Modal>
  );
}
