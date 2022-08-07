import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import './App.css';
function App() {
  return (
    <div class="wrapper">
      <Layout>
        <Routes>
          <Route path="/app.me" exact element={<Home/>}></Route>
          <Route path="/app.me/about" exact element={<About/>}></Route>
          <Route path="/app.me/works" exact element={ <Works />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
