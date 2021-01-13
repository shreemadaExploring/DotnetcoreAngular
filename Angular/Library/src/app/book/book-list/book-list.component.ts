import { Component, OnInit } from '@angular/core';
import { BookDetails } from '../../shared/book-details/book-details.model';
import { BookDetailsServiceService } from '../../shared/book-details/book-details-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(public service: BookDetailsServiceService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd: BookDetails): void {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(Id: number): void {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.delete(Id)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Book Detail Register');
        },
          err => {
            console.log(err);
          });
    }
  }


}
