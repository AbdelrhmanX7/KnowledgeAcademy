import React from 'react';
import Button from '../Button';
import { FaTelegram, FaPhone, FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export const SocialMediaLinks = () => {
  return (
    <div className='flex items-center gap-4'>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
        className='max-w-[38px]'
      >
        <FaTelegram />
      </Button>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
        className='max-w-[38px]'
      >
        <FaFacebook />
      </Button>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
        className='max-w-[38px] bg-[#25d366]'
      >
        <FaWhatsapp />
      </Button>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
        className='max-w-[38px] bg-[#ff0302]'
      >
        <FaYoutube />
      </Button>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
        type='default'
        className='max-w-[38px]'
      >
        <FaPhone className=' rotate-90' />
      </Button>
    </div>
  );
};

export default SocialMediaLinks;
