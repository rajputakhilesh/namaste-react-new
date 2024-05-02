// const header = <h1>My name is rishu</h1>
const header = React.createElement("h1", {}, "hello world from react")

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(header)