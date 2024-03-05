import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-welcome3',
  templateUrl: './welcome3.component.html',
  styleUrl: './welcome3.component.css',
})
export class Welcome3Component {
  name="";
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
  }
}
