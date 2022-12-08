class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  next() {
    if (typeof this.items === 'object') {
      const keys = Object.keys(this.items);
      const values = Object.values(this.items);

      const done = this.index >= keys.length;
      const key = !done ? keys[this.index] : undefined;
      const value = !done ? values[this.index++] : undefined;

      return {
        key,
        value,
        done,
      };
    }

    const done = this.index >= this.items.length;
    const value = !done ? this.items[this.index++] : undefined;

    return {
      value,
      done,
    };
  }

  first() {
    return this.items[0];
  }

  last() {
    this.index = this.items.length - 1;
    return this.next();
  }

  currentItem() {
    return this.items[this.index];
  }
}

export { Iterator };