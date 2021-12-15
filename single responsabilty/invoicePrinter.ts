import Invoice from "./invoice";

export default class InvoicePrinter{
  constructor(private invoice: Invoice){
  }
  printInvoice() {
    console.log(this.invoice.getBook().getName())
  }
}