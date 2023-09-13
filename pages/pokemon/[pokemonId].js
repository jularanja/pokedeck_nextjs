import styles from '@/styles/Pokemon.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const maxPokemons = 252;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <>
      <div className={styles.pokemon_container}>
        <h1>{pokemon.name}</h1>
        <div className={styles.image_container}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            width={'250'}
            height={'250'}
            alt={pokemon.name}
            priority={'false'}
          />
        </div>
        <div className={styles.number_container}>
          <h3>Number:</h3>
          <p># {pokemon.id}</p>
        </div>

        <div className={styles.height_container}>
          <h3>Height:</h3>
          <p>{pokemon.height * 10}cm</p>
        </div>

        <div className={styles.weight_container}>
          <h3>Weight:</h3>
          <p>{pokemon.weight / 10}Kg</p>
        </div>
      </div>
    </>
  );
}
