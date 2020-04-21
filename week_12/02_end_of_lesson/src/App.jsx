import React from 'react';

import AppRouter from './routers/AppRouter';
import { BlogEntriesProvider } from './store/BlogEntriesContext';

const App = () => (
  <BlogEntriesProvider>
    <AppRouter />
  </BlogEntriesProvider>
);
export default App;
