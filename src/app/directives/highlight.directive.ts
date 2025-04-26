import { Directive, ElementRef, HostListener, Input } from "@angular/core";

// #15 Custom Directives
// #15a Creating Attribute Directives
// Directives allow you to attach custom behavior to elements in the DOM
@Directive({
  // #15b Directive Selector
  // The CSS selector that identifies this directive
  selector: "[appHighlight]",
  // Standalone flag for modern Angular
  standalone: true,
})
export class HighlightDirective {
  // #15c Default Colors
  // Default highlighting colors
  @Input() highlightColor = "yellow";
  @Input() defaultColor = "transparent";

  // #15d ElementRef Injection
  // Inject a reference to the DOM element the directive is applied to
  constructor(private el: ElementRef) {}

  // #15e HostListener Decorator
  // Listen for events on the host element
  @HostListener("mouseenter")
  onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(this.defaultColor);
  }

  // #15f Directive Logic
  // Method that implements the directive's functionality
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
