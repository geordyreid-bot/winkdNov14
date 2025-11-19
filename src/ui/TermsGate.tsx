import React from 'react';
import { Logo } from './Logo';

interface TermsGateProps {
    onAccept: () => void;
}

export const TermsGate: React.FC<TermsGateProps> = ({ onAccept }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <div className="text-center p-8 bg-brand-surface rounded-lg shadow-lg max-w-md">
                <Logo className="justify-center mb-4"/>
                <h1 className="text-2xl font-bold">Terms of Service</h1>
                <p className="mt-4 text-brand-text-secondary">
                    Please read and accept our terms and conditions before proceeding. This application is for demonstration purposes only and should not be used for medical advice.
                </p>
                <button 
                    onClick={onAccept}
                    className="mt-6 w-full bg-brand-primary-500 text-white font-bold py-3 rounded-lg"
                >
                    I Accept
                </button>
            </div>
        </div>
    );
};
