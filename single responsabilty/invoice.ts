import Book from "./book";

export default class Invoice{
  private total: number = 0;
  constructor(
    private book: Book,
    private quantity: number,
    private discountRate: number,
    private taxRate: number
  ){
  }

  calculateTotal() {
    console.log(`${this.book.getName()} Invoice quantity: ${this.quantity}`);
    console.log(`Discount Rate: ${this.discountRate}`);
    console.log(`Tax Rate: ${this.taxRate}`);
    this.total = this.book.getPrice()*(1+this.taxRate)*this.discountRate/100;
    console.log(`TOTAL: ${this.total}`);
  }

  getTotal(){
    return this.total;
  }

  getBook(){
    return this.book;
  }

  saveToFile() { }
  
  // private invoice_save:InvoiceSave;
  // invoice_save.saveToFile()
  // InvoiceSave.saveToFile()
}