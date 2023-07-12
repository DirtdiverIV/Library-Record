import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(
      (books) => {
        this.books = books;
      },
      (error) => {
        console.error('Error retrieving books', error);
      }
    );
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(
      (books) => {
        this.books = books;
      },
      (error) => {
        console.error('Error retrieving books', error);
      }
    );
  }

  editBook(book: Book): void {
    // Lógica para editar el libro, por ejemplo, redireccionar a la página de edición pasando el ID del libro
    console.log('Edit book:', book);
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(
      () => {
        console.log('Book deleted successfully');
        this.fetchBooks(); // Actualizar la lista de libros después de eliminar
      },
      (error) => {
        console.error('Error deleting book', error);
      }
    );
  }

}

