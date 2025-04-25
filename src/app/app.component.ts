// src/app/app.component.ts
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router"; // Or alternatively RouterModule
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [NavigationComponent, RouterOutlet],
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {}
