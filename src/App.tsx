import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { Route,Routes, BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContexts';


function App( ) {

  return (
    <BrowserRouter>   
      <AuthContextProvider> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rooms/new" element={<NewRoom/>}/>
            <Route path="/rooms/:id" element={<Room />}/>
          </Routes>  
      </AuthContextProvider>    
    </BrowserRouter>
  );
}

export default App;
