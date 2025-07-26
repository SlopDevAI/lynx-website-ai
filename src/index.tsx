import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';

import { homePage as HomePage } from './App.jsx';
import { routedPage as RoutedPage } from './pages/routed/App.jsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/routed/" element={<RoutedPage />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
