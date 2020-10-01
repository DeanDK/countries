import { ApolloProvider } from "@apollo/react-hooks"

import { createApolloClient } from "../utils/createApolloClient"

import "../styles/globals.css"

function App({ Component, pageProps }) {
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
