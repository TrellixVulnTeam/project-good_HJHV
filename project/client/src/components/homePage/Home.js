import React from 'react';
import { connect } from "react-redux";
import { setLogin } from '../../store/actions/home';
import Login from '../login/Login';
import './home.scss';
import { Link, useRouteMatch, Route, Switch } from 'react-router-dom';
import AuctionList from './AuctionList';
import CurrentAuction from '../auction/CurrentAuction';
import Cart from '../auction/Cart';
import Button from '@material-ui/core/Button';
import AuctionList2 from './AuctionList2';

const Home = (props) => {

  return (<div>

    {/* log-out להוסיף כפתור התנתקות */}
    <header>
      <Link to={"/home"}>  <div className="logo" ></div></Link>
      <Button type="button" className="btnLogin btn" onClick={() => { props.setLogin(true); }}>Login</Button>
      <p>Back to<br />School</p>
      <Button type="button" className="btnMoreInfo btn">More Info</Button>
      {props.loginIsOpen == true ? (<Login />) : null}

    </header>

    <AuctionList />
    <footer></footer>
  </div>
  );
}
const mapStateToProps = state => {
  return { loginIsOpen: state.user.loginIsOpen };
}
export default connect(mapStateToProps, { setLogin })(Home);
