import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { Answer } from '../models/answer';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [
    { 
      id: 0, 
      text: "question 0", 
      answerList: [
        { id: 0, text: "0" }, 
        { id: 1, text: "1" }
      ] 
    },
    { id: 1, text: "question 1", answerList: [{ id: 0, text: "0" }, { id: 1, text: "1" }] },
    { id: 2, text: "question 2", answerList: [{ id: 0, text: "0" }, { id: 1, text: "1" }] }
  ];

  constructor() { }

  ngOnInit() {
  }

}
