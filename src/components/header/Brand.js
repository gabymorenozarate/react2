import brand from "../../img/brand.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Todo PC" title="Todo Pc"></img>
        </Link>
    )
}

export default Brand;