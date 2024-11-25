import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifscardComponent } from './components/gifscard/gifscard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CardListComponent,
    GifscardComponent,
    HomePageComponent,
    SearchboxComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
