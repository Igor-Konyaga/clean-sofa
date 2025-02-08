'use client';

import { Title } from '@/app/shared';
import styles from './Gallery.module.scss';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import { galleryData } from './model/constants';
import { useCallback } from 'react';
import { ArrowIcon } from '../CustomIcons/ArrowIcon/ArrowIcon';

export const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});

  const scrollPrev = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.currentTarget.blur();
      if (emblaApi) emblaApi.scrollPrev();
    },
    [emblaApi],
  );

  const scrollNext = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.currentTarget.blur();
      if (emblaApi) emblaApi.scrollNext();
    },
    [emblaApi],
  );

  return (
    <section id="gallery" className={styles.gallery}>
      <Title id="galleryTitle" text="ГАЛЕРЕЯ" level={2} />

      <div id="carousel" className={styles.carousel} ref={emblaRef}>
        <div className={styles.wrapperSlides}>
          {galleryData.map(({ id, src }) => {
            return (
              <div key={id} className={styles.slide}>
                <Image className={styles.image} src={src} alt="gallery image" />
              </div>
            );
          })}
        </div>

        <div className={styles.wrapperBtns}>
          <button className={styles.prevBtn} onClick={scrollPrev}>
            <ArrowIcon />
          </button>
          <button className={styles.nextBtn} onClick={scrollNext}>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
};
