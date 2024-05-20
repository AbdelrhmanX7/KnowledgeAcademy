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
      {data?.videoUrl && (
        <>
          <video id='videoPlayer' width='1000' controls>
            <source src={data.videoUrl} type='video/mp4' />
          </video>
          <div
            dangerouslySetInnerHTML={{
              __html: `<video controls className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src=${data.videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
            }}
          />
          <ReactPlayer
            playing
            muted={false}
            light={<Image src={data.thumbnailUrl} />}
            playsinline
            controls
            url={data.videoUrl}
          />
        </>
      )}
    </div>
  );
}
