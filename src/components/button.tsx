import * as React from "react";

// this is a simple button component
// it's a functional component that returns a button element

export function Button() {
  return (
    <button className="p-4 border rounded-full hover:bg-primary">
      <h2>Click me!</h2>
    </button>
  );
}
