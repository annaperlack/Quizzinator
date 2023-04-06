import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
            <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
               <p>
                 THIS IS A PAGE
               </p>
            </header>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
