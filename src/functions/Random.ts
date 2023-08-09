// Emulation of the Python stdlib Random stuff.
export const Random = {
  random() {
    return Math.random();
  },
  // Returns a value between [min, max).
  randint(min: number, max: number | undefined = undefined): number {
    const trueMax = max ?? min;
    const trueMin = max === undefined ? 0 : min;
    const range = trueMax - trueMin;
    return Math.floor(Math.random() * range + trueMin);
  },
  // Returns a random item in the array if possible. If no values exist, returns null.
  // Feel free to change to undefined if necessary, or maybe even remove if statement.
  choice<Item>(values: Array<Item>): Item | null {
    if (values.length === 0) return null;
    return values[Random.randint(values.length)];
  },
  coinflip: () => Math.random() > 0.5,
};