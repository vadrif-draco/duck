import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { DuckService } from "../../services/duck.service";
import { Duck } from "../../interfaces/duck-interface";
import { DuckComponent } from "../duck/duck.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// #09 Container Components
// Container components often fetch data and pass it down to presentational components
@Component({
  selector: "app-duck-list",
  // #09a Standalone Components
  // Modern Angular uses standalone components instead of NgModules for imports
  imports: [DuckComponent, CommonModule, FormsModule],
  template: `
    <!-- #18 Template-driven Forms -->
    <!-- Simple forms using Angular's form directives -->
    <div class="search-container">
      <!-- #18a NgModel two-way binding -->
      <!-- [(ngModel)] combines property binding and event binding -->
      <input [(ngModel)]="searchTerm" placeholder="Search ducks..." (input)="filterDucks()" #searchInput />
    </div>

    <!-- #10c Component Communication (Parent to Child) -->
    <!-- Using structural directives with component communication -->
    <div *ngIf="favoriteDucks.length > 0" class="favorites">
      <h3>Favorite Ducks</h3>
      <p>{{ getFavoriteDuckNames() }}</p>
    </div>

    <div class="duck-list">
      <!-- #10 Structural Directives and Binding Together -->
      <!-- #10a *ngFor iterates over collections -->
      <!-- #10b [ngStyle] applies dynamic styles -->
      <!-- #10c [duck] passes data to child components -->
      <!-- #10d (favorite) listens for events from child components -->
      <app-duck-card
        [ngStyle]="{ 'grid-row': getGridRow(i) }"
        *ngFor="let duck of filteredDucks; index as i"
        [duck]="duck"
        (favorite)="addToFavorites($event)"
      >
      </app-duck-card>
    </div>
  `,
  styles: [
    `
      .duck-list {
        display: grid;
        flex-wrap: wrap;
        justify-content: center;
      }

      .search-container {
        text-align: center;
        margin-bottom: 20px;
      }

      input {
        padding: 8px;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      .favorites {
        margin: 20px;
        padding: 10px;
        background-color: #f8f8f8;
        border-radius: 4px;
      }
    `,
  ],
})
export class DuckListComponent implements OnInit, AfterViewInit {
  // #11 Component Lifecycle
  // Components have lifecycle hooks that run at specific times

  // #11a Component Properties
  ducks: Duck[] = [];
  filteredDucks: Duck[] = [];
  favoriteDucks: Duck[] = []; // Ensure this is always initialized to an empty array
  searchTerm = "";

  // #12 ViewChild Decorator
  // #12a Accessing DOM Elements
  // ViewChild gives direct access to elements in the template
  @ViewChild("searchInput") searchInput!: ElementRef;

  // #11b Dependency Injection
  // #13 Dependency Injection in Angular
  // #13a Constructor Injection
  // Angular's DI system automatically provides instances of services
  constructor(private duckService: DuckService) {
    // #13b Service Instances
    // Each component gets its own instance of injected dependencies
    // However, services with providedIn: 'root' are singleton instances
  }

  // #11c Lifecycle Hooks
  // ngOnInit runs after the component is initialized
  ngOnInit() {
    // #13c Using Injected Services
    // Get data from the service when component initializes
    this.ducks = this.duckService.getDucks();
    this.filteredDucks = this.ducks;
  }

  // #11d AfterViewInit Lifecycle Hook
  // Runs after the component's view is fully initialized
  ngAfterViewInit() {
    // Now we can safely access view elements like searchInput
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 0);
  }

  // #11e Component Methods
  // Custom logic for component functionality
  getGridRow(index: number) {
    return Math.floor(index / 3) + 1;
  }

  // #14 Component Communication (Child to Parent)
  // #14a Event Handling from Child Components
  addToFavorites(duck: Duck) {
    // Check if already favorited
    if (!this.favoriteDucks.some((d) => d.id === duck.id)) {
      this.favoriteDucks.push(duck);
    } else {
      this.favoriteDucks = this.favoriteDucks.filter((d) => d.id !== duck.id);
    }
  }

  // #18b Form Handling Logic
  // Filter ducks based on search term
  filterDucks() {
    if (!this.searchTerm.trim()) {
      this.filteredDucks = this.ducks;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredDucks = this.ducks.filter((duck) => duck.name.toLowerCase().includes(term) || duck.habitat.toLowerCase().includes(term));
    }
  }

  getFavoriteDuckNames(): string {
    return this.favoriteDucks
      .filter((duck) => !!duck && !!duck.name)
      .map((duck) => duck.name)
      .join(", ");
  }
}
