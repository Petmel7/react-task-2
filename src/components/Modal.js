import { Component } from "react";
//! Для модалкі замість z-index в react
import { createPortal } from "react-dom";
// import './Modal.css';

//! Для модалкі замість z-index в react
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount')

        this.handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                console.log('ESC')
                this.props.onClose();
            }
        }
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
}

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Modal componentDidUpdate')

    // }

    handleBackdropClick = event => {
        console.log('Клікнули в бекдроп')
        console.log(event.currentTarget)
        console.log(event.target)

        if (event.currentTarget === event.target) {
            this.props.onClose()
        }
    }
    
    render() {
        return createPortal (
            <div className="Modal-backgdrop"
                onClick={this.handleBackdropClick}>
                
                <div className="Modal-content">
                    {this.props.children}
                </div>
            </div>,
            modalRoot
        )
    }
}