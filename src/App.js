import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar.js';
import ImageGallery from './components/ImageGallery.js';
import Button from './components/Button.js';
import Modal from './components/Modal.js';
import FetchApi from './components/FetchApi.js';
import { ToastContainer } from 'react-toastify';

class App extends Component {

  state = {
    showModal: false,
    pokemonName: '',
    imageUrl: '',
  }

  handleFormSubmit = pokemonName => {
    
    this.setState({ pokemonName });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

//   handleSubmit = event => {
//     event.preventDefault();
//     const pokemonName = event.target.querySelector('.input').value;
//     console.log(pokemonName); // перевірте, чи отримали значення
//     // Тут ви маєте оновити стан змінної pokemonName
// }


  render() {
    const { showModal } = this.state;
    // const { pokemonName } = this.props;

  return (
    <div className="App">
      <Searchbar handleFormSubmit={this.handleFormSubmit} />
      <ToastContainer autoClose={3000} />
        <FetchApi pokemonName={this.state.pokemonName}/>
        <ImageGallery />
        <Button />
      
        {/* <button type="button"
          onClick={this.toggleModal}>Open Modal</button> */}
        
        {showModal && (
          <Modal onClose={this.toggleModal}>
            
            <div>
              <button type='button'
                onClick={this.toggleModal}>X</button>
            </div>
          </Modal>
        )}
    </div>
  );
  }
}

export default App;
