import { Steps } from 'antd';
import React, { useState } from 'react';
import { CreateTeacher, UploadTeacherImages, VerifyAccount } from '@/components/create-teacher-form';

export default function CreateTeacherPage() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  return (
    <div className='mt-10'>
      <div className='max-w-[550px] mx-auto'>
        <Steps
          current={currentStep}
          items={[
            {
              title: 'انشاء حساب',
            },
            {
              title: 'رفع الصور',
            },
            {
              title: 'تاكيد الحساب',
            },
          ]}
        />
      </div>
      <div className='h-fit flex justify-center'>
        <StepComponent currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </div>
  );
}

function StepComponent({ currentStep, setCurrentStep }: any) {
  if (currentStep === 0) {
    return <CreateTeacher goNextStep={() => setCurrentStep(1)} />;
  } else if (currentStep === 1) {
    return <UploadTeacherImages goNextStep={() => setCurrentStep(2)} />;
  } else if (currentStep === 2) {
    return <VerifyAccount />;
  }
}
