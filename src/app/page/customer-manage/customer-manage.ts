import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer {
  name: String;
  email: String;
  phone: String;
}

@Component({
  selector: 'app-customer-manage',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-manage.html',
  styleUrl: './customer-manage.css',
})
export class CustomerManage {
  customer: Customer = {
    name: '',
    email: '',
    phone: '',
  };

  customers: Customer[] = [];

  save() {
    this.customers.push(this.customer);
    this.customer={
      name: '',
      email: '',
      phone: '',  
    }
    console.log(this.customers);
  }
}
