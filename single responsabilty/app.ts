import Book from "./book";
import Invoice from "./invoice";
import InvoicePrinter from "./invoicePrinter";
import InvoiceSaver from "./invoiceSaver";

const book = new Book("Clen Code", "Bob", 1995, 49, "SD-456-ASD");
const invoice = new Invoice(book, 1, 50, 0.14);
invoice.calculateTotal();

const printer = new InvoicePrinter(invoice)
printer.printInvoice();

const saver = new InvoiceSaver(invoice);
saver.saveInvoice();