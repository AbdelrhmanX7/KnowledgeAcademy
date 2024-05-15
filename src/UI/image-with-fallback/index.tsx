import React from 'react';
import { classNames } from '@/utils';
import ReactImageFallback from 'react-image-fallback';
import { ImageWithFallbackProps } from './type';

export const Image = ({ ...props }: ImageWithFallbackProps) => {
  return (
    <span
      className={classNames('inline-block bg-white', props.className)}
      style={{
        width: props?.width ?? '100%',
        height: props?.height ?? '100%',
      }}
    >
      <ReactImageFallback
        {...props}
        alt={props?.alt ?? ''}
        style={{
          width: props.width ?? '100%',
          height: props.height ?? '100%',
        }}
        fallbackImage={props.fallbackImage ?? 'https://craftypixels.com/placeholder-image/400x400/e8e8e8/e8e8e8'}
        className={classNames(props.className, '!top-0 !left-0')}
      />
    </span>
  );
};

export default Image;
