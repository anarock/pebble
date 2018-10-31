declare module "just-debounce-it" {
  type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
    ? A
    : never;

  /*~ This declaration specifies that the function
  *~ is the exported object from the file
  */
  export = debounce;

  declare function debounce<T extends Function>(
    fn: T,
    wait?: 0,
    callFirst?: boolean
  ): T;

  declare function debounce<T extends Function>(
    fn: T,
    wait: number,
    callFirst: true
  ): T;

  declare function debounce<T extends Function>(
    fn: T,
    wait: number,
    callFirst?: false
  ): (...args: ArgumentTypes<T>) => void;
}
