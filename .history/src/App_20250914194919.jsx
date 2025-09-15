function App() {
    return (
        <div className="catalog">
            <Book
                cover="https://m.media-amazon.com/images/I/71Jzezm8CBL.jpg"
                author="George R.R. Martin"
                link="https://www.amazon.ca/Game-Thrones-Song-Fire-Book/dp/0553103547"
            />
        </div>
    );
}

function Book(props) {
    return (
        <div className="book-container">
            <div className="image-container">
                <img
                    className="book-cover"
                    src={props.cover}
                    alt="book cover image"></img>
            </div>
            <div className="details-container">
                <h2 className="book-author">{props.author}</h2>
                <a className="book-link" href={props.link}>
                    Click to learn more
                </a>
            </div>
        </div>
    );
}

export default App;
Book;
