import { Injectable } from '@angular/core';
import { BookDetails } from './book-details.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsServiceService {

  formData: BookDetails = {
    Id: 0,
    Name: '',
    Author: '',
    BookAvailability: 0
  };

  readonly rootURL = environment.apiPath + 'books/';
  list?: BookDetails[];

  constructor(private http: HttpClient) { }

  post(): Observable<BookDetails> {
    return this.http.post<BookDetails>(this.rootURL, this.formData);
  }
  put(): Observable<BookDetails> {
    return this.http.put<BookDetails>(this.rootURL + this.formData?.Id, this.formData);
  }
  delete(id: number): Observable<BookDetails> {
    return this.http.delete<BookDetails>(this.rootURL + id);
  }

  refreshList(): void {
    this.http.get<BookDetails[]>(this.rootURL)
      .toPromise()
      .then(res => this.list = res as BookDetails[]);
  }
}
