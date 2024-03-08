// App.tsx

import React from 'react';
import StarWarsComponent from './StarWarsComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Star Wars App</h1>
      <StarWarsComponent />
    </div>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import StarWarsListComponent from './StarWarsListComponent';
// import StarWarsDetailsComponent from './StarWarsDetailsComponent';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={StarWarsListComponent} />
//         <Route path="/people/:id" component={StarWarsDetailsComponent} />
//         <Route path="/ships/:id" component={StarWarsDetailsComponent} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
