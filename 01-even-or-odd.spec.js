import {isOddOrEven} from "./01-even-or-odd.js"
import {expect} from "chai"

describe("isOddOrEven", () =>{

    it("should return undefined when pass non string value as input", () => {
        //arrange
        const inputValueNumber = 123;
        const inputValueUndefined = undefined;
        const inputValueNull = null;
        const inputValueFloatNumber = 123.99;
        //act
        const resultNumber = isOddOrEven(inputValueNumber);
        const resultUndefined = isOddOrEven(inputValueUndefined);
        const resultNull = isOddOrEven(inputValueNull);
        const resultFloat = isOddOrEven(inputValueFloatNumber);
        //assert
        expect(resultNumber).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultFloat).to.be.undefined;
    });

    it("should return even when the input string length is even", () => {
        //arrange
        const evenStringLengthInput = "Deni";
        //act
        const resultEvenStringLength = isOddOrEven(evenStringLengthInput);
        //assert
        expect(resultEvenStringLength).to.be.equals('even');
    });

    it("should return odd when the input string length is odd", () => {
        //arrange
        const oddStringLengthInput = "Denis";
        //act
        const resultOddStringLength = isOddOrEven(oddStringLengthInput);
        //assert
        expect(resultOddStringLength).to.be.equals('odd');
    });

    it("should return ... when the input string length is 0", () => {
        //arrange
        const zeroStringLengthInput = "";
        //act
        const resultZeroStringLength = isOddOrEven(zeroStringLengthInput);
        //assert
        expect(resultZeroStringLength).to.be.equals('even');
    });
});