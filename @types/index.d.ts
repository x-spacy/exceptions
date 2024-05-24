declare module '@x-spacy/exceptions' {
  export class Exception {
    constructor(status: number, name: string, message?: string);
  }
}