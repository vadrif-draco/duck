import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

// #17 Feature Component
// This component demonstrates a simple feature component with routing
@Component({
  // #17a Standalone Component Configuration
  // Standalone components are self-contained and don't require an NgModule
  standalone: true,
  // #17b Component Dependencies
  // RouterLink is imported for navigation functionality
  imports: [RouterLink], // XXX: <--- The culprit
  selector: "app-about",
  template: `
    <h2>About Ducks</h2>
    <p>Ducks are amazing birds found worldwide!</p>

    <!-- #17c Navigation with RouterLink -->
    <!-- Demonstrates programmatic navigation back to the home page -->
    <button routerLink="/">Back to Duck List</button>
  `,
})
export class AboutComponent {}
