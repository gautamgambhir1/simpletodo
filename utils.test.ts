import { describe, it, expect } from 'vitest'
import { add } from './utils'

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('adds two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5)
  })

  it('adds a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2)
    expect(add(-5, 3)).toBe(-2)
  })

  it('adds zero', () => {
    expect(add(0, 0)).toBe(0)
    expect(add(0, 5)).toBe(5)
    expect(add(5, 0)).toBe(5)
  })

  it('adds large numbers', () => {
    expect(add(1e10, 1e10)).toBe(2e10)
  })

  it('adds floating point numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10)
  })

  it('adds Infinity and numbers', () => {
    expect(add(Infinity, 1)).toBe(Infinity)
    expect(add(-Infinity, 1)).toBe(-Infinity)
    expect(add(Infinity, -Infinity)).toBeNaN()
  })

  it('adds NaN', () => {
    expect(add(NaN, 1)).toBeNaN()
    expect(add(1, NaN)).toBeNaN()
    expect(add(NaN, NaN)).toBeNaN()
  })
})