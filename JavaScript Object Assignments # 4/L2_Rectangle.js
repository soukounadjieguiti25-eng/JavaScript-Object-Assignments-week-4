
const rectangle = {
    width: 5,
    height: 3,

    getArea: function () {
        return this.width * this.height;
    },

    getPerimeter: function () {
        return 2 * (this.width + this.height);
    }
};

console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());
