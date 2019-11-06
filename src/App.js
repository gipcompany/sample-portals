import React from 'react';
import ReactDOM from 'react-dom';

// id=rootにマウントされるコンポーネントと同列のもう1つのトップレベルのコンポーネントのためのcontainer
const portalRoot = document.getElementById('portal-root');

function List(props) {
  return (
    <ul>
      { props.ids.map(id => <li key={id}>{id}</li>) }
    </ul>
  )
}

function Portal(props) {
  return ReactDOM.createPortal(
    <List ids={props.ids}/>,
    portalRoot
  );
}

function App() {
  const ids = [1, 2, 3];

  return <Portal ids={ids} />
}

export default App;
