import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '@components/components.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostModule } from '@pages/blog-post/blog-post.module';
import { NewsletterSignupModule } from '@components/newsletter-signup/newsletter-signup.module';
import { TagsViewModule } from '@components/tags-view/tags-view.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    IonicModule,
    ComponentsModule,
    BlogPostModule,
    NewsletterSignupModule,
    TagsViewModule,
  ],
})
export class BlogModule {}
