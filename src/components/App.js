import React from 'react';

const App = ({ children }) => (
  <div>
    <section>{children}</section>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};
export default App;
