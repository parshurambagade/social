import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from "./components/navBar/Navbar"
import Leftbar from "./components/leftBar/Leftbar"
import Rightbar from "./components/rightBar/Rightbar"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { MdSignalWifi1BarLock } from 'react-icons/md';
import Comments from './components/comments/Comments';

function App() {
  document.body.style.background="#f5f4ef";
  let currentUser = true;

  const Layout = ()=>{
    return(
      <div>
        <Navbar />
        <div style={{display:"flex"}}>
          <Leftbar />
          <div style={{flex:6}}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div> 
    );
  };

  const ProtectedRoute = ({ children })=>{
    if(!currentUser){
      return(
        <Navigate to="/login" />
      )
    
    }

    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]); 
  
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
