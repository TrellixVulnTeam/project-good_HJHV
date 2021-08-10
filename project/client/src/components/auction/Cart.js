import { connect } from "react-redux";
import ProductInCart from './ProductInCart'
import { setCnt } from '../../store/actions/user'
import { Link} from 'react-router-dom'

const Cart = (props) => {
    return (
        <div>
            <h1>Cart</h1>
            <Link to={'/auction'}>Back</Link>{/*לצאת מהסל, חזרה לכל המוצרים*/}
            {props.arr.map((item) => {
                return (<ProductInCart key={parseInt(item.product.code)} item={item} setCount={props.setCnt}/>)
            })}
        </div>);
}
const mapStateToProps = (state) => {
    return {
        arr: state.user.shoppingCart,
    }
}

export default connect(mapStateToProps, {setCnt})(Cart);