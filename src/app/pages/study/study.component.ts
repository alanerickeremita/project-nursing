import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-study',
  imports: [MatCardModule],
  templateUrl: './study.component.html',
  styleUrl: './study.component.css',
  standalone: true
})
export class StudyComponent {}
