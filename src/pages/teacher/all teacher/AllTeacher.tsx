import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import Container from '@mui/material/Container';
import { Card, FilterMenu } from '@/UI';

interface Teacher {
  id: number;
  name: string;
  image: string;
  description: string;
}

const AllTeacher: React.FC = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: '  عمر محمد',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
    {
      id: 2,
      name: ' وليد خالد',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
    {
      id: 3,
      name: 'يوسف',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
    {
      id: 4,
      name: 'كرم',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
    {
      id: 5,
      name: 'سامي',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
    {
      id: 6,
      name: 'نور',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
    {
      id: 7,
      name: 'عمر',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
    {
      id: 8,
      name: 'كريم ',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
    {
      id: 9,
      name: 'أحمد',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
    {
      id: 10,
      name: 'عبدالرحمن',
      image: 'images (6).jfif',
      description: 'مدرس لغة عربية حاصل على بكارليوس التربية من كلية تربية جامعة القاهر ',
    },
  ];

  return (
    <div className='my-5'>
      <div className=' flex justify-center'>
        <FaChalkboardTeacher className='m-3 text-blue-500 text-2xl' />
        <h1>كل المدرسين </h1>
        <FaChalkboardTeacher className='m-3 text-2xl text-blue-500' />
      </div>
      <div
        className='w-[85%] h-[100px]   m-auto mt-[30px] flex items-center justify-center'
        style={{ direction: 'rtl' }}
      >
        <FilterMenu title='اختر الشعبة' options={['علمى', 'ادبى', 'علم رياضة']} />
        <FilterMenu title='اختر الصف' options={['الصف الاول الثانوى', 'الصف الثانى الثانوى', 'الصف الثالث الثانوى']} />
        <FilterMenu
          title='اختر المادة'
          options={[
            'لغة عربية',
            'لغة انجليزية',
            'لغة فرنسية',
            'فيزياء',
            'كيمياء',
            'احياء',
            'جيولوجيا',
            'تاريخ',
            'فلسفة',
            'علم نفس',
            'جغرفيا',
            'رياضيات',
          ]}
        />
      </div>
      <div>
        <Container maxWidth='lg' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {teachers.map((teacher) => (
            <Card
              type='teacher'
              name={teacher.name}
              key={teacher.id}
              img={teacher.image}
              description={teacher.description}
              Subject='اللغة العربية '
            />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default AllTeacher;
