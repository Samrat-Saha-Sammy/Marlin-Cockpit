import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public stepList = [
    {
      no: 1,
      id: 'base_variant',
      icon: 'save.png',
      title: 'Base Variant',
      subTitle: 'Marlin Version Configuration',
    },
    {
      no: 2,
      id: 'firmware_info',
      icon: 'usb.png',
      title: 'Firmware Info',
      subTitle: 'Boot Screen Configuration',
    },
    {
      no: 3,
      id: 'hardware_info',
      icon: 'resistance.png',
      title: 'Hardware Info',
      subTitle: 'Hardware Details Configuration',
    },
    {
      no: 4,
      id: 'extruder_info',
      icon: 'fan.png',
      title: 'Extruder Info',
      subTitle: 'Extruder Details Configuration',
    },
    {
      no: 5,
      id: 'psu_info',
      icon: 'cable.png',
      title: 'PSU Info',
      subTitle: 'PSU Configuration',
    },
    {
      no: 6,
      id: 'temp_info',
      icon: 'cable.png',
      title: 'Thermal Setting',
      subTitle: 'Temperature Configuration',
    },
    // {
    //   no: 4,
    //   icon: '',
    //   title: 'Dimention',
    //   subTitle: 'Overall Printer Size',
    // },
  ];

  @ViewChild('base_variant') base_variant: ElementRef;
  @ViewChild('firmware_info') firmware_info: ElementRef;
  @ViewChild('hardware_info') hardware_info: ElementRef;
  @ViewChild('extruder_info') extruder_info: ElementRef;
  @ViewChild('psu_info') psu_info: ElementRef;
  @ViewChild('temp_info') temp_info: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Method to scroll to target element in DOM
   * @param toElem elementRef
   * @returns void
   */
  public scrollToElem(toElem: number): void {
    this[toElem].nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
