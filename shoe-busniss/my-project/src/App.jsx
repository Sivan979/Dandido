import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Registration from './pages/register.jsx';
import Brand from './pages/brand.jsx';
import NotFound from './pages/notfound.jsx';
import ProductDetails from './pages/productDetails.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element = {<Home />} />
          <Route path = '/home' element = {<Home />} />
          <Route path = '/registration' element = {<Registration />} />
          <Route path="/brand/:brandName" element={<Brand />} /> 
          <Route path='/brand/:brandName/:productId' element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>

    </div>
  )
}

export default App;