import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import 'ids-enterprise-wc/enterprise-wc.js';
import { MainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  title = 'ids-popup-test';
}
