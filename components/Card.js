import React from 'react';
import styles from '@/styles/Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ pokemon }) {
  return (
    <>
      <div
        key={pokemon.id}
        className={styles.card}>
        <div className={styles.card_inner}>
          <div className={styles.card_front}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
              width={'100'}
              height={'100'}
              alt={pokemon.name}
              priority={'false'}
            />
            <div className={styles.card_title}>
              <h2 key={pokemon.id}>{pokemon.name}</h2>
            </div>
          </div>
          <div className={styles.card_back}>
            <div className={styles.card_back__inner}>
              <div className={styles.image_container}>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                  width={'100'}
                  height={'100'}
                  alt={pokemon.name}
                  priority={'false'}
                />
              </div>
              <p>#{pokemon.id}</p>
              <div className={styles.card_title}>
                <h3>{pokemon.name}</h3>
              </div>
              <Link
                className={styles.link_details}
                href={`/pokemon/${pokemon.id}`}>
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
