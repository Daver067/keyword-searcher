class keyword {
  constructor(name) {
    this.keyword = name;
    this.regEx = new RegExp(`${keyword}`, `gmi`);
    this.matches = [];
  }

  getMatches = (string) => {
    this.matches = string.matches(this.regEx);
  };

  countMatches = () => {
    return this.matches.length;
  };
}

export { keyword };
