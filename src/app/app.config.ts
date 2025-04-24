import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { DuckService } from "./services/duck.service";
import { routes } from "./app.routes";

// XXX: Where do we enable routing? (annoying question ngl; may not consider)
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    DuckService,
  ],
};
