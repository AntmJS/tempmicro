import React from 'react'
import { AppRouter, AppRoute } from '@ice/stark'

function App() {
  return (
    <AppRouter>
      <AppRoute path="*" entry="//localhost:10086" />
    </AppRouter>
  );
}

export default App;
