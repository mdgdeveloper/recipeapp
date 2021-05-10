import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

// Theme for ChakraProvider
import { extendTheme } from '@chakra-ui/react';
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

// Custom values for Extended Theme: will apply for everyone.
const theme = extendTheme({
  fonts:{
    heading: "Montserrat",
    body: "Montserrat",
  },
  background:{
    body: "#f9f8f4",
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});




ReactDOM.render(
  <ApolloProvider client={client}>
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
