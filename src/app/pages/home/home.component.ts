import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GoalComponent } from "../goal/goal.component";
import { AboutComponent } from "../about/about.component";
import { TipsComponent } from "../tips/tips.component";
import { PorposeComponent } from "../porpose/porpose.component";
import { StudyComponent } from "../study/study.component";
import { CasesComponent } from "../cases/cases.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, GoalComponent, AboutComponent, TipsComponent, PorposeComponent, StudyComponent, CasesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
