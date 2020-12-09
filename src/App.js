import { HashRouter as Router, Route } from "react-router-dom";
import Dashboard from '../src/pages/dashboard';
import Dashboard2 from '../src/pages/dashboard2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route path="/dashboard2" component={Dashboard2} />
    </Router>
  );
}

export default App;
