import { connect } from "react-redux";
import OneAuction from './OneAuction';
import { setCurrentAuction } from '../../store/actions/currentAuction'
import { Link } from 'react-router-dom';

const AuctionList = (props) => {
    return (<>
        {props.arr.map((item) => {
            return (
                <Link
                 key={parseInt(item.code)}
                 onClick={props.currentUser?() =>{props.setCurrentAuction(item.code)}:null}
                    // to={`/auction:${item.code}`}> לא צריך אבל יותר יפה
                 to={props.currentUser?`/auction`:'#'}>
                 <OneAuction key={parseInt(item.code)} item={item} />
                </Link>
            )
        })}
    </>
    );
}
const mapStateToProps = (state) => {
    return {
        arr: state.main.auctionsList,
        currentUser:state.user.currentUser
    }
}

export default connect(mapStateToProps, { setCurrentAuction })(AuctionList);


