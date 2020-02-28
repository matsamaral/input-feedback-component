import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-feedback',
  templateUrl: './input-feedback.component.html',
  styleUrls: ['./input-feedback.component.scss']
})
export class InputFeedbackComponent implements OnInit {

  @Input() id: string;
  @Input() input: FormControl;
  @Input() type: string;
  @Input() validatorsMessages: any[];

  constructor() { }

  ngOnInit() {
  }

}
