'use strict';

const assert = require('assert');
const differ = require('../lib/diffArray');

suite('diffArrayTests', () => {
    test('function diffArray should return an array.', () => {
        var result = differ.diffArray([], []);
        assert.equal(Array.isArray(result), true);
    });
    
    test('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].', () => {
        var a1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];        
        var a2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

        var result = differ.diffArray(a1, a2);

        assert.deepEqual(result, ["pink wool"]);
    });

    test('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].', () => {
        var a1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];        
        var a2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

        var result = differ.diffArray(a1, a2);

        assert.deepEqual(result, ["pink wool", "diorite"]);
    });

    test('["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].', () => {
        var a1 = ["andesite", "grass", "dirt", "dead shrub"];        
        var a2 = ["andesite", "grass", "dirt", "dead shrub"];

        var result = differ.diffArray(a1, a2);

        assert.deepEqual(result, []);
    });

    test('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].', () => {
        var a1 = [1, 2, 3, 5];        
        var a2 = [1, 2, 3, 4, 5];

        var result = differ.diffArray(a1, a2);

        assert.deepEqual(result, [4]);
    });

    test('[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].', () => {
        var a1 = [1, "calf", 3, "piglet"];        
        var a2 = [1, "calf", 3, 4];

        var result = differ.diffArray(a1, a2);

        assert.deepEqual(result, ["piglet", 4]);
    });

    test('[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].', () => {
        var a1 = [];        
        var a2 = ["snuffleupagus", "cookie monster", "elmo"];

        var result = differ.diffArray(a1, a2);

        assert.deepEqual(result, ["snuffleupagus", "cookie monster", "elmo"]);    
    });

    test('[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].', () => {
        var a1 = [1, "calf", 3, "piglet"];        
        var a2 = [7, "filly"];

        var result = differ.diffArray(a1, a2);

        assert.deepEqual(result, [1, "calf", 3, "piglet", 7, "filly"]);    
    });
});