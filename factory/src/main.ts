import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

export function theme(){
  const hours =new Date().getHours();
  return hours >=18 ? 'dark-theme' : 'light-theme'
}

bootstrapApplication(App,{ providers:[{
  provide:'THEME',
  useFactory:theme
}]
}
)
