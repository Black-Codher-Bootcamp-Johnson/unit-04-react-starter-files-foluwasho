import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

function App() {
  return (
      <Profile name="FOLUSHO" bio="BLACK CODHER STUDENT" />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

