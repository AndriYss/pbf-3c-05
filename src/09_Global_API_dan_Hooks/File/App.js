import ThemeProvider from "./ThemeContext/ThemeProvider";
import Menu from "./Menu";
import SetColor from "./SetColor";

import React from 'react';
import BlogPost from './components/BlogPost';
import CommentPost from './components/CommentBlog';

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
        <CommentPost />
      </div>
    );
  }
}

export default App;