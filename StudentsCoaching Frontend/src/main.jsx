import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from "./App.jsx"
import { store } from './app/store.js';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import StudentTable from './features/students/StudentTable.jsx';
import AddStudent from './features/students/AddStudent.jsx';
import UpdateStudent from './features/students/UpdateStudent.jsx';
import Login from './features/Auth/Login.jsx';


;

  const router = createBrowserRouter([
    {
          path: "/",
          element:<Login></Login>,
    },{
         path:"/",
         element:<App></App>,
          children:[
            {
            path:"/students",
            element:
               <StudentTable></StudentTable>
         },
         {
            path:"/addStudent",
            element:<AddStudent></AddStudent>
         },
         {
            path:"/updateStudent/:id",
            element:<UpdateStudent></UpdateStudent>
         },
        
      ]
    },  
    
]);
  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
       <RouterProvider router={router}>
       </RouterProvider>
    </Provider>
     
 )