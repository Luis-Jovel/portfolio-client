import React from 'react';

const App = ({ children }) => (
  <div>
    <section>{children}</section>
  </div>
);

App.propTypes = {
  children: React.propTypes.node,
};
export default App;
