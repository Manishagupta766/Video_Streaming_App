import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Head from './component/Head';
import Body from './component/Body';
import './App.css';
import { Provider } from 'react-redux';
import WatchPage  from './component/WatchPage';
import store from './Utils/store';
import MainContainer from './component/MainContainer';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />, 
    children:[
     { path:"/",
      element: <MainContainer />,},{
        path:"watch",
        element: <WatchPage />,
      }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router={appRouter} />
        
      </div>
    </Provider>
  );
}

export default App;
