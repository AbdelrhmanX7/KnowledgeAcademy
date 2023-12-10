import React from 'react';
import { Container } from '@mui/material';
import Image from 'next/image';
import img from '../../../imgs/صورة-رجل-الأعمال-في-نمط-ملون-600-x-600.jpeg';
import { Card } from '@/UI';
const index = () => {
  return (
    <div className='mt-[100px]'>
      <Container>
        <div className='flex' style={{ direction: 'rtl', justifyContent: 'space-between', position: 'relative' }}>
          <div className='border w-[400px] flex' style={{}}>
            <Image src={img} width={400} height={300} alt='Teacher Image' />
          </div>
          <div>
            <Card type='description'>
              <div className='w-[500px] h-[400px]'>
                {' '}
                <h1>تفاصيل عن المدرس :</h1>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
