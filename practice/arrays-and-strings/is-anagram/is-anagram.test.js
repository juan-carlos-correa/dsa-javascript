import { expect, test } from 'vitest';
import { isAnagram } from './is-anagram';

test('anagram simple', () => {
  expect(isAnagram('listen', 'silent')).toBe(true);
});

test('anagram con diferentes letras', () => {
  expect(isAnagram('rat', 'tar')).toBe(true);
});

test('anagram con letras repetidas', () => {
  expect(isAnagram('aabbcc', 'abcabc')).toBe(true);
});

test('anagram con letras en distinto orden', () => {
  expect(isAnagram('triangle', 'integral')).toBe(true);
});

test('strings de distinto tamaño', () => {
  expect(isAnagram('abc', 'ab')).toBe(false);
});

test('strings con letras distintas', () => {
  expect(isAnagram('hello', 'world')).toBe(false);
});

test('letras en diferente cantidad', () => {
  expect(isAnagram('aabb', 'ab')).toBe(false);
});

test('letras similares pero diferentes cantidades', () => {
  expect(isAnagram('aabbc', 'abccc')).toBe(false);
});

test('dos strings vacíos', () => {
  expect(isAnagram('', '')).toBe(true);
});

test('uno vacío, otro no', () => {
  expect(isAnagram('', 'a')).toBe(false);
});

test('mismo string dos veces', () => {
  expect(isAnagram('node', 'node')).toBe(true);
});
