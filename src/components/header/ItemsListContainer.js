import { Link } from "react-router-dom";
import {getFirestore, gFetch } from "firebase/firestore";
import fetchSimultion from "../../utils/fetchSimulation";
const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/procesador"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/placa madre">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/fuente">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/placa de video">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

