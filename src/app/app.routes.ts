import { Routes } from '@angular/router';

import { FirstGrading } from './first-grading/first-grading';
import { Midterm } from './midterm/midterm';
import { Finals } from './finals/finals';

export const routes: Routes = [
  {path:"", component: FirstGrading},
  {path:"first-grading", component: FirstGrading},
  {path:"midterms", component: Midterm},
  {path:"finals", component: Finals},
];
