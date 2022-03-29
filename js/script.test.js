// const { expect, describe } = require('@jest/globals')
// const { test, it } = require('jest-circus')
const { describe } = require('jest-circus');
const {multiplicity} = require('./script')
const {pascalTriangle} = require('./script')


describe('multiplicity, task_1', () => {
    const testCases = [
        {
            in: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
            expected:[3, 6, 9, 12, 18, 21]
        }
    ];
    testCases.forEach(test => {
        it(
            `in: ${test.in} expected: ${test.expected}`,
            ()=> {
            const res = multiplicity(test.in);
            expect(res).toEqual(test.expected);
        });
    }) 
})

describe('pascalTriangle, task_2', () => {
    const testCases = [
        {
            in: [1, 2, 3, 4],
            expected:[2, 3, 3]
        }
    ];
    testCases.forEach(test => {
        it(
            `in: ${test.in} expected: ${test.expected}`,
            ()=> {
            const res = pascalTriangle(test.in);
            expect(res).toEqual(test.expected);
        });
    }) 
})




