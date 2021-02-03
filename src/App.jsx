// React Router DOM dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing the shared components
import NavBar from './shared/components/NavBar/NavBar';

// Importing the pages
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HousesPage from './pages/HousesPage/HousesPage';
import HomePage from './pages/HomePage/HomePage';
import ChronologyPage from './pages/ChronologyPage/ChronologyPage';

// Stylesheet
import './App.scss';
import DetailCharacter from './pages/DetailCharacter/DetailCharacter';

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/characters">
            <CharactersPage />
          </Route>

          <Route path="/character/:character" component={DetailCharacter}>
            <DetailCharacter />
          </Route>

          <Route path="/houses">
            <HousesPage />
          </Route>

          <Route path="/chronology">
            <ChronologyPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
