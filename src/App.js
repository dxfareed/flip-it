import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom/cjs/react-router-dom.min';
import Nav from "./nav";
import HomeNav from "./homeNav";
import useWalletVal from "./valWallet";
function App() {
  const {valui,setValui}=useWalletVal()
  return (
    <Router>
      <div>
        <div className='desktopview'>
          <div>ooopzz!, not available for desktop :(</div>
          <div>Desktop version coming soon</div>
        </div>
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
          </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
