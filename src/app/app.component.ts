import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatAnchor, MatButton, MatFabButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatAnchor, MatDivider, MatIcon, MatFabButton,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calendar';
}
