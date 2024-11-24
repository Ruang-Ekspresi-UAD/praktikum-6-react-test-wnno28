const { greeting, showAlert } = require('./latihan');
const Counter = require('./counter');

describe('Latihan', () => {
  test('Counter Default Value must be 0', () => {
    const counter = new Counter();
    expect(counter.value).toBe(0);
  });

  test('increment works when button clicked', () => {
    const counter = new Counter();
    counter.increment();
    expect(counter.value).toBe(1);
  });

  test('decrement works when button clicked', () => {
    const counter = new Counter();
    counter.decrement();
    expect(counter.value).toBe(-1);
  });

  test('reset the count using reset button', () => {
    const counter = new Counter();
    counter.increment();
    counter.reset();
    expect(counter.value).toBe(0);
  });

  test('greeting component {nama kalian}', () => {
    const result = greeting('Ruwaeda Wenno');
    expect(result).toBe('Hello, Ruwaeda Wenno!');
  });

  test('greeting component {nama dosen kalian}', () => {
    const result = greeting('Farid Suryanto');
    expect(result).toBe('Hello, Farid Suryanto!');
  });

  test('triggers alert with correct message when clicked', () => {
    const message = 'Button clicked!';
    global.alert = jest.fn(); // Mock alert
    showAlert(message);
    expect(global.alert).toHaveBeenCalledWith(message);
  });
});
