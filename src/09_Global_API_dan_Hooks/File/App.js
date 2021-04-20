import ThemeProvider from "./ThemeContext/ThemeProvider";
import Menu from "./Menu";
import SetColor from "./SetColor";

import React from 'react';
import BlogPost from './components/BlogPost';

// export default function App() {
//   return (
//     <ThemeProvider>
//       <Menu />
//       <br />
//       <SetColor />
//     </ThemeProvider>
//   )
// }
class App extends React.Component {

  render() {
    return (
      <div>
        <BlogPost />
      </div>
    );
  }
}

export default App;