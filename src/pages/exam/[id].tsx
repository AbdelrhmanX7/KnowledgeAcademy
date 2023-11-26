import { Button, SelectableCards } from '@/UI';
import React, { useState } from 'react';
const MOCK_DATA = [
  {
    title: 'What is the capital of France?',
    choices: ['Paris', 'Berlin', 'Rome', 'Madrid'],
  },
  {
    title: 'Who painted the Mona Lisa?',
    choices: ['Leonardo da Vinci', 'Michelangelo', 'Vincent van Gogh', 'Pablo Picasso'],
  },
  {
    title: 'What is the largest ocean in the world?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
  },
  {
    title: 'Which planet is known as the Red Planet?',
    choices: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
  },
  {
    title: 'What is the symbol for the chemical element gold?',
    choices: ['Au', 'Ag', 'Fe', 'Cu'],
  },
  {
    title: 'Who is known as the father of modern physics?',
    choices: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Niels Bohr'],
  },
  {
    title: 'Which country is famous for producing maple syrup?',
    choices: ['Canada', 'United States', 'Australia', 'Sweden'],
  },
  {
    title: 'What is the largest mammal in the world?',
    choices: ['Blue whale', 'African elephant', 'Giraffe', 'Hippopotamus'],
  },
  {
    title: 'Who wrote the play "Romeo and Juliet"?',
    choices: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
  },
  {
    title: 'Which famous scientist formulated the theory of general relativity?',
    choices: ['Albert Einstein', 'Stephen Hawking', 'Max Planck', 'Niels Bohr'],
  },
];

export default function Page() {
  const [form, setForm] = useState({});
  return (
    <div className='my-[120px] px-6 w-full flex flex-col gap-6'>
      {MOCK_DATA.map((question, index) => {
        return (
          <div className='flex flex-col justify-start items-start gap-6 w-full' key={`${index + 1}. ${question.title}`}>
            <div className='text-2xl flex items-start justify-start gap-2 w-full'>
              <span className='mb-auto font-semibold'>{index + 1}.</span>
              <h1 className='text-start'>{question.title}</h1>
            </div>

            <SelectableCards
              onChange={(answer) => {
                setForm((prev) => ({
                  ...prev,
                  [index + 1]: answer,
                }));
              }}
              choices={question.choices}
            />
          </div>
        );
      })}
      <Button onClick={() => console.log(form)}>ارسال</Button>
    </div>
  );
}
