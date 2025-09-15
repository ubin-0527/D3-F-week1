function App() {
    return (
        <div className="catalog">
            <Book
                cover="https://m.media-amazon.com/images/I/71Jzezm8CBL.jpg"
                author="George R. R. Martin"
                link="https://www.amazon.ca/Game-Thrones-Song-Fire-Book/dp/0553103547"
            />
            <Book
                cover="https://m.media-amazon.com/images/I/7193zyz9thL._UF1000,1000_QL80_.jpg"
                author="George R. R. Martin"
                link="https://www.amazon.ca/Clash-Kings-Song-Fire-Book/dp/0553108034"
            />
            <Book
                cover="https://m.media-amazon.com/images/I/71hzYSMbvZL.jpg"
                author="George R. R. Martin"
                link="https://www.amazon.ca/Storm-Swords-Song-Fire-Three/dp/0553106635"
            />
            <Add text="+ Add New"></Add>
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

function Add(props) {
    return (
        <button className="button-container" onClick={props.onClick}>
            <h1 className="button-text">{props.text}</h1>
        </button>
    );
}

export default App;
Book;
Add;
