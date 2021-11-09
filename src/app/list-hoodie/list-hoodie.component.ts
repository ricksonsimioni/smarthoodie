import { Component, OnInit } from '@angular/core';
import { HoodieService } from '../hoodie.service';
import { Hoodie } from '../hoodie.model';

@Component({
  selector: 'app-list-hoodie',
  templateUrl: './list-hoodie.component.html',
  styleUrls: ['./list-hoodie.component.scss']
})

export class ListHoodieComponent implements OnInit {
  Hoodies: Hoodie[];

  constructor(private hoodieService: HoodieService) { }

  ngOnInit() {
    this.hoodieService.getHoodieList().subscribe(res => {
      this.Hoodies = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Hoodie;
      })
    });    
  }

  removeHoodie = hoodie => this.hoodieService.deleteHoodie(hoodie);
}
