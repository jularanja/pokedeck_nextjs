import styles from '@/styles/About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About the project</h1>
      <p>
        Est commodo reprehenderit irure dolor. Est ut nostrud exercitation qui
        est adipisicing do. Labore culpa amet qui nulla aute consequat fugiat
        exercitation.
      </p>
      
      <Image
        src={'/images/charizard.png'}
        rel='preload'
        as='image'
        width={'300'}
        height={'293'}
        alt='Charizard'
        priority={'false'}
      />
    </div>
  );
}
