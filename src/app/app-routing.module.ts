import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: ListBookComponent },
  { path: 'books/create', component: AddBookComponent },
  { path: 'books/edit/:id', component: EditBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }