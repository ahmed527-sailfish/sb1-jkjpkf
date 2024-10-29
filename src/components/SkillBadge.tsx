import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  const getLevelColor = () => {
    switch (level) {
      case 'Expert':
        return 'from-purple-500 to-blue-500';
      case 'Advanced':
        return 'from-blue-500 to-cyan-500';
      case 'Intermediate':
        return 'from-cyan-500 to-teal-500';
      default:
        return 'from-teal-500 to-green-500';
    }
  };

  return (
    <div className={`bg-gradient-to-r ${getLevelColor()} p-[1px] rounded-full`}>
      <div className="px-4 py-2 bg-gray-900 rounded-full">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-400 ml-2">• {level}</span>
      </div>
    </div>
  );
};

export default SkillBadge;