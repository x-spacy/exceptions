import i18next from 'i18next';

export class Exception {
  public readonly status: number;
  public readonly name: string;
  public readonly message: string | undefined;

  constructor(status: number, name: string, message?: string, parameters?: Record<string, string | number>) {
    this.status = status;
    this.name = name;
    this.message = message ?? i18next.t(name, parameters);
  }
}
