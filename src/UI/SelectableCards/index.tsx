import React from 'react';
import SelectableCard from './SelectableCard';

export const SelectableCards = ({ choices = [], onChange }: { choices: string[]; onChange?: (data: any) => void }) => {
  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] w-full gap-6'>
      {choices.map((choice, index) => {
        return (
          <SelectableCard
            onClick={(answer) => {
              setSelected(answer);
              onChange && onChange(answer);
            }}
            key={`${choice}-${index}`}
            active={choice === selected}
            label={`${index + 1}`}
            content={choice}
          />
        );
      })}
    </div>
  );
};

export default SelectableCards;
