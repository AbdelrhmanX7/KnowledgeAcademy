import React, { useState } from 'react';
import { Menu } from '@/UI';
import { Radio } from 'antd';

interface TeacherMenuProps {
  title: string;
  options: string[];
}

export const FilterMenu: React.FC<TeacherMenuProps> = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className=''>
      <Menu labelClassName='py-2 m-2' label={title} className='font-bold m-4 text-lg '>
        <div>
          <div>
            {options.map((option) => (
              <div key={option}>
                <Radio checked={selectedOption === option} onChange={() => setSelectedOption(option)}>
                  {option}
                </Radio>
              </div>
            ))}
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default FilterMenu;
