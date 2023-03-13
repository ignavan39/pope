/**
 *
 * @param str - string for render example "Hello {{1}}!"
 * @param data - arguments for render '@str'
 * @param skipUndefined - if true then skipped '@data' gapes and removed {{}} symbols in '@str'
 * @param throwOnUndefined  - if true then throw Err if data gapes
 * @returns rendered string
 *
 * @example pope("Hello {{1}}!","Bob") => "Hello, Bob"
 */
export declare const pope: (str: string, data: Object[], skipUndefined?: boolean, throwOnUndefined?: boolean) => string;
