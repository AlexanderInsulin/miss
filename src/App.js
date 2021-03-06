import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={FavoritesPage}/>
      <Footer />
    </div>
  </Router>
);

export default App;
