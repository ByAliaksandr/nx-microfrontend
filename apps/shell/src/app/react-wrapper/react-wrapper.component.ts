import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-microfrontend-react-wrapper',
  templateUrl: './react-wrapper.component.html',
  styleUrls: ['./react-wrapper.component.scss'],
})
export class ReactWrapperComponent implements OnInit {
  ngOnInit(): void {
    import('mfe2/App').then((data) => {
      console.log(data);
    });
  }
}
