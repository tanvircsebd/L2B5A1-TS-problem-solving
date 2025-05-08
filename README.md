# What are some differences between interfaces and types in TypeScript?

## 🔹 Interfaces vs Types

### Interface

- Used for defining object shapes.
- Supports extension and declaration merging.
- Best for class-based or object-oriented designs.

```ts
interface User {
  name: string;
  age: number;
}
```

### Type

- More flexible; supports unions, intersections, tuples, etc.
- Cannot be merged.
- Ideal for complex or combined types.

```ts
type User = {
  name: string;
  age: number;
};
```

### Key Differences

- Interfaces are extendable directly using the extends keyword. Types can't use extends, but you can combine or extend them using the intersection operator &.

- Interface merging means you can declare the same interface multiple times, and TypeScript will merge them. Types do NOT support merging — if you try to declare a type twice with the same name, it will cause an error.

---

## 🔹 What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof` is a TypeScript operator that takes an object type and produces a union of its keys. It’s useful for creating generic, type-safe utilities and restricting allowed keys.

```ts
type User = { id: number; name: string };
type UserKeys = keyof User; // "id" | "name"

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

🔸 Ensures type-safe access to object properties. keyof helps create powerful, type-safe generic functions.
