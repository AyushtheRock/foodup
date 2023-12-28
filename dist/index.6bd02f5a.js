const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "hellow new"),
        React.createElement("h2", {}, "hellow new")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "hellow new"),
        React.createElement("h2", {}, "hellow new")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
