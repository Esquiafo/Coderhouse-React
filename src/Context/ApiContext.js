import  {createContext} from 'react';


const ApiContext = createContext({
    // Array de productos
    items: [],
    email: "",
    name: "",
    phone: ""
});

export default ApiContext;

