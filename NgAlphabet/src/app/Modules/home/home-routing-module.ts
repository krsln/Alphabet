import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Home} from './components/home/home';

const routes: Routes = [
  // {path: '', redirectTo: 'Home'},
  {
    path: '', data: {breadcrumb: 'Alphabet'},
    children: [
      {path: '', data: {breadcrumb: 'Home'}, component: Home},
      {path: ':Name', data: {breadcrumb: 'Home'}, component: Home}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
