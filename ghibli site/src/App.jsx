import { Outlet } from 'react-router-dom';
import { useEffect } from "react"
import { slideFunction } from './utils/functions';

import Nav from './components/Nav.jsx'

import { mouseFollower } from './utils/functions';

function App() {

  useEffect(() => {
    slideFunction();

    mouseFollower();
  })
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;