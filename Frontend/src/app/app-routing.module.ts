import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesPageModule)
  },
  {
    path: 'pages/tabs/tabs',
    loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
