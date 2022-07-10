import { connect } from "react-redux";
import { store } from './store/reducer';

function App(props) {
  function handleTodo(event) {
    if (event.keyCode === 13 && event.target.value) {
      store.dispatch({
        type: "add",
        value: {
          todo: event.target.value,
          isDone: false,
        }
      });
      event.targetvalue = "";
    }
  }
  function handleIsDone(value) {
    props.dispatch({
      type: "isDone",
      value
    });
  }

  function handleRemove(value) {
    props.dispatch({
      type: "delete",
      value
    });
  }

  return (
    <div className="App">
      <h3>
        React-Redux-Todo-App
      </h3>
      <hr />
      <div>
        <input
          className="input"
          type="text"
          placeholder="Enter Your Todo"
          onKeyUp={handleTodo}
        />
      </div>
      <ul>
        {
          props.todo.map((e, i) => {
            return (
              <li key={i} className="ui-content">
                <input
                  type="checkbox"
                  checked={e.isDone}
                  onChange={() => handleIsDone(i)}
                />
                <h2 className={e.isDone ? "active" : ""}
                >
                  {e.todo}
                </h2>
                <span
                  className="remove-btn"
                  onClick={() => handleRemove(i)}
                >
                  X
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todo: [...state]
  }
}

export default connect(mapStateToProps)(App);
