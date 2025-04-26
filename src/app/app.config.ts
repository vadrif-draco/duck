import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { DuckService } from "./services/duck.service";
import { routes } from "./app.routes";

// #15 Application Configuration
// #15a Angular's Application Configuration
// The ApplicationConfig interface provides a way to configure app-wide providers
export const appConfig: ApplicationConfig = {
  providers: [
    // #15b Router Provider
    // provideRouter enables the Angular Router functionality
    // by registering necessary services with the dependency injection system
    provideRouter(routes),

    // #15c Service Registration
    // Services can be registered at the application level
    // though typically Injectable({providedIn: 'root'}) is preferred for services
    DuckService,
  ],
};
// Note: This configuration is used in main.ts to bootstrap the application
