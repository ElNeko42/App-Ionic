import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'newApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Http: {
    },
  },
};

export default config;
