import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public stepList = [
    {
      stepNo: 1,
      icon: '',
      title: 'Base Variant',
      subTitle: 'Marlin Version Configuration',
    },
    {
      stepNo: 2,
      icon: '',
      title: 'Firmware Info',
      subTitle: 'Boot Screen Configuration',
    },
    {
      stepNo: 3,
      icon: '',
      title: 'Hardware Info',
      subTitle: 'Hardware Details Configuration',
    },
    {
      stepNo: 4,
      icon: '',
      title: 'Dimention',
      subTitle: 'Overall Printer Size',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
