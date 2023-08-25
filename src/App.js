import './App.css';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import Searchbar from './components/Searchbar.js';
import Modal from './components/Modal.js';
import FetchApi from './components/FetchApi.js';

class App extends Component {

  state = {
    showModal: false,
    pokemonName: '',
    imageUrl: '',
  }

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  }

  toggleModal = imageUrl => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imageUrl: imageUrl,
    }))
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleFormSubmit(this.state.pokemonName);
    }
  }

  render() {
    const { showModal, imageUrl } = this.state;

  return (
    <div className="App">
      <Searchbar
        handleFormSubmit={this.handleFormSubmit}
        handleKeyPress={this.handleKeyPress} />
      
      <ToastContainer autoClose={3000} />

      <FetchApi
        pokemonName={this.state.pokemonName}
        onClick={this.toggleModal} />
        
        {showModal && (
        <Modal onClose={this.toggleModal}>
          
          <div>
              <button type='button'
                onClick={this.toggleModal}>X</button>
          </div>
      
              <img src={imageUrl} alt="Selected" />
          
          </Modal>
        )}
    </div>
  );
  }
}

export default App;
