import React from 'react';
import { Sparkles } from 'lucide-react';

interface MascotAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

// NOTE: This uses a generated 3D-style cat as a placeholder. 
// You can replace this URL with the specific image asset you uploaded.
const MASCOT_URL = "https://robohash.org/MineTravelMascotCompanion.png?set=set4&bgset=bg1&size=300x300";

const MascotAvatar: React.FC<MascotAvatarProps> = ({ size = 'md', animated = true }) => {
  const containerClasses = {
    sm: 'w-10 h-10 border-2',
    md: 'w-24 h-24 border-4',
    lg: 'w-40 h-40 border-4'
  };

  return (
    <div className={`relative ${containerClasses[size]} border-white rounded-full shadow-xl bg-brand-50 flex-shrink-0 ${animated ? 'animate-float' : ''}`}>
      <img 
        src={MASCOT_URL} 
        alt="Mine Mascot" 
        className="w-full h-full object-cover rounded-full"
      />
      {animated && (
        <div className="absolute -top-1 -right-1 z-10">
          <Sparkles 
            className="text-yellow-400 animate-pulse filter drop-shadow-sm" 
            size={size === 'sm' ? 12 : 28} 
            fill="currentColor" 
          />
        </div>
      )}
    </div>
  );
};

export default MascotAvatar;