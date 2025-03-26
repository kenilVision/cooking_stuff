import Home from '../Page/Home';
import AllCourse from '../Page/AllCourse'
import ContactUs from '../Page/ContactUs'
import Posts from '../Page/Posts'
import Login from '../Page/Login';
import SignUp from '../Page/SignUp';


export const roots = [    // routs which can only be acces by user
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/AllCourse',
        element: <AllCourse />
    },
    {
        path: '/ContactUs',
        element: <ContactUs />
    },
    { 
        path: '/Posts', 
        element: <Posts />
    }
    ,
    { 
        path: '/SignIn', 
        element: <Login />
    },
    { 
        path: '/SignUp', 
        element: <SignUp />
    }

];
