import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  urlImagem: any = 'https://www.hotsellstyle.com/media/wysiwyg/infortis/slideshow/nike-banner-2.jpg';

  getValor(){
    return 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
