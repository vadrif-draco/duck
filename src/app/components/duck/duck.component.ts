import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Duck } from "../../interfaces/duck-interface";
import { HighlightDirective } from "../../directives/highlight.directive";
import { TruncatePipe } from "../../pipes/truncate.pipe";

// #03 Angular Components
// Components are the building blocks of Angular applications
// Each component has its own template, styles, and logic
@Component({
  // #03a Component Metadata
  selector: "app-duck-card", // HTML tag used to include this component
  imports: [CommonModule, HighlightDirective, TruncatePipe], // Standalone component imports for required features
  // #03b Inline Template
  // Templates define the component's HTML structure
  // Using backticks (`) allows for multi-line template strings
  template: `
    <!-- #04 Data Binding -->
    <!-- #04a Property Binding with [property]="expression" -->
    <!-- Adding multiple class bindings using ngClass -->
    <div
      class="duck-card"
      [ngClass]="{
        endangered: duck.isEndangered,
        featured: duck.isFeatured
      }"
      (click)="toggleDetails()"
    >
      <!-- #08 Pipes -->
      <!-- #08a Built-in Pipes -->
      <!-- Pipes transform data before displaying it in the template -->
      <small>Added to database: {{ duck.id > 3 ? "2025" : ("2024" | date : "shortDate") }}</small>
      <br />
      <br />

      <!-- #04b Bind to src attribute with image URL from component property -->
      <img [src]="duck.imageUrl" [alt]="duck.name" />

      <!-- #04c Interpolation with {{ expression }} -->
      <h2>{{ duck.name }}</h2>

      <p>Habitat: {{ duck.habitat }}</p>

      <!-- #04d Event Binding -->
      <!-- (event)="handler()" responds to user interactions -->
      <button class="favorite-btn" (click)="favoriteClicked($event)">❤️ Favorite</button>

      <!-- #08b Custom Pipes -->
      <!-- You can create your own pipes for custom data transformations -->
      <p *ngIf="!showDetails">{{ duck.fact | truncate : 30 }}</p>

      <!-- #06 Directives Overview -->
      <!-- #06a Structural Directives -->
      <!-- Structural directives change DOM layout (*ngIf, *ngFor, etc) -->
      <!-- *ngIf conditionally includes/excludes elements from DOM -->
      <div *ngIf="showDetails" class="details">
        <!-- #06b Attribute Directives -->
        <!-- Unlike structural directives, they change the appearance or behavior of an element -->
        <p appHighlight style="white-space: pre-line">{{ duck.fact }}</p>
      </div>
    </div>
  `,
  // #03c Inline Styles
  // Component-specific CSS that won't leak to other parts of the app
  styles: [
    `
      small {
        color: gray;
        font-weight: 100;
      }
      .duck-card {
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem;
        cursor: pointer;
        min-width: 240px;
        max-width: 280px;
        transition: all 0.3s ease;
      }
      .endangered {
        border: 2px solid red;
      }
      .featured {
        background-color: #fffde7; /* Light yellow background for featured duck */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      img {
        width: 200px;
        height: 150px;
        object-fit: cover;
        margin: auto;
        display: block;
      }
      .favorite-btn {
        margin-top: 8px;
        padding: 8px 16px;
        background: linear-gradient(to right, #ff9966, #ff5e62);
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
      }
      .favorite-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .details {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px dashed #ccc;
      }
    `,
  ],
})
export class DuckComponent {
  // #09 Component Properties

  // #09a Input Properties
  // @Input() decorator marks a property to receive data from parent component
  @Input() duck!: Duck; // The '!' is a non-null assertion operator

  // #09b Output Properties
  // @Output() creates a custom event that parent components can listen to
  @Output() favorite = new EventEmitter<Duck>();

  // #09c Component State
  // Properties track the component's internal state
  showDetails = false;

  // #09d Component Methods
  // Methods handle user interactions and other logic
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  // Event handler for favorite button click
  favoriteClicked(event: Event) {
    // Stop event propagation to prevent triggering the card's click event
    event.stopPropagation();
    // #10b Emit the duck object to the parent component
    this.favorite.emit(this.duck);
  }
}
