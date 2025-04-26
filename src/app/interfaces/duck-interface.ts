// #01 TypeScript Interfaces
// Interfaces define the shape of objects in TypeScript, providing type safety
// and better development experience through IntelliSense

export interface Duck {
  // #01a Property Definitions
  // Each property has a specific type (string, number, boolean)
  // ensuring type safety throughout the application
  id: number;
  name: string;
  imageUrl: string;
  habitat: string;
  fact: string;
  isEndangered: boolean;
  // #01b Optional Properties
  // Properties marked with ? are optional and don't need to be provided
  isFeatured?: boolean; // Optional property to mark a duck as featured
}
