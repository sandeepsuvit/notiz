import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewChecked
} from '@angular/core';
import { HighlightService } from '@services/highlight.service';
import { SeoService } from '@services/seo.service';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit, AfterViewChecked {
  constructor(
    private scully: ScullyRoutesService,
    private highlightService: HighlightService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.scully
      .getCurrent()
      .pipe(
        first(),
        tap(route =>
          this.seo.generateTags({
            title: route.title,
            description: route.description,
            slug: route.slug
          })
        )
      )
      .subscribe();
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}