import React from 'react';
import { BrowserRouter as Router, Route, RouteProps } from "react-router-dom";
import './App.css';
import Landing from './pages/Landing';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteProps
) => props.pageComponent;

function App() {
  return (
    <Router>

      <RouterPage path="/" pageComponent={<Landing />} />

    </Router>
  );
}

export default App;