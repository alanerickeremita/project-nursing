import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cases',
  imports: [MatCardModule, CarouselModule],
  standalone: true,
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css'
})
export class CasesComponent {

}
