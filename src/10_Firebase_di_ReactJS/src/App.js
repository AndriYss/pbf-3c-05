import ThemeProvider from "./ThemeContext/ThemeProvider";
import Menu from "./Menu";
import SetColor from "./SetColor";
import BlogPost from './components/BlogPost';
import CommentPost from './components/CommentBlog';

import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import routes from './components/routes';
import './App.css';

import firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in ? {JSON.stringify(isLoggedIn)}
      <div className="App" >
        <Router>
          <Header />

          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;














// export default function App() {
//   return (
//     <ThemeProvider>
//       <Menu />
//       <br />
//       <SetColor />
//     </ThemeProvider>
//   )
// }
// class App extends React.Component {

//   render() {
//     return (
//       <div>
//         <BlogPost />
//         <CommentPost />
//       </div>
//     );
//   }
// }

// export default App;
