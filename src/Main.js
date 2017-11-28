import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Plan from './Plan'
import Courses from './Courses'
import Registration from './Registration'
import Audit from './Audit'
import Adviser from './Adviser'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/plan' component={Plan}/>
      <Route path='/courses' component={Courses}/>
      <Route path='/registration' component={Registration}/>
      <Route path='/audit' component={Audit}/>
      <Route path='/adviser' component={Adviser}/>
    </Switch>
  </main>
)

export default Main
