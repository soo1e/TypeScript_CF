/**
 * Extract Type
 */

type stringOnly = Extract<string | boolean | number, string>; // string

type functionOnly = Extract<string | (() => void), Function>; // function