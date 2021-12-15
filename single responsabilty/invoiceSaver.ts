import Invoice from "./invoice";

export default class InvoiceSaver{
  constructor(private invoice: Invoice){
  }
  saveInvoice() {
    console.log(this.invoice.getBook().getName())
  }
}