import Excerpt from "./Excerpt";

function App() {
    return (
        <div>
            <Excerpt
                title="react awesome"
                body="I enjoy developing with react"
            />
            <Excerpt title="html rocks" body="the real web is markup" />
            <Excerpt
                title="css rules them all"
                body="It's all about the looks"
            />
        </div>
    );
}

function Excerpt(props) {
    return (
        <div className="excerpt">
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <button>Click me</button>
        </div>
    );
}

function Book(title, image, author, link) {
    return (
        <div className="book-cover">
            <h2>{title}</h2>
            <img src={image} alt={`Cover of the book ${title}`} />
            <p>Author: {author}</p>
            <a href={link}>More Info</a>
        </div>
    );
}

export default App;
