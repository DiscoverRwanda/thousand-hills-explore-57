
import React from 'react';

interface ProfileTabContentProps {
  active: boolean;
  children: React.ReactNode;
}

const ProfileTabContent: React.FC<ProfileTabContentProps> = ({ active, children }) => {
  if (!active) return null;
  
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};

export default ProfileTabContent;
