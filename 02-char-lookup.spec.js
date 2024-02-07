import { lookupChar } from "./02-char-lookup.js"
import { expect } from "chai"

describe("lookupChar", () =>{

    it("should return undefined when 1st parameter is incorrect type and 2nd is correct type", () => {
        //arrange
        const incorrectFirstParameter = 123;
        const correctSecondParameter = 1;
        //act
        const undefinedResult = lookupChar(incorrectFirstParameter, correctSecondParameter);
        //assert
        expect(undefinedResult).to.be.undefined;
    });

    it("should return undefined when 1st parameter is undefined and 2nd is correct type", () => {
        //arrange
        const undefinedFirstParameter = undefined;
        const correctSecondParameter = 1;
        //act
        const undefinedResult = lookupChar(undefinedFirstParameter, correctSecondParameter);
        //assert
        expect(undefinedResult).to.be.undefined;
    });

    it("should return undefined when 1st parameter is null and 2nd is correct type", () => {
        //arrange
        const nullFirstParameter = null;
        const correctSecondParameter = 1;
        //act
        const undefinedResult = lookupChar(nullFirstParameter, correctSecondParameter);
        //assert
        expect(undefinedResult).to.be.undefined;
    });

    it("should return undefined when 1st parameter is correct and 2nd is incorrect", () => {
        const correctFirstParameter = "some string here";
        const incorrectSecondParameter = null;
        //act
        const undefinedResult = lookupChar(correctFirstParameter, incorrectSecondParameter);
        //assert
        expect(undefinedResult).to.be.undefined;
        
    });

    it("should return undefined when 1st parameter is correct and 2nd is float number", () => {
        const correctFirstParameter = "some string here";
        const incorrectSecondParameter = 10.10;
        //act
        const undefinedResult = lookupChar(correctFirstParameter, incorrectSecondParameter);
        //assert
        expect(undefinedResult).to.be.undefined;
    });

    it("should return undefined when both parameters are incorrect", () => {
        const incorrectFirstParameter = 123;
        const incorrectSecondParameter = 10.10;
        //act
        const undefinedResult = lookupChar(incorrectFirstParameter, incorrectSecondParameter);
        //assert
        expect(undefinedResult).to.be.undefined;
    });

    it("should return 'Incorrect index' when 1st parameter is correct and 2nd parameter is bigger than the string length", () => {
        const correctFirstParameter = "some string";
        const biggerLengthSecondParameter = 20;
        //act
        const result = lookupChar(correctFirstParameter, biggerLengthSecondParameter);
        //assert
        expect(result).to.be.equals("Incorrect index");
    });

    it("should return 'Incorrect index' when 1st parameter is correct and 2nd parameter is shorter than the string length", () => {
        const correctFirstParameter = "some string";
        const lowerLengthSecondParameter = -20;
        //act
        const result = lookupChar(correctFirstParameter, lowerLengthSecondParameter);
        //assert
        expect(result).to.be.equals("Incorrect index");
    });

    it("should return correct when all the parameters are correct", () => {
        const correctFirstParameter = "some string";
        const correctSecondParameter = 1;
        //act
        const result = lookupChar(correctFirstParameter, correctSecondParameter);
        //assert
        expect(result).to.be.equals("o");
    });

});