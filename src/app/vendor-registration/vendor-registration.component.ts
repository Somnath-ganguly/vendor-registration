import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ConfirmationService, MessageService } from 'primeng/api';

// interface District {
//   name: string;
//   code: string;
// }
@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class VendorRegistrationComponent implements OnInit {

  vendorForm : FormGroup;



  Districts : any =[];
  WorkingDistricts : any =[];
  BankDetails : any =[];
  constructor(private fb: FormBuilder,private messageService: MessageService,private confirmationService: ConfirmationService) {
    this.vendorForm = this.fb.group({
      gstin: ['', Validators.required],
      confirmGstin: ['', Validators.required],
      vendorName: ['', Validators.required],
      vendorOwnerName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      homeDistrict: ['', Validators.required],
      town: ['', Validators.required],
      ifsc: ['', Validators.required],
      accountNumber: ['', Validators.required],
      confirmAccountNumber: ['', Validators.required],
      workingDistrict: ['', Validators.required],
      address: ['', Validators.required],
      bankDetails: ['', Validators.required],
      uploadGstinDoc: [null, Validators.required]
    });
  }

  ngOnInit(): void{
    this.Districts = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  this.WorkingDistricts = [
    {name: 'Amsterdam', code: 'A'},
    {name: 'Berlin', code: 'B'},
    {name: 'Chicago', code: 'C'},
    {name: 'Stuttgart', code: 'S'},
    {name: 'Erlangen', code: 'E'}
  ];
  this.BankDetails = [
    {name: 'HDFC', code: 'HDFC'},
    {name: 'ICICI', code: 'ICICI'},
    {name: 'SBI', code: 'SBI'},
    {name: 'KOTAK', code: 'KOTAK'},
    {name: 'BOI', code: 'BOI'}
  ];
  }

  onSubmit() {
    //debugger;
    //this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted',life:1000 });
   // console.log(this.vendorForm.value);
   this.confirmationService.confirm({
    header: 'Confirmation',
    message: 'Please confirm to proceed moving forward.',
    acceptIcon: 'pi pi-check mr-2',
    rejectIcon: 'pi pi-times mr-2',
    rejectButtonStyleClass: 'p-button-sm',
    acceptButtonStyleClass: 'p-button-outlined p-button-sm',
    accept: () => {
        console.log(this.vendorForm.value);
        localStorage.setItem('VendorForm', JSON.stringify(this.vendorForm.value));
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    },
    reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
});
}

}
    




