import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UserSuggestions   from './components/user_suggestions';
import Results   from './components/results';


const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Redirect exact={true} from='/' to='/fb'/>
          <Route  path="/fb/results" component={Results}/>
          <Route  path="/fb" component={UserSuggestions}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
