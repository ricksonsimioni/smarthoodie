import { Component, OnInit } from '@angular/core';
import { HoodieService } from '../hoodie.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

let hash = Date.now() + Math.random().toString(36).substring(2,9);

@Component({
  selector: 'app-create-hoodie',
  templateUrl: './create-hoodie.component.html',
  styleUrls: ['./create-hoodie.component.scss']
})

export class CreateHoodieComponent implements OnInit {
  public hoodieForm: FormGroup;

  constructor(
    public hoodieService: HoodieService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.hoodieForm = this.formBuilder.group({
      hash: [hash + Date.now()],
      status: [false],
    })      
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.hoodieService.createHoodie(this.hoodieForm.value);
    this.router.navigate(['list-hoodies']); 

   };
}