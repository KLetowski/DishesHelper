// @ts-ignore
Array.prototype.removeFromIndex = function<T>(index: number): T[] {
  return [...this.slice(0, index), ...this.slice(index + 1)];
};
