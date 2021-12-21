// React.createElement(
//     type,
//     [props],
//     [...children]
// )

// react component must start with upper letter
const InnerElement = React.createElement(
    'div',
    { onClick: () => alert('inner'), title: 'inner title', className: 'inner' },
    'inner'
);

const SimpleElement = React.createElement(
    'div',
    { onClick: () => alert("hi!"), title: 'simple div' },
    [InnerElement, InnerElement, InnerElement]
);
const InnerBabelElement = () => (
    <div onClick={() => alert("inner")}>inner</div>
);
const SimpleBabelElement = () => (
    <div onClick={() => alert("clicked")}>
        <InnerBabelElement />
        <InnerBabelElement />
        more text
    </div>
);

function MyDate() {
    const hours = new Date().getHours();
    let timeOfDay;
    if (hours < 12) {
        timeOfDay = 'morning';
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon';
    }
    else {
        timeOfDay = 'evening';
    }

    return (
        <h1>good {timeOfDay}!</h1>
    )
}

function App() {
    return (
        <div>
            <MyDate />
            <MyDate />
            <MyDate />
        </div>
    )
}

function NoDivApp() {
    return (
        <React.Fragment>
            <MyDate />
            <MyDate />
            <MyDate />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<SimpleBabelElement />, document.getElementById('app'));