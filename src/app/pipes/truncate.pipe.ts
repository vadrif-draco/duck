import { Pipe, PipeTransform } from "@angular/core";

// #16 Custom Pipes
// #16a Creating Custom Pipes
// Pipes transform displayed values within a template
@Pipe({
  name: "truncate",
  // Standalone flag for modern Angular
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  // #16b PipeTransform Interface
  // All pipes must implement this interface with a transform method

  // #16c Transform Method
  // Takes the input value and optional arguments, returns the transformed value
  transform(value: string, limit: number = 100): string {
    if (!value) return "";

    // If the string length is less than the limit, return it unchanged
    if (value.length <= limit) {
      return value;
    }

    // Otherwise, truncate and add ellipsis
    return value.substring(0, limit) + "...";
  }
}
