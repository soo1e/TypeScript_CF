/**
 * Exclude Type
 */

// Exclude<일반적인 유니언 타입, 제외할 타입>

type NoString = Exclude<string | boolean | number, string>; // string | boolean

type NoFunction = Exclude<string | (() => void), Function>; // string