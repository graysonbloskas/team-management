// Testing Intern functionality
const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

const intern = new Intern("Grayson", 1, "graysonbloskas@gmail.com", "Intern", "Texas")
// Testing that Intern returns as an object
test("can create new intern as object", ()=>{
    expect(typeof(intern)).toBe("object");
})
// Testing that Intern can grab role
test("getRole should return Intern", () => {
    const _intern = "Intern";
    expect(intern.getRole()).toBe(_intern);
});
// Testing that we can get the school name 
test("is able to grab the school name", () => {
    expect(intern.getSchool()).toBe("Texas");
});