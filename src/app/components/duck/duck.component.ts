import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Duck } from "../../interfaces/duck-interface";

@Component({
  selector: "app-duck-card",
  imports: [CommonModule],
  template: `
    <div class="duck-card" [ngClass]="{ endangered: duck.isEndangered }" (click)="toggleDetails()">
      <img [src]="duck.imageUrl" [alt]="duck.name" />
      <h2>{{ duck.name }}</h2>
      <p>Habitat: {{ duck.habitat }}</p>
      <div *ngIf="showDetails" class="details">
        <p>{{ duck.fact }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .duck-card {
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem;
        cursor: pointer;
      }
      .endangered {
        border: 2px solid red;
      }
      img {
        width: 200px;
        height: 150px;
        object-fit: cover;
      }
    `,
  ],
})
export class DuckComponent {
  // XXX: What does this '!' mean? Is it a type assertion or a non-null assertion? What is the difference between them?
  @Input() duck!: Duck;
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
