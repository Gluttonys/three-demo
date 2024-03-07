/**
 * @see {@link https://devblogs.microsoft.com/typescript/announcing-typescript-5-4/#the-noinfer-utility-type}
 */
declare function getDefaultColor<C extends string>(colors: (C)[], defaultColor?: NoInfer<C>): void


getDefaultColor(['blue', 'red', 'yellow'], 'a')
// getDefaultColor('green', 'green')

//////////////////////////////////////////////////////////////////////////////

declare function foo1<T extends string>(a: T, b: NoInfer<T>): void
declare function foo2<T extends string>(a: T, b: NoInfer<T>[]): void
declare function foo3<T extends string>(a: T, b: NoInfer<T[]>): void
declare function foo4<T extends string>(a: T, b: { x: NoInfer<T> }): void
declare function foo5<T extends string>(a: T, b: NoInfer<{ x: T }>): void

foo1('foo', 'foo') // ok
foo1('foo', 'bar') // error
foo2('foo', ['bar']) // error
foo3('foo', ['bar']) // error
foo4('foo', { x: 'bar' }) // error
foo5('foo', { x: 'bar' }) // error

/////////////////////////////////////////////////////////////////////////////

// declare function foo1<T extends string, U extends T>(a: T, b: U): void
// declare function foo2<T extends string, U extends T>(a: T, b: U): void
// declare function foo3<T extends string, U extends T>(a: T, b: (U)[]): void
// declare function foo4<T extends string, U extends T>(a: T, b: { x: U }): void
// declare function foo5<T extends string, U extends T>(a: T, b: { x: U }): void
//
// foo1('foo', 'foo') // ok
// foo1('foo', 'bar') // error
// foo2('foo', ['bar']) // error
// foo3('foo', ['bar']) // error
// foo4('foo', { x: 'bar' }) // error
// foo5('foo', { x: 'bar' }) // error
//
//
// declare function invoke<F extends ((value:any) => any)>(func:F, value: Parameters<F>["0"]): ReturnType<F>;
// declare function test(value: { x: number; }): number;
// invoke(test, { x: 1, y: 2 }); // Compiler Error
// test({ x: 1, y: 2 }); // Same Compiler error

