import { analyzeArray } from "./04-array-analyzer.js"
import { expect } from "chai"

describe("analyzeArray", () => {
    it("should return undefined when pass non-array as input", () => {
        //arrange
        const input = "some string";
        //act
        const result = analyzeArray(input);
        //assert
        expect(result).to.be.undefined;
    })

    it("should return undefined when pass an empty array as input", () => {
        //arrange
        const input = [];
        //act
        const result = analyzeArray(input);
        //assert
        expect(result).to.be.undefined;
    })

    it("should return correct value when pass array with different numbers as input", () => {
        //arrange
        const input = [3, 5, -2, 4, 0]
        //act
        const result = analyzeArray(input);
        //assert
        expect(result).to.deep.equal({
            min: -2,
            max: 5,
            length: 5
        });
    })

    it("should return correct value when pass array with singe number as input", () => {
        //arrange
        const input = [5];
        //act
        const result = analyzeArray(input);
        //assert
        expect(result).to.deep.equal({
            min: 5,
            max: 5,
            length: 1
        });
    })

    it("should return correct value when pass array with identical numbers as input", () => {
        //arrange
        const input = [5, 5, 5, 5, 5];
        //act
        const result = analyzeArray(input);
        //assert
        expect(result).to.deep.equal({
            min: 5,
            max: 5,
            length: 5
        });

    })
})