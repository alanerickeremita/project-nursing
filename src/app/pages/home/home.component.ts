import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GoalComponent } from "../goal/goal.component";
import { AboutComponent } from "../about/about.component";
import { TipsComponent } from "../tips/tips.component";
import { StudyComponent } from "../study/study.component";
import { CasesComponent } from "../cases/cases.component";
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, GoalComponent, AboutComponent, TipsComponent, StudyComponent, CasesComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
