import {Link, useParams} from "react-router-dom"
import UserApi from "../../Components/UserApi"




const ViewPurchase = (props) =>{
    const value = useParams();
    const usuario = UserApi();
   if (usuario!==undefined) {
    usuario.map(x=>console.log(x.id))
   }
return(
    <div>
        <h1>{value.purchaseId}</h1>
    </div>
)

}
export default ViewPurchase;