// src/app/app.component.ts
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router"; // Add this
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  standalone: true,
  selector: "app-root",
  // XXX: What is the purpose of imports? What can I import? (e.g. built-in components like RouterOutlet or custom components like NavigationComponent)
  imports: [NavigationComponent, RouterOutlet],
  template: `
    <!-- XXX: Where is this tagname associated with the navigation component? -->
    <app-navigation></app-navigation>
    <!-- XXX: Nani tf is router-outlet? -->
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
