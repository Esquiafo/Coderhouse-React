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
//USER VIEW
import Login from './pages/User/Login'
import SignUp from './pages/User/SignUp'
import Panel from './pages/User/Panel'
//ADMIN VIEW
import Select from './pages/Admin/Select';
import Crud from './pages/Admin/Crud';
//FORMS
import ItemFormGet from './pages/Admin/Item/FormGet';
import ItemFormPost from './pages/Admin/Item/FormPost';
import ItemFormPut from './pages/Admin/Item/FormPut';
import ItemFormDelete from './pages/Admin/Item/FormDelete';
import UserFormGet from './pages/Admin/User/FormGet';
import UserFormPost from './pages/Admin/User/FormPost';
import UserFormPut from './pages/Admin/User/FormPut';
import UserFormDelete from './pages/Admin/User/FormDelete';
import OrderFormGet from './pages/Admin/Order/FormGet';
import OrderFormPost from './pages/Admin/Order/FormPost';
import OrderFormPut from './pages/Admin/Order/FormPut';
import OrderFormDelete from './pages/Admin/Order/FormDelete';
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
        {/* <Route path="/:purchaseId/" component={ViewPurchase} /> */}
        <Route exact path="/user/" component={Login} />
        <Route exact path="/user/create" component={SignUp} />
        <Route exact path="/user/profile" component={Panel} />
        {/* ADMIN */}
        <Route exact path="/admin" component={Select} />
        <Route exact path="/admin/:type" component={Crud} />
        {/* FORM ITEMS */}
        <Route exact path="/admin/item/get" component={ItemFormGet} />
        <Route exact path="/admin/item/delete" component={ItemFormDelete} />
        <Route exact path="/admin/item/put" component={ItemFormPut} />
        <Route exact path="/admin/item/post" component={ItemFormPost} />
        {/* FORM USER */}
        <Route exact path="/admin/user/get" component={UserFormGet} />
        <Route exact path="/admin/user/delete" component={UserFormDelete} />
        <Route exact path="/admin/user/put" component={UserFormPut} />
        <Route exact path="/admin/user/post" component={UserFormPost} />
        {/* FORM USER */}
        <Route exact path="/admin/order/get" component={OrderFormGet} />
        <Route exact path="/admin/order/delete" component={OrderFormDelete} />
        <Route exact path="/admin/order/put" component={OrderFormPut} />
        <Route exact path="/admin/order/post" component={OrderFormPost} />
      </Switch>
    </Router>
  );
}

export default App;