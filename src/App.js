import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album'

// <header>
//   <nav>
//     <Link to='/'>Landing</Link>
//     <Link to='/library'>Library</Link>
//   </nav>
//   <h1>Bloc Jams</h1>
// </header>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Bloc Jams</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <Link className="mdl-navigation__link" to='/'>Landing</Link>
                <Link className="mdl-navigation__link" to='/library'>Library</Link>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Title</span>
            <nav className="mdl-navigation">
              <Link className="mdl-navigation__link" to='/'>Landing</Link>
              <Link className="mdl-navigation__link" to='/library'>Library</Link>
            </nav>
          </div>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
