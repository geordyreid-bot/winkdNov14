import React from 'react';
import { Modal } from './Modal';
import { ScheduledNudge } from '../types';

interface ScheduleNudgeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSchedule: (details: { sendAt: Date; recurrence: ScheduledNudge['recurrence'] }) => void;
}

export const ScheduleNudgeModal: React.FC<ScheduleNudgeModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule Nudge">
      <div className="text-center text-sm text-gray-500 p-4">
        ScheduleNudgeModal placeholder
      </div>
    </Modal>
  );
};
