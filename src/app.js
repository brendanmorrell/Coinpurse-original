import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
  <div>
    <p>This is my dashboard component</p>
  </div>
);


const AddExpensePage = () => (
  <div>
    <p>This is my add expense component</p>
  </div>
);
const EditExpensePage = () => (
  <div>
    <p>This is my EditExpenseComponent</p>
  </div>
);
const HelpPage = () => (
  <div>
    <p>This is my help page</p>
  </div>
);
const NotFoundPage = () => (
  <div>
    <h2>Error 404! Page not found!</h2>
    {/*<Link to='/'>Go Home</Link> Link is a component that makes a client side routed link instead of causing a full-page refresh, which would happen if you used a normal link or typed the address into the browser*/}
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName="is-active" exact={true}>Dashboard</NavLink>{/*NavLink has a bunch of different props that allow you to manipulate the link in cool ways*/}
    <NavLink to='/create' activeClassName="is-active" exact={true}>Create Expense</NavLink>
    <NavLink to='/edit' activeClassName="is-active" exact={true}>Edit Expense</NavLink>
    <NavLink to='/help' activeClassName="is-active" exact={true}>Help</NavLink>
  </header>
);

//reactrouterdom syntax is a little strange so we immediately define a jsx tree to define the router configuration based off the current url
const routes = (
  <BrowserRouter>
    <div>{/*browser router only handles one child route, so you need to wrap/hide them in a div.*/}
    <Header />{/*placing an element prior to switch will make it display on every page*/}
    <Switch>{/* Switch is like a div in terms of browserrouter taking a single chile. It is a componenet that goes through each componenet to see if there is a url that matches it. switch looks through the list of routes, and stops when it finds the correct one. Thus, if it never finds one, it eventually ends up at the error page we have set up with no path which thus matches everything, and it will match with this rendering our error page*/}
      <Route path='/' component={ExpenseDashboardPage} exact={true} />{/*set the path for the url you want to use for each route and tell what component you want to render for that url. you need to set exact to true, otherwise everything that matches any part of the url will load, so when you load /create it will also load / since that is contained within /create*/}
      <Route path='/create' component={AddExpensePage} exact={true} />{/*when setting up your routes, you want it to run client side, not have a server request, so you need to tweak webpack config server to send back index.html for all routes and not look for an actual page that exists at this address, since it doesn,t and will actually just be rendered through index.html again. you want react router to figure out what to show to the screen, not the default server action*/}
      <Route path='/edit' component={EditExpensePage} exact={true} />
      <Route path='/help' component={HelpPage} exact={true}/>
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>
);

const rootApp = document.getElementById('app');
ReactDOM.render(routes, rootApp);
