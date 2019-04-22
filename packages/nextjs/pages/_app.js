import App, { Container } from 'next/app';
import Router from 'next/router';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { compose } from 'ramda';
import { withAuthenticator } from 'aws-amplify-react';
import withApolloClient from '../lib/withApolloClient';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default compose(
  withAuthenticator,
  withApolloClient,
)(MyApp);
