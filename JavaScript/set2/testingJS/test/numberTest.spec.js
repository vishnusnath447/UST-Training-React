import checkPrime from '../src/numbers.js'
import { assert } from "chai";

describe("Checking checkPrime function",()=>{
    it("should return true if given number is prime",()=>{
        assert.equal(checkPrime(7),true);
    })

    it("should return false if given number is not prime",()=>{
        assert.equal(checkPrime(8),false);
    })
})
