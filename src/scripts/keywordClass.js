class keyword {
  constructor(name) {
    this.keyword = name;
    this.numberOfMatches = null;
  }

  get name() {
    return this.keyword;
  }

  set matches(num) {
    if (num === null) {
      num = 0;
    }
    this.numberOfMatches = num;
  }

  get matches() {
    return this.numberOfMatches;
  }

  get matchString() {
    return `${this.keyword} was matched ${this.numberOfMatches} times in the article`;
  }
}

export { keyword };
