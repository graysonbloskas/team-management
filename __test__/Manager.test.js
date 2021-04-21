// Test that manager is operational
const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

const manager = new Manager("Grayson", 1, "graysonbloskas@gmail.com", "Manager", 2)

// Testing that manager is toBe object
test("can create new manager as object", ()=>{
    expect(typeof(manager)).toBe("object");
})
// Testing that Manager can get role
test("getRole should return Manager", () => {
    const _manager = "Manager";
    expect(manager.getRole()).toBe(_manager);
});
// Testing that Manager can grab the office number
test("is able to grab the Office Number", () => {
    expect(manager.getOfficeNumber()).toBe(2);
});