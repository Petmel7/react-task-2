import { ImSpinner } from "react-icons/im"
// import PokemonDataViev from "./PokemonDataViev"
// import pendingImage from './pokemonImage/panding.png';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function PokemonPendingViev({ SearchImage }) {
    const pokemon = {
        name: SearchImage,
        sprites: {
            other: {
                'official-artwork': {
                    // front_default: pendingImage,
                },
            },
        },
        stats: [],
    }
    return (
        <div role="alert">
            <div style={styles.spinner}>
                <ImSpinner size='32' className="icon-spin" />
                Завантажуєм...
            </div>
            {/* <PokemonDataViev pokemon={pokemon}/> */}
        </div>
    )
}