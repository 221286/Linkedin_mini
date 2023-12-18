import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//import Header from './Components/Login';
import Body from './Components/Body';
import Login from './Components/Login'; 
import SignUp from './Components/SignUp';
import Home from './Components/Home';

function App() {

  const Layout = createBrowserRouter([
    {
        path:"/body",
        element:<Body></Body>,
        children:[
          

        ]},
        {
          path:"/",
          element:<Login></Login>
      },
      {
        path:"/SignUp",
        element:<SignUp></SignUp>
    },
    { path:"/body",
       element:<Body></Body>,
       children:[{
        path:"/body/Home",
        element:<Home></Home>
       }]

    },
    

      
   
    

])
  return (
    <div className="">
      
      
      <RouterProvider router={Layout}>
      

      </RouterProvider>
      
    </div>
  );
}

export default App;
