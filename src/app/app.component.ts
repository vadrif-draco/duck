import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FancyDuckComponent } from "./components/fancy-duck/fancy-duck.component";
import { CommonModule } from "@angular/common";
import { DuckService } from "./services/duck.service";
import { Duck } from "./interfaces/duck-interface";

// #20 Root Component
// The AppComponent is the main entry point for the Angular application
@Component({
  standalone: true,
  selector: "app-root",
  // #20a Importing Components and Directives
  // Components used in the template must be imported
  imports: [NavigationComponent, RouterOutlet, FancyDuckComponent, CommonModule],
  template: `
    <!-- #20b Application Shell -->
    <!-- The app component typically provides the overall layout structure -->
    <header>
      <h1>Duck Encyclopedia</h1>
      <!-- #20c Navigation Integration -->
      <!-- Including the navigation component for app routing -->
      <app-navigation></app-navigation>
    </header>

    <main>
      <!-- #20d Content Projection Example -->
      <!-- This is just a demo of the FancyDuckComponent with content projection -->
      <div class="featured-duck-container">
        <div *ngIf="showFancyDuck && featuredDuck" class="featured-duck">
          <app-fancy-duck [duck]="featuredDuck">
            <img [src]="featuredDuck.imageUrl" [alt]="featuredDuck.name" width="200" />
            <p #projectedCaption>This is our featured duck of the month!</p>
          </app-fancy-duck>
          <button class="control-btn" (click)="toggleFeaturedDuck()">Hide Featured Duck</button>
        </div>

        <div *ngIf="!showFancyDuck && featuredDuck" class="featured-duck-toggle">
          <button class="control-btn show-btn" (click)="toggleFeaturedDuck()">Show Featured Duck ({{ featuredDuck.name }})</button>
        </div>
      </div>

      <!-- #20e Router Outlet -->
      <!-- RouterOutlet is where components specified in routes will be rendered -->
      <router-outlet></router-outlet>
    </main>

    <footer>
      <p>© 2025 Duck Encyclopedia</p>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: Arial, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
      }

      header {
        text-align: center;
        padding: 1rem;
        background-color: #f0f0f0;
        margin-bottom: 1rem;
      }

      footer {
        text-align: center;
        padding: 1rem;
        margin-top: 2rem;
        border-top: 1px solid #ccc;
      }

      .featured-duck-container {
        margin: 20px 0;
        text-align: center;
      }

      .featured-duck,
      .featured-duck-toggle {
        margin: 20px 0;
        text-align: center;
      }

      .control-btn {
        padding: 8px 16px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
        transition: all 0.2s;
      }

      .control-btn:hover {
        background-color: #e0e0e0;
      }

      .show-btn {
        background-color: #fffde7;
        border: 2px solid #ffeb3b;
        font-weight: bold;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  // #20f Root Component Properties
  title = "Duck Encyclopedia";

  // Featured duck data now fetched from service
  featuredDuck: Duck | undefined;
  showFancyDuck = false;

  // #20g Dependency Injection
  constructor(private duckService: DuckService) {}

  // #20h Lifecycle Hook
  ngOnInit() {
    // Get the featured duck from the service
    this.featuredDuck = this.duckService.getFeaturedDuck();
  }

  toggleFeaturedDuck() {
    this.showFancyDuck = !this.showFancyDuck;
  }
}
