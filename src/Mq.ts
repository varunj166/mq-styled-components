type BreakpointsType = 'sm' | 'md' | 'lg' | 'xl';
type SetBreakpointsObjType = {
  [key in BreakpointsType]?: number;
};

/**
 * Mq class contains static properties and methods which give you access to the string values needed
 * to insert media query breakpoints into styled-components styles. Both max-width and min-width
 * are exposed through Mq.max and Mq.min respectively. You can also set breakpoints with Mq.setBreakpoint
 * and Mq.setBreakpoints.
 *
 * Default breakpoints:
 * - small (sm): 576px
 * - medium (md): 768px
 * - large (lg): 992px
 * - extra-large (xl): 1200px
 */
export class Mq {
  /**@private*/
  private static _breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  };

  /**
   * Retrieves the string values for setting a max-width media query.
   *
   * @member
   */
  static max = {
    get sm() {
      return `@media (max-width: ${Mq._breakpoints.sm}px)`;
    },
    get md() {
      return `@media (max-width: ${Mq._breakpoints.md}px)`;
    },
    get lg() {
      return `@media (max-width: ${Mq._breakpoints.lg}px)`;
    },
    get xl() {
      return `@media (max-width: ${Mq._breakpoints.xl}px)`;
    }
  };

  /**
   * Retrieves the string values for setting a min-width media query.
   *
   * @member
   */
  static min = {
    get sm() {
      return `@media (min-width: ${Mq._breakpoints.sm}px)`;
    },
    get md() {
      return `@media (min-width: ${Mq._breakpoints.md}px)`;
    },
    get lg() {
      return `@media (min-width: ${Mq._breakpoints.lg}px)`;
    },
    get xl() {
      return `@media (min-width: ${Mq._breakpoints.xl}px)`;
    }
  };

  /**
   * Set the value (in pixels) of one of the breakpoints.
   *
   * @param {string} breakpoint - The breakpoint you wish to set. One of: 'sm', 'md', 'lg', 'xl'.
   * @param {number} value - The value in pixels you wish to assign to that breakpoint.
   */
  static setBreakpoint(breakpoint: BreakpointsType, value: number) {
    if (typeof breakpoint === 'string' && typeof value === 'number') {
      const { _breakpoints } = Mq;
      switch (breakpoint) {
        case 'sm':
          _breakpoints.sm = value;
        case 'md':
          _breakpoints.md = value;
        case 'lg':
          _breakpoints.lg = value;
        case 'xl':
          _breakpoints.xl = value;
        default:
      }
    } else {
      throw new Error(
        'Must provide a string value for "size" and a number value for "number" to mq.setBreakpoint method.'
      );
    }
  }

  /**
   * Set value values (in pixels) of multiple breakpoints.
   *
   * @param {object} sizesObj - An object whose keys are the breakpoints you wish to change (i.e. one of: 'sm', 'md', 'lg', 'xl'),
   * and whose values are the values (in pixels) to be assigned to the respective breakpoints.
   */
  static setBreakpoints(breakpointsObj: SetBreakpointsObjType) {
    if (typeof breakpointsObj === 'object') {
      const { _breakpoints } = Mq;
      const breakpoints = Object.keys(breakpointsObj);
      for (let i = 0, n = breakpoints.length; i < n; i++) {
        // Note: Cannot index into Mq to clean up this code because
        // index signature's in typescript have to apply to all
        // members of the type. But the Mq class/object has properties
        // and methods of varying types, so no single index signature
        // can be declared.
        switch (breakpoints[i]) {
          case 'sm':
            if (typeof breakpointsObj.sm !== 'number')
              throw new Error(
                'The value associated with each breakpoint must be a number.'
              );
            _breakpoints.sm = breakpointsObj.sm;
            break;
          case 'md':
            if (typeof breakpointsObj.md !== 'number')
              throw new Error(
                'The value associated with each breakpoint must be a number.'
              );
            _breakpoints.md = breakpointsObj.md;
            break;
          case 'lg':
            if (typeof breakpointsObj.lg !== 'number')
              throw new Error(
                'The value associated with each breakpoint must be a number.'
              );
            _breakpoints.lg = breakpointsObj.lg;
            break;
          case 'xl':
            if (typeof breakpointsObj.xl !== 'number')
              throw new Error(
                'The value associated with each breakpoint must be a number.'
              );
            _breakpoints.xl = breakpointsObj.xl;
            break;
        }
      }
    } else {
      throw new Error(
        'Must provide an object containing breakpoints as keys and numerical values as values to mq.setBreakpoints.'
      );
    }
  }

  /**
   * Returns all breakpoints to their default values.
   *
   * {
   *  sm: 576,
   *  md: 768,
   *  lg: 992,
   *  xl: 1200
   * }
   */
  static resetBreakpoints() {
    Mq._breakpoints = {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    };
  }
}
