import { Component } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,

})
export class AppComponent {
  title = 'Nursing Tips';
}
