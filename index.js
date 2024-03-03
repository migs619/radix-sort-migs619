
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { no } = require('odd-numbers-migs619');
const { lib2 } = require('memorycardgame-migs619');

function radixSort(arr) {
    const getMax = (arr) => {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    };

    const countingSort = (arr, exp) => {
        const output = new Array(arr.length).fill(0);
        const count = new Array(10).fill(0);

        for (let i = 0; i < arr.length; i++) {
            count[Math.floor(arr[i] / exp) % 10]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    };

    const max = getMax(arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array using Radix Sort:", radixSort(array));


module.exports = { radixSort };
