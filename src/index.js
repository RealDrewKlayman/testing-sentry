import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import SentryRRWeb from "@sentry/rrweb";
import { ReportingObserver as ReportingObserverIntegration,RewriteFrames, ExtraErrorData as ExtraErrorDataIntegration } from "@sentry/integrations";

Sentry.init({
  dsn: "https://1a4a34591e3a46b0840cc31e566e3e20@o528804.ingest.sentry.io/5646392",
  integrations: [new Integrations.BrowserTracing(), new RewriteFrames(), new SentryRRWeb(), new ReportingObserverIntegration(), new ExtraErrorDataIntegration(), ],
  tracesSampleRate: 1.0,
  release: '1.0.0',
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
