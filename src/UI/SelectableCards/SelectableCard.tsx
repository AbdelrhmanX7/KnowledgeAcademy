import { classNames } from '../../utils';
import React from 'react';

export const SelectableCard = ({
  disabled,
  active,
  onClick,
  label,
  content,
}: {
  disabled?: boolean;
  active?: boolean;
  onClick?: (data: any) => void;
  label?: string;
  content?: string;
}) => {
  return (
    <div className='flex justify-center items-center gap-4'>
      <p className='text-2xl'>{label}-</p>
      <button
        onClick={() => onClick && onClick(content)}
        disabled={disabled}
        className={classNames(
          'flex justify-center items-center p-6 w-full h-full border shadow-sm rounded-lg hover:bg-[#f8f8f8] transition-[background-color] duration-300',
          active && 'border-[#1677ff] shadow-[0_0_0_2px_#0591ff1a]',
        )}
      >
        <p className='text-2xl'>{content}</p>
      </button>
    </div>
  );
};

export default SelectableCard;
