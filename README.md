# ABB

This refers to the various models of conversational AI

## Installation

To use ABB in your project:

```bash
    npm install abb-model
```

```bash
    yarn add abb-model
```

Create a Model:

```javascript
[
    {
        tag: 'greeting',
        patterns: ['Hi there', 'How are you', 'Is anyone there?', 'Hey', 'Hello', 'Good day'],
        responses: ['Hello', 'Good to see you again', 'Hi there, how can I help?'],
        context: [''],
    },
];
```

Train your abb-model:

```javascript
import { train } from 'abb-model';

const getTrain = await train({
    model: './model.json',
});

console.log(getTrain);
```

This will show this result in console:

```bash
Train and save the model successfully
```

use your abb-model :

```javascript
const response = await abb('Hello');
console.log(response);
```

This will show this result in console:

```bash
 {
  answers: [
    { answer: 'Hello' },
    { answer: 'Good to see you again' },
    { answer: 'Hi there, how can I help?' }
  ],
  answer: 'Hi there, how can I help?'
}
```

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
