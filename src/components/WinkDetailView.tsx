import React from 'react';
import { Wink, Contact, Page } from '@/types';

interface WinkDetailViewProps {
  wink: Wink;
  isOutbox: boolean;
  onSendSecondOpinion: (winkId: string, contacts: Contact[]) => void;
  contacts: Contact[];
  navigate: (page: Page) => void;
  isSelfCheckinView?: boolean;
}

const WinkDetailView: React.FC<WinkDetailViewProps> = ({ wink }) => {
  return (
    <div className="text-center text-gray-400 text-sm p-4">
      WinkDetailView for {wink.recipient} placeholder
    </div>
  );
};

export default WinkDetailView;

export const LikelihoodBadge: React.FC<{ likelihood: 'low' | 'medium' | 'high' }> = ({ likelihood }) => {
    return (
        <div className="text-center text-sm text-gray-500 p-1">
            Likelihood: {likelihood}
        </div>
    );
};
