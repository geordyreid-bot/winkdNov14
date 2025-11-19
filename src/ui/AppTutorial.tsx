import React from 'react';

export const AppTutorial: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={onClose}>
        <div className="bg-white p-8 rounded-lg" onClick={e => e.stopPropagation()}>
            <div className="text-center text-sm text-gray-500 p-4">
                AppTutorial placeholder
            </div>
            <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded">Close</button>
        </div>
    </div>
  );
};
