/**
 * Template Literal : string 타입을 조정할 때 사용
 */

type CodeFactory = 'Code Factory';

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>;

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>;

// Capitalize -> 첫 글자만 대문자
type CodeFactoryCapital = Capitalize<CodeFactoryLower>;

// Uncapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>;