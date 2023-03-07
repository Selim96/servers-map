import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './stylesheet/shared.scss';
import "modern-normalize";

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);


