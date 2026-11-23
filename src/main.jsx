import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Views/Home.jsx';
import './i18n/config';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <Home />
    </Suspense>
  </React.StrictMode>,
);
