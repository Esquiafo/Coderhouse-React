import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./pages/Navbar/Navbar"
import Index from "../src/pages/Index/Index"
import Cart from "../src/pages/Shop/Cart"
import Product from "./pages/Products/ItemDetailList"
import IndexCategory from "./pages/Category/IndexCategory"
import SingleProduct from './pages/Products/ItemDetail';
import SingleCategory from './pages/Category/SingleCategory';
import ViewPurchase from './pages/User/ViewPurchase';
import Select from './pages/Admin/Select';
import Crud from './pages/Admin/Crud';
import FormGet from './pages/Admin/FormGet';
import FormPost from './pages/Admin/FormPost';
import FormPut from './pages/Admin/FormPut';
import FormDelete from './pages/Admin/FormDelete';
function App() {

  return (
    <Router>
    <Switch>
      <Navbar />
    </Switch>
      <Switch>
        <Route exact path="/" component={Index} />
  
        <Route exact path="/products" component={Product}/>
        <Route exact path="/category" component={IndexCategory}/>
        <Route path="/products/:productId" component={SingleProduct}/>
        <Route exact path="/category/:categoryId" component={SingleCategory} />

        <Route exact path="/cart" component={Cart} />
        <Route exact path="/admin" component={Select} />
        <Route exact path="/admin/:type" component={Crud} />
        <Route exact path="/admin/:type/get" component={FormGet} />
        <Route exact path="/admin/:type/delete" component={FormDelete} />
        <Route exact path="/admin/:type/put" component={FormPut} />
        <Route exact path="/admin/:type/post" component={FormPost} />
        <Route path="/:userId/:purchaseId/" component={ViewPurchase} />
        
      </Switch>
    </Router>
  );
}

export default App;