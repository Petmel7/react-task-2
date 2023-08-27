import { Component } from "react";
import { toast } from 'react-toastify';
import { ImSearch } from "react-icons/im";

export default class Searchbar extends Component {

    state = {
        SearchImage: '',
    }
    
    handleNameChnge = event => {
        this.setState({ SearchImage: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.SearchImage.trim() === '') {
            toast('Введіть щось у пошук')
            return;
        }

        this.props.handleFormSubmit(this.state.SearchImage);
        this.setState({ SearchImage: '' });
    }

    render() {
        const { handleKeyPress } = this.props;

        return (
            <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                        <ImSearch className="SearchForm-icon"/>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                        value={this.state.SearchImage}
                        onChange={this.handleNameChnge}
                        onKeyPress={handleKeyPress}
                    />
            </form>
        </header>
        )
    }
}