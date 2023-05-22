import isPromise from "./isPromise";

describe('isPromise', () => {
    it('should return true for a promise object', () => {
      expect(isPromise(new Promise((resolve, reject) => {}))).toBe(true);
    });
  
    it('should return false for a non-promise object', () => {
      expect(isPromise('test')).toBe(false);
      expect(isPromise(123)).toBe(false);
      expect(isPromise({})).toBe(false);
      expect(isPromise([])).toBe(false);
      expect(isPromise(null)).toBe(false);
      expect(isPromise(undefined)).toBe(false);
      expect(isPromise(() => {})).toBe(false);
    });
  });