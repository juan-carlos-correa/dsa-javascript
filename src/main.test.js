import { it, expect } from 'vitest';

import { myFunction } from './main.js';

it('should return true', () => {
  expect(myFunction()).toBe(true);
});
