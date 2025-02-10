import { Star } from '@/app/components/CustomIcons/StarIcon/Star';
import styles from './StarRating.module.scss';

type StarRatingProps = {
  stars: number;
};

export const StarRating: React.FC<StarRatingProps> = ({ stars }) => {
  return (
    <div className={styles.wrapper}>
      {[...Array(stars)].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
};
