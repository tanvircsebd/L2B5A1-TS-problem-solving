var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Problem 1:
function formatString(input, toUpper) {
    if (toUpper == null || toUpper) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
// Problem 2:
function filterByRating(items) {
    var filteredBooks = items.filter(function (item) { return item.rating >= 4; });
    return filteredBooks;
}
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];
// console.log(filterByRating(books));
// Problem 3:
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    // return arrays.flat();
    var result = [];
    for (var i = 0; i < arrays.length; i++) {
        var currentArray = arrays[i];
        for (var j = 0; j < currentArray.length; j++) {
            result.push(currentArray[j]);
        }
    }
    return result;
}
// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5], [0])); // Output: [1, 2, 3, 4, 5]);
// Problem 4:
var Vehicle = /** @class */ (function () {
    function Vehicle(make, year) {
        this.make = make;
        this.year = year;
    }
    Vehicle.prototype.getInfo = function () {
        return "Make: ".concat(this.make, ", Year: ").concat(this.year);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, year, model) {
        var _this = _super.call(this, make, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getModel = function () {
        return "Model: ".concat(this.model);
    };
    return Car;
}(Vehicle));
// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());
// Problem 5:
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    return value * 2;
}
function getMostExpensiveProduct(products) {
    var expensive = { name: "", price: 0 };
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        if (product.price > 0) {
            if (product.price > expensive.price) {
                expensive = product;
            }
        }
    }
    return expensive;
}
// const products = [
//   { name: "Pen", price: 55 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
// ];
// console.log(getMostExpensiveProduct(products));
// Problem 7:
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));
// Problem 8:
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    return setTimeout(function () {
                        if (n < 0) {
                            reject(new Error("Negative number not allowed"));
                        }
                        else
                            resolve(n * n);
                    }, 1000);
                })];
        });
    });
}
squareAsync(4).then(console.log); // Output after 1s: 16
squareAsync(-2).catch(console.error); // Output: Error: Negative number not allowed
