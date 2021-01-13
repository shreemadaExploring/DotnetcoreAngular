import { Component, OnInit } from '@angular/core';
import { BookDetailsServiceService } from '../../shared/book-details/book-details-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { BookDetails } from '../../shared/book-details/book-details.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(public service: BookDetailsServiceService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
    if (form != null) {
      form.form.reset();
    }

    this.service.formData = {
      Id: 0,
      Name: '',
      Author: '',
      BookAvailability: 0
    };
  //  this.service.formData = null;
  }

  onSubmit(form: NgForm): void {
    if (this.service.formData.Id === 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm): void {
    this.service.post().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Book Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm): void {
    this.service.put().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Book Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

}
