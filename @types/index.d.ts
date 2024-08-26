declare module '@x-spacy/exceptions' {
  export class Exception {
    constructor(status: number, name: string, parameters?: Record<string, string | number>, message?: string);
  }
}
