class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100; 
      this.type = null; 
    }
  
    get state() {
      return this._state;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } 
      else if (newState > 100) {
        this._state = 100;
      } 
      else {
        this._state = newState;
      }
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  }

  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine"; 
    }
  }
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author; 
      this.type = "book"; 
    }
  }
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel"; 
    }
  }
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic"; 
    }
  }
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }


//Number 2//
class Book {
    constructor(author, title, releaseYear, pages) {
        this.author = author;
        this.title = title;
        this.releaseYear = releaseYear;
        this.pages = pages;
        this.state = 100; 
    }
}


class DetectiveBook extends Book {}


class FantasticBook extends Book {}


class NovelBook extends Book {}


class Magazine extends Book {
    constructor(title, releaseYear, pages) {
        super(null, title, releaseYear, pages);
    }
}