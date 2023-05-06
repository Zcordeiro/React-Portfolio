import React from 'react';
import DisplayPage from './pages/DisplayPage';
import Stars from './components/Stars';
import Footer from './components/Footer';
import * as te from 'tw-elements';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './pages/Projects';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
  <ApolloProvider client={client}>
      <div className="body">
        {/* <DisplayPage /> */}
        <Projects />
        <Stars />
        <Footer />
      </div>
    </ApolloProvider>
    </>
  );
}

export default App;
