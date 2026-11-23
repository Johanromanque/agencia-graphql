import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client/react';
import './index.css';
import App from './App';
import { apolloClient } from './graphql/client';
import { API_BASE_URL } from './graphql/endpoint';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  return worker.start({
    serviceWorker: {
      url: `${API_BASE_URL}mockServiceWorker.js`,
    },
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </StrictMode>
  );
});
