import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Works from './pages/Works'
import './App.css';
function App() {
  return (
    <div class="wrapper">
      <Layout>
        <Routes>
          <Route path="/app.me" exact element={<Home/>}></Route>
          <Route path="/app.me/works" exact element={ <Works />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
