import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

// #16 Navigation Component
// This component demonstrates routing in Angular applications
@Component({
  // #16a Standalone Component
  // Modern Angular uses standalone components instead of the NgModule system
  standalone: true,
  selector: "app-navigation",
  // #16b Importing RouterLink
  // RouterLink is a directive that turns elements into navigation links
  imports: [RouterLink],
  template: `
    <nav>
      <!-- #16c RouterLink Directive -->
      <!-- Instead of <a href="/">, we use routerLink to navigate -->
      <!-- This prevents full page reloads and enables SPA navigation -->
      <a routerLink="/">Home</a>
      <a routerLink="/about">About Ducks</a>
    </nav>
  `,
  styles: [
    `
      nav {
        background: #f0f0f0;
        padding: 1rem;
      }
      a {
        margin-right: 1rem;
        text-decoration: none;
        color: #333;
      }
    `,
  ],
})
export class NavigationComponent {}
