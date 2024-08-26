import i18next from 'i18next';

export class Exception {
  public readonly status: number;
  public readonly name: string;
  public readonly message: string | undefined;

  constructor(status: number, name: string, parameters?: Record<string, string | number>, message?: string) {
    this.status = status;
    this.name = name;
    this.message = i18next.t(message ?? name, parameters);
  }
}
