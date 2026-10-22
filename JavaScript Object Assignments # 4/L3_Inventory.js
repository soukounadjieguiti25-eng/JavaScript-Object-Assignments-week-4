
function deepClone(value) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (Array.isArray(value)) {
        const newArray = [];

        for (let i = 0; i < value.length; i++) {
            newArray.push(deepClone(value[i]));
        }

        return newArray;
    }

    const newObject = {};

    for (const key in value) {
        if (Object.hasOwn(value, key)) {
            newObject[key] = deepClone(value[key]);
        }
    }

    return newObject;
}

const original = {
    name: "Laptop",
    details: {
        brand: "Lenovo",
        colors: ["Black", "Silver"]
    }
};

const copy = deepClone(original);

copy.details.brand = "Dell";
copy.details.colors.push("White");

console.log("Original brand:", original.details.brand);
console.log("Copy brand:", copy.details.brand);
console.log("Original colors:", original.details.colors);
console.log("Copy colors:", copy.details.colors);
