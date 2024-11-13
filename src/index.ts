import i18next from 'i18next';

export class Exception extends Error {
  public readonly status: number;
  public readonly name: string;

  constructor(status: number, name: string, parameters?: Record<string, string | number>, message?: string) {
    super(i18next.t(message ?? name, parameters));

    this.status = status;
    this.name = name;

    this.stack = message ?? name;
  }
}
