import { Component, OnInit } from "@angular/core";
import { DuckService } from "../../services/duck.service";
import { Duck } from "../../interfaces/duck-interface";
import { DuckComponent } from "../duck/duck.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-duck-list",
  imports: [DuckComponent, CommonModule],
  template: `
    <div class="duck-list">
      <!-- XXX: Change the selector name and show the error and ask what is the error saying and how2fix -->
      <app-duck-card *ngFor="let duck of ducks" [duck]="duck"></app-duck-card>
    </div>
  `,
  styles: [
    `
      .duck-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `,
  ],
})
export class DuckListComponent implements OnInit {
  ducks: Duck[] = [];

  constructor(private duckService: DuckService) {}

  ngOnInit() {
    this.ducks = this.duckService.getDucks();
  }
}
