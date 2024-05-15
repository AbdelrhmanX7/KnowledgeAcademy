import { ReactImageFallbackProps } from 'react-image-fallback';

export interface ImageWithFallbackProps extends Omit<ReactImageFallbackProps, 'fallbackImage'> {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  fallbackImage?: string;
}
