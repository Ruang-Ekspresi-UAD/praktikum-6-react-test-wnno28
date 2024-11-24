const Counter = require('./counter');

describe('Counter', () => {
  let counter;

  beforeEach(() => {
    counter = new Counter();
  });

  test('Default value must be 0', () => {
    expect(counter.value).toBe(0);
  });

  test('increment works when button clicked', () => {
    counter.increment();
    expect(counter.value).toBe(1);
  });

  test('decrement works when button clicked', () => {
    counter.decrement();
    expect(counter.value).toBe(-1);
  });

  test('reset the count using reset button', () => {
    counter.increment();
    counter.reset();
    expect(counter.value).toBe(0);
  });
});
