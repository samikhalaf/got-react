// React Router DOM dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing the shared components
import Header from './shared/components/Header/Header';

// Importing the pages
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HousesPage from './pages/HousesPage/HousesPage';
import HomePage from './pages/HomePage/HomePage';
import ChronologyPage from './pages/ChronologyPage/ChronologyPage';

// Stylesheet
import './App.scss';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import HousesDetailPage from './pages/HousesDetailPage/HousesDetailPage';

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Switch>
          <Route path="/characters">
            <CharactersPage />
          </Route>

          <Route path="/character/:character" component={CharacterDetailPage}>
            <CharacterDetailPage />
          </Route>

          <Route path="/houses">
            <HousesPage />
          </Route>

          <Route path="/house/:house" component={HousesDetailPage}>
            <HousesDetailPage />
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
