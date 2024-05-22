import { createRoot } from 'react-dom/client';
import { App } from 'app';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

const element = document.getElementById('root') as HTMLDivElement;
const root = createRoot(element);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
