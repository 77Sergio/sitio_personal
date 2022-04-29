import { Banner } from './components/Banner.jsx';
import { ContentHome } from './components/ContentHome.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import Header from './components/Header.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>

<Router>

<Header/>
<Banner/>

<Routes>
  <Route path='/' element={<ContentHome/>}/>
  <Route path='*' element={<ContentHome/>}/>
  <Route path='/home' element={<ContentHome/>}/>
  <Route path='/portfolio' element={<Portfolio/>}/>
</Routes>


</Router>
    </div>
  );
}

export default App;
