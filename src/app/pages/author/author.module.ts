import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '@components/components.module';
import { AuthorRoutingModule } from './author-routing.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NewsletterSignupModule } from '@components/newsletter-signup/newsletter-signup.module';
import { BreadcrumbModule } from '@components/breadcrumb/breadcrumb.module';
import { TagsViewModule } from '@components/tags-view/tags-view.module';

@NgModule({
  declarations: [AuthorComponent],
  imports: [
    CommonModule,
    IonicModule,
    AuthorRoutingModule,
    ComponentsModule,
    ScullyLibModule,
    NewsletterSignupModule,
    BreadcrumbModule,
    TagsViewModule,
  ],
})
export class AuthorModule {}
