//import React from 'react'
//import { useState } from 'react';
//@ts-ignore
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Nav from "./nav";
import HomeNav from "./homeNav";
import useWalletVal from "./valWallet";
//import { num } from './valInput';
function Appsub() {
  const {valui,setValui}=useWalletVal()
  //console.log("sucessfully imported")
  return (
    <Router basename="/flip-it">
      <div>
        <div className='desktopview'>
          <div>ooopzz!, not available for desktop :(</div>
          <div>Desktop version coming soon</div>
        </div>
      <div className="flip-Home">
          <Nav/>
          <Switch>
          <Route exact path="/">
          {/*@ts-ignore*/}
          < HomeNav val={valui} setVal={setValui}/>
          </Route>
          <Route path="*">
              <div>
                <div>ohh uhm, this page is not found</div>
                <div>wanna go back ? <Link to="/">Click  here</Link></div>
              </div>
          </Route>
          </Switch>
      </div>
      </div>
    </Router>
  );
}

export default Appsub;
