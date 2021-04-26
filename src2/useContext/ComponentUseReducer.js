import React, { useReducer } from "react";

const initialState = { react: false, nodejs: false, angular: false };

const coursesReducer = (state, action) => {
  switch (action.type) {
    case "REACT":
      return { react: true };
    case "NODEJS":
      return { nodejs: true };
    case "ANGULAR":
      return { angular: true };

    default:
      throw new Error();
  }
};

const Courses = () => {
  const [state, dispatch] = useReducer(coursesReducer, initialState);

  const handleReactPress = () => {
    dispatch({ type: "REACT" });
  };

  const handleNodejsPress = () => {
    dispatch({ type: "NODEJS" });
  };

  const handleAngularPress = () => {
    dispatch({ type: "ANGULAR" });
  };

  return (
    <div className="box">
      <p>
        Learning{" "}
        {state.react
          ? "React"
          : state.nodejs
          ? "Nodejs"
          : state.angular
          ? "Angular"
          : "Not Started"}
      </p>
      <div>
        <button
          type="button"
          onClick={handleReactPress}
          className="button is-grey"
        >
          React
        </button>
        <button
          type="button"
          onClick={handleNodejsPress}
          className="button is-dark"
        >
          Nodejs
        </button>
        <button
          type="button"
          onClick={handleAngularPress}
          className="button is-grey"
        >
          Angular
        </button>
      </div>
    </div>
  );
};

export default Courses;
