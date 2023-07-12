import { Component } from '@angular/core';
import { Book } from '../book/book.model';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  book: Book = {
    id: 0,
    image: '',
    name: '',
    editorial: '',
    gender: '',
    author: ''
  };
  private subscription: Subscription = new Subscription();

  constructor(private bookService: BookService) {}

  onSubmit(): void {
    this.subscription.add(
      this.bookService.addBook(this.book).subscribe(
        (response) => {
          console.log('Libro añadido con éxito', response);
          // Aquí puedes redirigir a la página de lista de libros o realizar alguna otra acción
        },
        (error) => {
          console.error('Error al añadir el libro', error);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}