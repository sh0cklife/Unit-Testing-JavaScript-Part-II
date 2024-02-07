import { mathEnforcer } from "./03-math-enforcer.js"
import { expect } from "chai"

describe("mathEnforcer", () => {
    describe("addFive", () => {
        it("should return undefined when input is string", () => {
            //arrange
            const stringInput = "some string";
            //act
            const result = mathEnforcer.addFive(stringInput);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when input is undefined", () => {
            //arrange
            const undefinedInput = undefined;
            //act
            const result = mathEnforcer.addFive(undefinedInput);
            //assert
            expect(result).to.be.undefined;
        })
        
        it("should return undefined when input is number as string", () => {
            //arrange
            const numberAsStringInput = "5";
            //act
            const result = mathEnforcer.addFive(numberAsStringInput);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return correct result when input is floating number", () => {
            //arrange
            const floatNumberInput = 5.56;
            //act
            const result = mathEnforcer.addFive(floatNumberInput);
            //assert
            expect(result).to.be.closeTo(10.56, 0.01);
        })
        it("should return correct result when input is floating number and assert equal", () => {
            //arrange
            const floatNumberInput = 1.01;
            //act
            const result = mathEnforcer.addFive(floatNumberInput);
            //assert
            expect(result).to.be.equal(6.01);
        })
        it("should return correct result when input is floating number with lots of digits and assert closeTo", () => {
            //arrange
            const floatNumberInput = 1.000001;
            //act
            const result = mathEnforcer.addFive(floatNumberInput);
            //assert
            expect(result).to.be.closeTo(6.01, 0.01);
        })
        it("should return correct result when input is number", () => {
            //arrange
            const numberInput = 5;
            //act
            const result = mathEnforcer.addFive(numberInput);
            //assert
            expect(result).to.be.equal(10);
        })
        it("should return correct result when input is negative number", () => {
            //arrange
            const negativeNumberInput = -5;
            //act
            const result = mathEnforcer.addFive(negativeNumberInput);
            //assert
            expect(result).to.be.equal(0);
        })
        it("should return correct result when input is bigger negative number", () => {
            //arrange
            const biggerNegativeNumberInput = -50;
            //act
            const result = mathEnforcer.addFive(biggerNegativeNumberInput);
            //assert
            expect(result).to.be.equal(-45);
        })
        it("should return correct result when input is zero", () => {
            //arrange
            const zeroNumberInput = 0;
            //act
            const result = mathEnforcer.addFive(zeroNumberInput);
            //assert
            expect(result).to.be.equal(5);
        })
        it("should return correct result when input is maximum safe integer", () => {
            // arrange
            const maxSafeInteger = Number.MAX_SAFE_INTEGER;
            // act
            const result = mathEnforcer.addFive(maxSafeInteger);
            // assert
            expect(result).to.be.equal(maxSafeInteger + 5);
        });
        it("should return correct result when input is minimum safe integer", () => {
            // arrange
            const minSafeInteger = Number.MIN_SAFE_INTEGER;
            // act
            const result = mathEnforcer.addFive(minSafeInteger);
            // assert
            expect(result).to.be.equal(minSafeInteger + 5);
        });
        it("should return correct result when input is a floating-point number with precise addition", () => {
            // arrange
            const floatInput = 0.1;
            // act
            const result = mathEnforcer.addFive(floatInput);
            // assert
            expect(result).to.be.closeTo(5.1, 0.0001); // closeTo assertion to handle floating-point precision
        });
        it("should return correct result when input is a large positive number", () => {
            // arrange
            const largeNumber = 1e15; // 1 followed by 15 zeros
            // act
            const result = mathEnforcer.addFive(largeNumber);
            // assert
            expect(result).to.be.equal(1e15 + 5); // 1 followed by 15 zeros + 5
        });
        it("should return correct result when input is a negative number", () => {
            // arrange
            const negativeInput = -10;
            // act
            const result = mathEnforcer.addFive(negativeInput);
            // assert
            expect(result).to.be.equal(-5);
        });
        

    });

    describe("substractTen", () => {
        it("should return undefined when input is string", () => {
            //arrange
            const stringInput = "some string";
            //act
            const result = mathEnforcer.subtractTen(stringInput);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when input is undefined", () => {
            //arrange
            const undefinedInput = undefined;
            //act
            const result = mathEnforcer.subtractTen(undefinedInput);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when input is null", () => {
            //arrange
            const nullInput = null;
            //act
            const result = mathEnforcer.subtractTen(nullInput);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when input is number as string", () => {
            //arrange
            const numberAsStringInput = "5";
            //act
            const result = mathEnforcer.subtractTen(numberAsStringInput);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return correct result when input is floating number with closeTo", () => {
            //arrange
            const floatNumberInput = 1.01;
            //act
            const result = mathEnforcer.subtractTen(floatNumberInput);
            //assert
            expect(result).to.be.closeTo(-8.99, 0.01);
        })
        it("should return correct result when input is floating number and assert equal", () => {
            //arrange
            const floatNumberInput = 1.01;
            //act
            const result = mathEnforcer.subtractTen(floatNumberInput);
            //assert
            expect(result).to.be.equal(-8.99);
        })
        it("should return correct result when input is floating number with lots of digits and assert closeTo", () => {
            //arrange
            const floatNumberInput = 1.000001;
            //act
            const result = mathEnforcer.subtractTen(floatNumberInput);
            //assert
            expect(result).to.be.closeTo(-8.99, 0.01);
        })
        it("should return correct result when input is number", () => {
            //arrange
            const numberInput = 5;
            //act
            const result = mathEnforcer.subtractTen(numberInput);
            //assert
            expect(result).to.be.equal(-5);
        })
        it("should return correct result when input is negative number", () => {
            //arrange
            const negativeNumberInput = -5;
            //act
            const result = mathEnforcer.subtractTen(negativeNumberInput);
            //assert
            expect(result).to.be.equal(-15);
        })
        it("should return correct result when input is bigger negative number", () => {
            //arrange
            const biggerNegativeNumberInput = -5000;
            //act
            const result = mathEnforcer.subtractTen(biggerNegativeNumberInput);
            //assert
            expect(result).to.be.equal(-5010);
        })
        it("should return correct result when input is zero", () => {
            //arrange
            const zeroNumberInput = 0;
            //act
            const result = mathEnforcer.subtractTen(zeroNumberInput);
            //assert
            expect(result).to.be.equal(-10);
        })
        it("should return correct result when input is maximum safe integer", () => {
            // arrange
            const maxSafeInteger = Number.MAX_SAFE_INTEGER;
            // act
            const result = mathEnforcer.subtractTen(maxSafeInteger);
            // assert
            expect(result).to.be.equal(maxSafeInteger - 10);
        });
        it("should return correct result when input is minimum safe integer", () => {
            // arrange
            const minSafeInteger = Number.MIN_SAFE_INTEGER;
            // act
            const result = mathEnforcer.subtractTen(minSafeInteger);
            // assert
            expect(result).to.be.equal(minSafeInteger - 10);
        });
        it("should return correct result when input is a floating-point number with precise subtraction", () => {
            // arrange
            const floatInput = 0.1;
            // act
            const result = mathEnforcer.subtractTen(floatInput);
            // assert
            expect(result).to.be.closeTo(-9.9, 0.0001); // closeTo assertion to handle floating-point precision
        });
        it("should return correct result when input is a large negative number", () => {
            // arrange
            const largeNegativeNumber = -1e15; // negative 1 followed by 15 zeros
            // act
            const result = mathEnforcer.subtractTen(largeNegativeNumber);
            // assert
            expect(result).to.be.equal(-1e15 - 10); // negative 1 followed by 15 zeros - 10
        });
        it("should return correct result when input is a negative number", () => {
            // arrange
            const negativeInput = -10;
            // act
            const result = mathEnforcer.subtractTen(negativeInput);
            // assert
            expect(result).to.be.equal(-20);
        });
        
        
    });

    describe("sum", () => {
        it("should return undefined when Param1: incorrect and Param2: correct", () => {
            //arrange
            const incorrectFirstParam = "some string";
            const correctSecondParam = 5;
            //act
            const result = mathEnforcer.sum(incorrectFirstParam, correctSecondParam);
            //assert
            expect(result).to.be.undefined;
        })

        it("should return undefined when Param1: correct and Param2: incorrect", () => {
            //arrange
            const correctFirstParam = 5;
            const incorrectSecondParam = "some string";
            //act
            const result = mathEnforcer.sum(correctFirstParam, incorrectSecondParam);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when Param1: number as string and Param2: correct", () => {
            //arrange
            const numberAsStringFirstParam = "5";
            const correctSecondParam = 5;
            //act
            const result = mathEnforcer.sum(numberAsStringFirstParam, correctSecondParam);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when Param1: correct and Param2: number as string", () => {
            //arrange
            const correctFirstParam = 5;
            const incorrectSecondParam = "5";
            //act
            const result = mathEnforcer.sum(correctFirstParam, incorrectSecondParam);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when Param1: number as string and Param2: number as string", () => {
            //arrange
            const numberAsStringFirstParam = "5";
            const numberAsStringSecondParam = "5";
            //act
            const result = mathEnforcer.sum(numberAsStringFirstParam, numberAsStringSecondParam);
            //assert
            expect(result).to.be.undefined;
        })
        it("should return correct when Param1: correct and Param2: correct", () => {
            //arrange
            const correctFirstParam = 5;
            const correctSecondParam = 5;
            //act
            const result = mathEnforcer.sum(correctFirstParam, correctSecondParam);
            //assert
            expect(result).to.be.equals(10);
        })
        it("should return correct when Param1: correct negative num and Param2: correct negative num", () => {
            //arrange
            const correctFirstParam = -5;
            const correctSecondParam = -5;
            //act
            const result = mathEnforcer.sum(correctFirstParam, correctSecondParam);
            //assert
            expect(result).to.be.equals(-10);
        })
        it("should return correct when Param1: floating num and Param2: correct, assert is equals", () => {
            //arrange
            const correctFirstParam = 5.01;
            const correctSecondParam = 5;
            //act
            const result = mathEnforcer.sum(correctFirstParam, correctSecondParam);
            //assert
            expect(result).to.be.equals(10.01);
        })
        it("should return correct when Param1: floating num and Param2: correct, assert is closeTo", () => {
            //arrange
            const correctFirstParam = 5.01;
            const correctSecondParam = 5;
            //act
            const result = mathEnforcer.sum(correctFirstParam, correctSecondParam);
            //assert
            expect(result).to.be.closeTo(10.01, 0.01);
        })
        it("should return correct when Param1: zero and Param2: zero", () => {
            //arrange
            const correctFirstParam = 0;
            const correctSecondParam = 0;
            //act
            const result = mathEnforcer.sum(correctFirstParam, correctSecondParam);
            //assert
            expect(result).to.be.equal(0);
        })
        
        it("should return correct when both params are float", () => {
            //arrange
            const correctFirstParam = 0;
            const correctSecondParam = 0.1;
            //act
            const result = mathEnforcer.sum(correctFirstParam, correctSecondParam);
            //assert
            expect(result).to.be.closeTo(0.1, 0.01);
        })
    });
});