# Exceptions module

Exceptions module is a exception instance to facilitate the creation of custom exceptions. It uses [i18next](https://www.i18next.com/) to translate the exception messages.

## Usage

Install the package on your project:

```sh
pnpm add @x-spacy/exceptions
```

Import the module:

```ts
import { Exception } from '@x-spacy/exceptions';
```

Create a new exception and instantiate it:

```ts
import { Exception } from '@x-spacy/exceptions';

export class MyException extends Exception {
  constructor() {
    super(400, 'MyException');
  }
}
```

Use the exception:

```ts
import { MyException } from './my-exception';

function throwMyException() {
  throw new MyException();
}
```
