import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Nav from "./nav";
import HomeNav from "./homeNav";
import useWalletVal from "./valWallet";
function App() {
  const {valui,setValui}=useWalletVal()
  return (
    <Router basename="/flip-it">
      <div>
        {/*<div className='desktopview'>
          <div>ooopzz!, not available for desktop :(</div>
          <div>Desktop version coming soon</div>
        </div>*/}
      <div className="flip-Home">
          <Nav/>
          <Switch>
          <Route exact path="/"><HomeNav val={valui} setVal={setValui}/></Route>
          <Route exact path="/external">
            <div className='external'>
              <div>wallet feature coming to Later version</div>
              <Link to="/">
                &lt;Back to game
              </Link> 
            </div>
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

export default App;
