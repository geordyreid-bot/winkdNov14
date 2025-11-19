import React from 'react';

export const WinkDetailView: React.FC = () => {
  return (
    <div className="text-center text-sm text-gray-500 p-4">
      WinkDetailView placeholder
    </div>
  );
};

export const LikelihoodBadge: React.FC<{ likelihood: 'low' | 'medium' | 'high' }> = ({ likelihood }) => {
    return (
        <div className="text-center text-sm text-gray-500 p-1">
            Likelihood: {likelihood}
        </div>
    );
};
