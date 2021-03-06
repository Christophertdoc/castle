import React from "react";
import Header from "./Header";
import { useAuth0 } from "./Auth/react-auth0-spa";
import { AUTH_CONFIG } from "./Auth/auth0-variables";
import Data from "./Data"
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost"

const App = ({ idToken }) => {

    console.log('idToken', idToken)

  const { loading, logout } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  // const httpLink = new HttpLink({
  //     uri: "https://castle-hasura.herokuapp.com/v1/graphql",
  //     headers: idToken, 
  // })

  // const httpLink = new HttpLink({
  //     uri: "https://castle-hasura.herokuapp.com/v1/graphql",
  //     authorization: idToken ? `Bearer ${idToken}` : "",
  // })

  const httpLink = new HttpLink({
      uri: "https://castle-hasura.herokuapp.com/v1/graphql",
      headers: {
          authorization: idToken ? `Bearer ${idToken}` : "",
      }
  })

  const client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Header logoutHandler={logout} />
        <Data />
    </ApolloProvider>
  );

};

export default App;

