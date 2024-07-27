import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, DECREMENT } from './Action';

const ReduxComponent = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();
    const colore1 = {
        background: 'green',
        marginRight: '10px'
    }
    const colore2 = {
        background: 'red '
    }
    return (
        <>
            <div>
                <h3>Redux Revision Example</h3>
                <h4>Count is : {count}</h4>
                <button style={colore1} onClick={() => dispatch({ type: INCREMENT })}>Plus</button>
                <button style={colore2} onClick={() => dispatch({ type: DECREMENT })}>Minus</button>
            </div>
        </>
    )
}

export default ReduxComponent