import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { DuckService } from "./services/duck.service";
import { routes } from "./app.routes";

// #12 Application Configuration
// #12a Angular's Application Configuration
// The ApplicationConfig interface provides a way to configure app-wide providers
export const appConfig: ApplicationConfig = {
  providers: [
    // #12b Router Provider
    // provideRouter enables the Angular Router functionality
    // by registering necessary services with the dependency injection system
    provideRouter(routes),

    // #12c Service Registration
    // Services can be registered at the application level
    // though typically Injectable({providedIn: 'root'}) is preferred for services
    DuckService,
  ],
};
// Note: This configuration is used in main.ts to bootstrap the application
