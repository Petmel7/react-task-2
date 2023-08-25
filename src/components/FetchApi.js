import { Component } from "react";
// import PokemonErrorViev from './PokemonErrorViev.js';
// import PokemonDataViev from './PokemonDataViev.js';
// import PokemonPendingViev from './PokemonPendingViev.js';
// import ImageGallery from './ImageGallery.js';

// export default class FetchApi extends Component {

//     state = {
//         images: [],
//         error: null,
//         status: 'idle'
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const prevName = prevProps.pokemonName
//         const nextName = this.props.pokemonName

//         if (prevName !== nextName) {
//             console.log(nextName)
//             this.setState({ status: 'pending'});
//             setTimeout(() => {
//                 fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=22926721-5d20aa08498ffd1ff2f906542&image_type=photo&orientation=horizontal&per_page=12`)
//                     .then(response => {
//                         if (response.ok) {
//                             return response.json()
//                         }
//                         return Promise.reject(
//                             new Error(`Нема покемона з імям ${nextName}`)
//                         )
//                     })
//                     .then(images =>
//                         this.setState({ images, status: 'resolved' }))

//                     .catch(error =>
//                         this.setState({ error, status: 'rejected' }))
//             }, 1000)
        
//         }
//     }

//     render() {
//         const { status, images } = this.state;
//         // const { images } = this.props;

//         if (status === 'idle') {
//             return <h1>Введіть щось у пошук</h1>;
//         }
//         // if (status === 'pending') {
//         //     return <PokemonPendingViev pokemonName={pokemonName}/>;
//         // }
//         // if (status === 'rejected') {
//         //     return <PokemonErrorViev message={error.message}/>;
//         // }
//         if (status === 'resolved') {
//             // return <ImageGallery images={images} />

//             return (
//                 <ul className="gallery">
//                     {images.hits.map(image => (
//                         <li className="gallery-item" key={image.id}>
//                             <img
//                                // key={image.id}
//                                 src={image.largeImageURL}
//                                 alt={image.tags}
//                                 className="image"
//                             />
//                         </li>
//                     ))}
//                 </ul>
//             )
//         }
//     }
// }



export default class FetchApi extends Component {
    state = {
        images: [],
        error: null,
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) {
            // console.log(nextName);
            this.setState({ status: 'pending' });

            fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=22926721-5d20aa08498ffd1ff2f906542&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error(`Нема покемона з ім'ям ${nextName}`);
                })
                .then(data => {
                    if (data.hits) {
                        this.setState({ images: data.hits, status: 'resolved' });
                    }
                })
                .catch(error =>
                    this.setState({ error, status: 'rejected' }));
        }
    }

    render() {
        const { status, images } = this.state;

        if (status === 'idle') {
            return <h1>Введіть щось у пошук</h1>;
        }
        if (status === 'resolved') {
            return (
                <ul className="gallery">
                    {images.map(image => (
                        <li className="gallery-item" key={image.id}>
                            <img
                                src={image.largeImageURL}
                                alt={image.tags}
                                className="image"
                            />
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
