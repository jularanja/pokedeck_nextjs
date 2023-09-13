import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Card from '../components/Card';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  const maxPokemons = 252;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();
 // console.log(data);

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
 
      <div>
        <div className={styles.title}>
          <h1>
            Poke<span>Next</span>
          </h1>
          <Image
            src='/images/pokeball.png'
            width='30'
            height='30'
            alt='PokeNext'
          />
           

        </div>
        <div className={styles.grid}>
          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
            />
          ))}
        </div>
      </div>
    </>
  );
}
