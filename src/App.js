import './App.css';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import DMNeditorComponent from './components/bpm-app/editors/DMNeditorComponent';
import DynamicFormMain from './components/dynamic-form-app/MainComponent';
import SavedFormComponent from './components/dynamic-form-app/savedFormComponent';
import Error404 from './components/Error404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/editors/dmn" component={DMNeditorComponent}/>
        <Route path="/dynamic-form" component={DynamicFormMain}/>
        <Route path="/saved-form" component={SavedFormComponent}/>
        <Route path="*" component={Error404}/>
      </Switch>
    </Router>
  );
}

export default App;
