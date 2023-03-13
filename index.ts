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

export const pope = (
  str: string,
  data: Object[],
  skipUndefined: boolean = true,
  throwOnUndefined?: boolean
): string => {
  const regex = new RegExp("{{2}(.+?)}{2}", "g");
  let result: RegExpExecArray | null;
  let formattedString = str;

  let i = 0;
  while ((result = regex.exec(str)) !== null) {
    const item = result[1].trim();
    if (item !== undefined) {
      const value = data[i];
      if (value !== undefined && value !== null) {
        formattedString = formattedString.replace(result[0], value.toString());
      } else if (throwOnUndefined) {
        throw new Error("Missing value for " + result[0]);
      } else if (skipUndefined) {
        formattedString = formattedString.replace(result[0], "");
      }
    }
    i++;
  }
  return formattedString.trim();
};
