// React Router DOM dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing the shared components
import NavBar from './shared/components/NavBar/NavBar';
import Footer from './shared/components/Footer/Footer';

// Importing the pages
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HousesPage from './pages/HousesPage/HousesPage';
import HomePage from './pages/HomePage/HomePage';

// Stylesheet
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/characters">
            <CharactersPage />
          </Route>

          <Route path="/houses">
            <HousesPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
