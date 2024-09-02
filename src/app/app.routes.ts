import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
    title: 'Alek - Aleksei Polechin - Front-end developer with graphic design skills',
  },
  {
    path: 'cv',
    component: CvComponent,
  }
];
