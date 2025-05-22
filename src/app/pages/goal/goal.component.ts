import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-goal',
  imports: [MatCardModule, CarouselModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css',
  standalone: true
})
export class GoalComponent {

}
