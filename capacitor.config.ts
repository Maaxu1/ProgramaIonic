import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.iti.g22',
  appName: 'AppITI',
  webDir: 'www',
  "plugins": {
    CapacitorHttp: {
      enabled: true
    },
    "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  }
};

export default config;
