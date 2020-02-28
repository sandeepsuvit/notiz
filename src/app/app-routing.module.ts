import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'authors',
    loadChildren: () =>
      import('./pages/authors/authors.module').then(m => m.AuthorsModule)
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./pages/tags/tags.module').then(m => m.TagsModule)
  },
  {
    path: 'confirm-subscription',
    loadChildren: () =>
      import('./pages/newsletter-confirm/newsletter-confirm.module').then(
        m => m.NewsletterConfirmModule
      )
  },
  {
    path: '404',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule
      )
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
