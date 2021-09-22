import './App.scss';

import Navigation from './components/Navigation/Navigation.jsx';
import Breadcrumbs from './components/UI/Breadcrumbs/Breadcrumbs.jsx';
import Search from './components/Search/Search.jsx';
import PostCardNew from './components/PostCardNew/PostCardNew.jsx';
import TopPosts from './components/TopPosts/TopPosts.jsx';
import PostCard from './components/PostCard/PostCard.jsx';
import Posts from './components/Posts/Posts.jsx';
import Footer from './components/Footer/Footer.jsx';
import Divider from './components/UI/Divider/Divider.jsx';
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

function App() {
  const searchModeOff = useSelector(state => state.searchModeOff);

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <main>
          <Breadcrumbs/>
          <Search/>
          { searchModeOff ?
          <>
            <PostCardNew/>
            <Divider/>
            <TopPosts/>
          </> : null
          }
          <Divider/>
          <Posts/>
          <Footer/>
        </main>
      </div>
      </BrowserRouter>
  );
}

export default App;
