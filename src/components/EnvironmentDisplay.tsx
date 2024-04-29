import React from 'react';

export const EnvironmentDisplay = () => {
  const appEnvironment = import.meta.env.VITE_ENVIRONMENT;
  const appVersion = __APP_VERSION__;

  if (appEnvironment === 'development') {
    return null;
  }

  return (
    <div className="bg-amber-100 rounded w-fit p-4 absolute right-0 m-6">
      <p>
        ENV: {appEnvironment} - VER: {appVersion}
      </p>
    </div>
  );
};
