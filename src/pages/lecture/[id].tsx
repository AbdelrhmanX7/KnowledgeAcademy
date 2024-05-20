import { useGetLecture } from '@/services/hooks';
import { Image } from '@/UI';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
export default function LectureId() {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ['getLecture'] });
  }, []);
  const { query } = useRouter();
  const { data } = useGetLecture({ id: query?.id as string });
  return (
    <div>
      <iframe src='http://192.168.1.2:4000' />
      {data?.videoUrl && (
        <ReactPlayer light={<Image src={data.thumbnailUrl} />} playsinline controls url={data.videoUrl} />
      )}
    </div>
  );
}
