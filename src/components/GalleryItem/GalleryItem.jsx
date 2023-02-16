import { CardItem } from 'components';
import { useEffect, useRef } from 'react';
import { scrollWithOffset } from 'service/scrollWithOffset';

export const GalleryItem = ({ src, alt, isScrollAnchor }) => {
  const elementToScroll = useRef(null);

  useEffect(() => {
    if (!isScrollAnchor) return;
    scrollWithOffset(elementToScroll.current, 20);
  }, [isScrollAnchor]);

  return (
    <CardItem ref={elementToScroll}>
      <img src={src} alt={alt} style={{ objectFit: 'cover' }} />
    </CardItem>
  );
};
