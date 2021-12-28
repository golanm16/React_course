const idLen = 8;
const calcCheckDigit = (num) => {
    // console.log(num);
    if (isNaN(num)) {
        return `${num} is not a number`;
    }
    const numStr = String(num);
    if (numStr.length !== idLen) {
        return `${numStr} length must be ${idLen}`;
    }
    const digitArr = numStr.split('');
    const digitArrSum = digitArr
        .map((d, i) => i % 2 == 0 ? d :
            (d * 2) < 10 ? d * 2 : [Math.floor((d * 2) / 10), d * 2 % 10])
        ;

    const sum = digitArrSum
        .flat()
        .map(num => Number(num))
        .reduce((prev, next) => prev + next);
    const checkDigit = 10 - (sum % 10);
    return checkDigit;
}

const Todo = ({ id, title }) => {
    return (
        <div>{id} {title}</div>
    )
}

function Todos() {
    const todos = [
        { id: 1, title: 'wash dishes', isCompleted: false },
        { id: 2, title: 'throw the garbage', isCompleted: true }
    ];
    return (
        <ul>
            {todos.map(({ id, title }) => (
                // must have key on the main element
                <Todo key={id} id={id} title={title} />
            ))}
        </ul>
    );
}

ReactDOM.render(<Todos />, document.getElementById('root'));
