import React from 'react';
import  {
    InavItem,
}
from '../../static/navContent';
import {
    Route,
    Switch,
} from 'react-router-dom';

const AuthRoutes = (isLoggedIn:boolean, globalNav: InavItem[]) => {
  if(!isLoggedIn) {
    return ( 
        <Switch>
            {
            globalNav.map((navItem:  InavItem, index) =>  {
                    return (
            <Route
            exact
            path={navItem.routeProps.path}
            component={navItem.routeProps.component}
            key={index}
            >
            </Route>
                    );
                } )
  }
        </Switch>
    )
  }  else{

  }
}

export default AuthRoutes
