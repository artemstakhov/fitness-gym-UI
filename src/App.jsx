import React from 'react';
import Organizer from './containers/Organizer/Organizer';
import Login from './containers/Login/Login';
import Error404 from './containers/Error404/Error404';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const user = {
    firstName: 'Vlad',
    lastName: 'Ulinets'
  }

  const login = (isLogin) => {
    setLoggedIn(isLogin);
  }

  return (
    <BrowserRouter>
      {
        isLoggedIn ? (
          <>
            <Routes>
              <Route index path="/" element={<Organizer user={user} />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route index path="/" element={<Login onLogin={login} />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        )
      }
    </BrowserRouter>
  );
}

export default App;
