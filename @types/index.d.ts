declare module '@x-spacy/exceptions' {
  export class Exception {
    public readonly status: number;
    public readonly name: string;
    public readonly message: string | undefined;

    constructor(status: number, name: string, parameters?: Record<string, string | number>, message?: string);
  }
}
