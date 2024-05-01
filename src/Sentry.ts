import * as Sentry from '@sentry/react';

export function initSentry() {
  console.log('before sentry init');
  console.log('VITE_ENV_NAME:', import.meta.env.VITE_ENVIRONMENT);
  if (import.meta.env.VITE_ENVIRONMENT !== 'production') {
    return;
  }
  console.log('sentry init');
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [],
  });
}
