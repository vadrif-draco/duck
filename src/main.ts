// #19 Application Bootstrap
// This is the entry point that starts the entire Angular application
import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";

// #19a bootstrapApplication
// The modern way to bootstrap standalone Angular applications

// #19b Application-wide Providers (in appConfig or add directly here; same as routes)
// Services and configurations available throughout the app
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
