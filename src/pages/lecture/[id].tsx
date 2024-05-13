import { useGetLecture } from '@/services/hooks';
import { useRouter } from 'next/router';
import React from 'react';

export default function LectureId() {
  const { query } = useRouter();
  const { data } = useGetLecture({ id: query?.id as string });

  return (
    <div>
      {data?.videoUrl && (
        <video id='videoPlayer' width='1000' controls>
          <source src={data.videoUrl} type='video/mp4' />
        </video>
      )}
    </div>
  );
}
