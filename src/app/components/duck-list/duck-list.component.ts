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
    <!-- #17 Template-driven Forms -->
    <!-- Simple forms using Angular's form directives -->
    <div class="search-container">
      <!-- The next line "<input [(ngModel..." demonstrates lots of concepts -->

      <!-- #04e #17b Two-way Data Binding with [(ngModel)] -->
      <!-- [(ngModel)] combines property binding [ngModel] and event binding (ngModelChange) -->
      <!-- This syncs the input value with the component property automatically in both directions -->

      <!-- #05 Template Reference Variables for Accessing DOM Elements -->
      <!-- #05a Creating a reference with #variable syntax (e.g., #searchInput below) -->
      <!-- This creates a reference to the input DOM element that can be accessed in the component class -->

      <!-- #17a Form Setup -->
      <!-- FormsModule provides the ngModel directive for two-way data binding -->
      <!-- The input element becomes a form control when ngModel is applied -->

      <!-- #17c Form Events -->
      <!-- (input) event triggers the filterDucks method on every keystroke -->
      <input [(ngModel)]="searchTerm" placeholder="Search ducks..." (input)="filterDucks()" #searchInput />
    </div>

    <div *ngIf="favoriteDucks.length > 0" class="favorites">
      <h3>Favorite Ducks</h3>
      <p>{{ getFavoriteDuckNames() }}</p>
    </div>

    <div class="duck-list">
      <!-- #06 Directives Overview - See also in duck.component.ts -->
      <!-- #06c More Structural Directives -->
      <!-- *ngFor iterates over collections -->

      <!-- #10 Component Communication -->
      <!-- #10a (Parent to Child) - Property Binding -->
      <!-- [duck]="duck" passes data from parent to child component -->
      <!-- #10b Child to Parent - Event Binding -->
      <!-- (favorite) sets up event listening for child-emitted events -->
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
  // #14 Component Lifecycle
  // Components have lifecycle hooks that run at specific times

  ducks: Duck[] = [];
  filteredDucks: Duck[] = [];
  favoriteDucks: Duck[] = []; // Ensure this is always initialized to an empty array
  searchTerm = "";

  // #05b @ViewChild Decorator
  // ViewChild gives direct access to elements in the template
  // It provides access to elements/components with template reference variables
  // Here we access the input element marked with #searchInput
  @ViewChild("searchInput") searchInput!: ElementRef;

  // #13 Dependency Injection in Angular for our custom service
  // #13a Constructor Injection
  // Angular's DI system automatically provides instances of services
  constructor(private duckService: DuckService) {
    // #13b Service Instances
    // Each component gets its own instance of injected dependencies
    // However, services with providedIn: 'root' are singleton instances
  }

  // #14a Lifecycle Hook ngOnInit runs after the component is initialized
  ngOnInit() {
    // #13c Using Injected Services
    // Get data from the service when component initializes
    this.ducks = this.duckService.getDucks();
    this.filteredDucks = this.ducks;
  }

  // #14b AfterViewInit Lifecycle Hook
  // Runs after the component's view is fully initialized
  // #05c Using Template Reference Variables in Code
  // We can programmatically interact with the referenced element
  ngAfterViewInit() {
    // Now we can safely access view elements like searchInput
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 0);
  }

  getGridRow(index: number) {
    return Math.floor(index / 3) + 1;
  }

  // #10c (Child to Parent) - Event Handling from Child Components
  addToFavorites(duck: Duck) {
    // Check if already favorited
    if (!this.favoriteDucks.some((d) => d.id === duck.id)) {
      this.favoriteDucks.push(duck);
    } else {
      this.favoriteDucks = this.favoriteDucks.filter((d) => d.id !== duck.id);
    }
  }

  // #17d Form Handling Logic
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
