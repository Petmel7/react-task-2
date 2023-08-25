import { Component } from "react";
import { toast } from 'react-toastify';

// const Searchbar = ({ onSubmit }) => {
//     return (
//         <header className="searchbar">
//             <form className="form" onSubmit={onSubmit}>
//                 <button type="submit" className="button">
//                     <span className="button-label">Search</span>
//                 </button>

//             <input
//                 className="input"
//                 type="text"
//                 autoComplete="off"
//                 autoFocus
//                 placeholder="Search images and photos"
//             />
//             </form>
//         </header>
//     )
// }

// export default Searchbar;

export default class Searchbar extends Component {
    state = {
    pokemonName: ''
    }
    
    handleNameChnge = event => {
        this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            toast('Введіть імя Pokemona')
            return;
        }

        this.props.handleFormSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' });
    }

    render() {
        return (
            <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                        value={this.state.pokemonName}
                        onChange={this.handleNameChnge}
                />
            </form>
        </header>
        )
    }
}