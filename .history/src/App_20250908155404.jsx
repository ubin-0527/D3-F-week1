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
    props = {
        title: "Default Title",
        body: "Default Body",
    };
    return (
        <div>
            <h1>Hello Vite + React!</h1>
            <p>This is a simple React component rendered by Vite.</p>
            <button>Click me</button>
        </div>
    );
}

export default App;
