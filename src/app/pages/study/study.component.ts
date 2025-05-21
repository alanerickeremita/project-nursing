import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-study',
  imports: [MatCardModule, MatDividerModule, MatListModule],
  templateUrl: './study.component.html',
  styleUrl: './study.component.css',
  standalone: true
})
export class StudyComponent { }
