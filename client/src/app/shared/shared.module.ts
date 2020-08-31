import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {PagingHeaderComponent} from './components/paging-header/paging-header.component';
import {PagerComponent} from './components/pager/pager.component';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  declarations: [
    PagingHeaderComponent,
    PagerComponent
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule
  ]
})
export class SharedModule { }
