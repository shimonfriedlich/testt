import { Component, OnInit,Input } from '@angular/core';
import {Question} from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() questionProp: Question;
  constructor() { }

  ngOnInit() {
    console.log(this.questionProp);
  }

}
