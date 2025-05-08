function formatString(input: string, toUpper?: boolean): string {
  if (toUpper == null || toUpper) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredBooks = items.filter((item) => item.rating >= 4);
  return filteredBooks;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  // return arrays.flat();
  const result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    const currentArray = arrays[i];
    for (let j = 0; j < currentArray.length; j++) {
      result.push(currentArray[j]);
    }
  }
  return result;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  let expensive = { name: "", price: 0 };
  for (const product of products) {
    if (product.price > 0) {
      if (product.price > expensive.price) {
        expensive = product;
      }
    }
  }
  return expensive;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject("Error: Negative number not allowed");
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
