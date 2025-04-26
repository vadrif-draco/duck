import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

// #13 Navigation Component using router provider (no injection though!)
// This component demonstrates routing in Angular applications
@Component({
  standalone: true,
  selector: "app-navigation",
  // #13a Importing RouterLink
  // RouterLink is a directive that turns elements into navigation links
  imports: [RouterLink],
  template: `
    <nav>
      <!-- #13b RouterLink Directive -->
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
