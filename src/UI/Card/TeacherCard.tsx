import React from 'react';
import { FaWhatsapp, FaFacebook, FaYoutube, FaTelegram, FaInstagram } from 'react-icons/fa';
const TeacherCard = () => {
  return (
    <div className=' m-3'>
      <div className='flex justify-center'>
        <a href='#' className='mx-2 border'>
          <FaYoutube className='text-red-500  m-0.5 text-4xl ' />
        </a>
        <a href='#' className='mx-2 border'>
          <FaFacebook className='text-blue-500 text-4xl m-0.5 ' />
        </a>
        <a href='#' className='mx-2 border'>
          <FaTelegram className='text-blue-500 text-4xl m-0.5' />
        </a>
        <a href='#' className='mx-2 border'>
          <FaInstagram className=' text-4xl m-0.5' />
        </a>
        <a href='#' className='mx-2 border'>
          <FaWhatsapp className=' text-4xl m-0.5 text-green-500' />
        </a>
      </div>
    </div>
  );
};

export default TeacherCard;
