import { Component } from "react";

export default class FetchApi extends Component {
    state = {
        images: [],
        error: null,
        status: 'idle',
        page: 1
    }

    componentDidUpdate(prevProps, prevState) {
        const prevSearchImage = prevProps.SearchImage;
        const nextSearchImage = this.props.SearchImage;

        if (prevSearchImage !== nextSearchImage) {
            this.setState({ status: 'pending', page: 1 });

            this.fetchImages(nextSearchImage, 1);
        }
    }

    fetchImages = (name, page) => {
        fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=22926721-5d20aa08498ffd1ff2f906542&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`No Pokemon with name ${name}`);
            })
            .then(data => {
                if (data.hits) {
                    this.setState(prevState => ({
                        images: [...prevState.images, ...data.hits],
                        status: 'resolved'
                    }));
                }
            })
            .catch(error =>
                this.setState({ error, status: 'rejected' }));
    }

    handleLoadMore = () => {
        const { SearchImage } = this.props;
        const nextPage = this.state.page + 1;

        this.fetchImages(SearchImage, nextPage);
        this.setState(prevState => ({
            page: nextPage
        }));
    }

    render() {
        const { status, images } = this.state;
        const { onClick } = this.props;

        if (status === 'idle') {
            return <h1>Enter something in the search</h1>;
        }
        if (status === 'resolved') {
            return (
                <div className="Container">
                    <ul className="ImageGallery">
                        {images.map(image => (
                            <li className="ImageGalleryItem" key={image.id}>
                                <img
                                    className="ImageGalleryItem-image"
                                    src={image.largeImageURL}
                                    alt={image.tags}
                                    onClick={() => onClick(image.largeImageURL)}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="Button">
                        {images.length > 0 && (
                        <button className="Button-more" onClick={this.handleLoadMore}>
                            Load more
                        </button>
                    )}
                    </div>
                </div>
            );
        }
    }
}
