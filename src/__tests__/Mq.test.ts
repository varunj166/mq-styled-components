import { Mq } from '../Mq';

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

describe('Mq class -- max-width media queries', () => {
  it('Returns the correct media query string -- sm', () => {
    expect(Mq.max.sm).toBe(`@media (max-width: ${breakpoints.sm}px)`);
  });

  it('Returns the correct media query string -- md', () => {
    expect(Mq.max.md).toBe(`@media (max-width: ${breakpoints.md}px)`);
  });

  it('Returns the correct media query string -- lg', () => {
    expect(Mq.max.lg).toBe(`@media (max-width: ${breakpoints.lg}px)`);
  });

  it('Returns the correct media query string -- xl', () => {
    expect(Mq.max.xl).toBe(`@media (max-width: ${breakpoints.xl}px)`);
  });
});

describe('Mq class -- min-width media queries', () => {
  it('Returns the correct media query string -- sm', () => {
    expect(Mq.min.sm).toBe(`@media (min-width: ${breakpoints.sm}px)`);
  });

  it('Returns the correct media query string -- md', () => {
    expect(Mq.min.md).toBe(`@media (min-width: ${breakpoints.md}px)`);
  });

  it('Returns the correct media query string -- lg', () => {
    expect(Mq.min.lg).toBe(`@media (min-width: ${breakpoints.lg}px)`);
  });

  it('Returns the correct media query string -- xl', () => {
    expect(Mq.min.xl).toBe(`@media (min-width: ${breakpoints.xl}px)`);
  });
});

describe('Mq.setBreakpoint method', () => {
  it('Enables user to change a single breakpoint -- sm', () => {
    Mq.resetBreakpoints();
    Mq.setBreakpoint('sm', 100);

    expect(Mq.max.sm).toBe(`@media (max-width: 100px)`);
  });

  it('Enables user to change a single breakpoint -- md', () => {
    Mq.resetBreakpoints();
    Mq.setBreakpoint('md', 100);

    expect(Mq.max.md).toBe(`@media (max-width: 100px)`);
  });

  it('Enables user to change a single breakpoint -- lg', () => {
    Mq.resetBreakpoints();
    Mq.setBreakpoint('lg', 100);

    expect(Mq.max.lg).toBe(`@media (max-width: 100px)`);
  });

  it('Enables user to change a single breakpoint -- xl', () => {
    Mq.resetBreakpoints();
    Mq.setBreakpoint('xl', 100);

    expect(Mq.max.xl).toBe(`@media (max-width: 100px)`);
  });

  it('Throws an error if first argument is not a string', () => {
    // @ts-ignore
    expect(() => Mq.setBreakpoint({}, 100)).toThrow();
  });

  it('Throws an error if second argument is not a number', () => {
    // @ts-ignore
    expect(() => Mq.setBreakpoint('sm', {})).toThrow();
  });
});

describe('Mq.setBreakpoints method', () => {
  it('Allows user to set multiple breakpoints at once', () => {
    Mq.setBreakpoints({
      sm: 100,
      md: 200,
      lg: 300,
      xl: 400
    });

    expect(Mq.max.sm).toBe(`@media (max-width: 100px)`);
    expect(Mq.max.md).toBe(`@media (max-width: 200px)`);
    expect(Mq.max.lg).toBe(`@media (max-width: 300px)`);
    expect(Mq.max.xl).toBe(`@media (max-width: 400px)`);

    expect(Mq.min.sm).toBe(`@media (min-width: 100px)`);
    expect(Mq.min.md).toBe(`@media (min-width: 200px)`);
    expect(Mq.min.lg).toBe(`@media (min-width: 300px)`);
    expect(Mq.min.xl).toBe(`@media (min-width: 400px)`);

    Mq.resetBreakpoints();
  });

  it('Throws an error if value associated with breakpoint is not a number -- sm', () => {
    // @ts-ignore
    expect(() => Mq.setBreakpoints({ sm: 'test' })).toThrow();
  });

  it('Throws an error if value associated with breakpoint is not a number -- md', () => {
    // @ts-ignore
    expect(() => Mq.setBreakpoints({ md: 'test' })).toThrow();
  });

  it('Throws an error if value associated with breakpoint is not a number -- lg', () => {
    // @ts-ignore
    expect(() => Mq.setBreakpoints({ lg: 'test' })).toThrow();
  });

  it('Throws an error if value associated with breakpoint is not a number -- xl', () => {
    // @ts-ignore
    expect(() => Mq.setBreakpoints({ xl: 'test' })).toThrow();
  });

  it('Throws an error if argument is not an object', () => {
    // @ts-ignore
    expect(() => Mq.setBreakpoints(100)).toThrow();
  });
});
