import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  template: `
  <div class="py-5 text-center">
  <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
  <h2>Checkout form</h2>
  <p class="lead">Bbuilt entp has a validation state that can be triggered by attempting to submit the form without completing it.</p>
</div>
  `,
  styles: []
})
export class InfoBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
