import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tips',
  imports: [MatCardModule, CarouselModule],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css',
  standalone: true
})
export class TipsComponent {}