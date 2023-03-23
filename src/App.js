import React from 'react';
import './App.css';
import HeaderComponent from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoContainer from './Components/VideoContainer';
import { Suspense } from 'react';
import MainContainer from './Components/MainContainer';
import SearchResults from './Components/SearchResults';

const WatchPage=React.lazy(()=>import("./Components/WatchPage"));
const appRouter=createBrowserRouter([
  {path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer />
  },
  {
    path:"watch",
    element:
    <Suspense fallback={"loading..."}>
      <WatchPage/>
    </Suspense>
  },
  {
    path:"results",
    element:<SearchResults/>
  }

]
}
])
function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <HeaderComponent/>
       <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
