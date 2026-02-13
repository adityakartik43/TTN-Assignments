import React from "react";

function FunctionalComponent() {
  return <h2>Functional Component</h2>;
}


class ClassComponent extends React.Component {
  render() {
    return <h2>Class Component</h2>;
  }
}


function App() {
  return (
    <>
      <FunctionalComponent />
      <ClassComponent />
    </>
  );
}

export default App;
