import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import ProfessorDashboard from '../pages/ProfessorDashboard';
import Correct from '../pages/ProfessorDashboard/Correct';
import Adjusted from '../pages/Adjusted';
import Students from '../pages/Students';
import AddStudent from '../pages/AddStudent';

import StudentDashboard from '../pages/StudentDashboard';
import Send from '../pages/Send';
import About from '../pages/About';

import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route
        path="/professor-dashboard"
        exact
        component={ProfessorDashboard}
        isPrivate
        isProvider
      />
      <Route
        path="/professor-dashboard/correct"
        component={Correct}
        isCorrect
        isPrivate
        isProvider
      />
      <Route path="/adjusted" component={Adjusted} isPrivate isProvider />
      <Route path="/students" component={Students} isPrivate isProvider />
      <Route path="/add-student" component={AddStudent} isPrivate isProvider />

      <Route path="/student-dashboard" component={StudentDashboard} isPrivate />
      <Route path="/send" component={Send} isPrivate />
      <Route path="/about" component={About} isPublic />

      <Route path="/profile" component={Profile} isPrivate isBoth />
    </Switch>
  );
}
