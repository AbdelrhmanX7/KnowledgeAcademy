import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Button, Input } from '@/UI';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
interface ProfileItemProps {
  icon: ReactNode;
  title: string;
  value: string | number | undefined;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ icon, title, value }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | number | undefined>(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <>
      <div className='my-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h4>
            {icon} {title}
          </h4>
          {isEditing ? (
            <div className='flex items-center'>
              <Input id='edit-input' value={inputValue} onChange={handleInputChange} className='w-[300px] m-auto' />
            </div>
          ) : (
            <h3 className='font text-base m-2'> {value}</h3>
          )}
        </div>
        <div>
          {isEditing ? (
            <div>
              <Button
                className='m-2'
                onClick={() => {
                  setIsEditing(false);
                }}
              >
                <SaveIcon className='' />
              </Button>
              <Button
                danger
                className=' '
                onClick={() => {
                  setIsEditing(false);
                }}
              >
                <CancelIcon />
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => {
                setIsEditing(true);

                setInputValue(value);
              }}
            >
              <EditOutlinedIcon />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileItem;
