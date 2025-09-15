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
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <button>Click me</button>
        </div>
    );
}

export default App;
