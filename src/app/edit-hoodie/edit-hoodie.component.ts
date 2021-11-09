import { Component, OnInit } from '@angular/core';
import { HoodieService } from '../hoodie.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-hoodie',
  templateUrl: './edit-hoodie.component.html',
  styleUrls: ['./edit-hoodie.component.scss']
})

export class EditHoodieComponent implements OnInit {
  
  public editForm: FormGroup;
  hoodieRef: any

  constructor(
    public hoodieService: HoodieService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      hash: [''],
      status: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.hoodieService.getHoodieDoc(id).subscribe(res => {
      this.hoodieRef = res;
      this.editForm = this.formBuilder.group({
        hash: [this.hoodieRef.hash],
        status: [this.hoodieRef.status]
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.hoodieService.updateHoodie(this.editForm.value, id);
    this.router.navigate(['list-hoodies']);
  };

}