// src/app/auth/auth.config.ts
import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '5a4ffdde33dc6c636573b627',
  CLIENT_DOMAIN: 'https://pixelengine-auth.auth0.com/',
  AUDIENCE: 'http://localhost:8083/api', // likely http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};