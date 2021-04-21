// testing Engineer functionality
const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

const engineer = new Engineer("grayson", 1, "graysonbloskas@gmail.com", "Engineer", "graysonbloskas")
// Testing that Engineer comes back as object
test("can create new engineer as object", ()=>{
    expect(typeof(engineer)).toBe("object");
})
// Testing that Engineer can getRole Engineer 
test("getRole should return Engineer", () => {
    const _engineer = "Engineer";
    expect(engineer.getRole()).toBe(_engineer);
});
// Testing that it is able to grab the github username 
test("is able to grab the github username", () => {
    expect(engineer.getGithub()).toBe("graysonbloskas");
});