import './App.css'
import Layout from './Layout/Layout'
import {  Routes, Route } from "react-router-dom";
import { roots } from './Routes/Routes';

function App() {
 
  return (
    <Routes>
        {roots.map((route, i) => (
            <Route key={i} path={route.path} element={<Layout> {route.element}</Layout>} />
          ))}
           
      </Routes>
  )
}

export default App
