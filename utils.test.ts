Certainly! Below is a complete Vitest unit test file for your `add` function in `utils.ts`. This test file covers the main logic and several edge cases, such as negative numbers, zero, large numbers, and floating-point values.

**File: `utils.test.ts`**

```typescript
import { describe, it, expect } from 'vitest';
import { add } from './utils';

describe('add', () => {
  it('adds two positive integers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds a positive and a negative integer', () => {
    expect(add(5, -3)).toBe(2);
  });

  it('adds two negative integers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  it('adds zero to a number', () => {
    expect(add(0, 7)).toBe(7);
    expect(add(7, 0)).toBe(7);
    expect(add(0, 0)).toBe(0);
  });

  it('adds large numbers', () => {
    expect(add(1_000_000_000, 2_000_000_000)).toBe(3_000_000_000);
  });

  it('adds floating point numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });

  it('adds positive and negative floating point numbers', () => {
    expect(add(-0.5, 1.2)).toBeCloseTo(0.7, 10);
  });

  it('adds very small numbers', () => {
    expect(add(1e-10, 2e-10)).toBeCloseTo(3e-10, 15);
  });
});
```

**How to use:**
- Place this file as `utils.test.ts` in the same directory as `utils.ts`.
- Run `vitest` to execute the tests.

Let me know if you need tests for other functions or more edge cases!