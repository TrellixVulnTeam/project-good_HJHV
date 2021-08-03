import { connect } from "react-redux";
import Auction from './Auction'

const AuctionList = (props) => {
    return (<div>
        {props.arr.map((item) => {
            return (<Auction key={parseInt(item.code)} item={item}/>)
        })}
    </div>);
}
const mapStateToProps = (state) => {
    return { arr: state.main.auctionsList }
}

export default connect(mapStateToProps, {})(AuctionList);