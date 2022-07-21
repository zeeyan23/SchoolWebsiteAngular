import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { QuizurlService } from "../quizurl.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
})
export class QuestionComponent implements OnInit, DoCheck {
  questions: any[] = [];
  options:any[]=[]
  @Input() questionIndex: number;
  currentQuestion: string;
  currentOptions: any;
  @Output() answers = new EventEmitter<{
    user_answer: string;
    correct_answer: string;
  }>();
  @Output() totalQuestions = new EventEmitter<number>();
  userAnswer: string;
  correctAnswer: any;
constructor( private quizserve:QuizurlService){}
  ngOnInit(): void {
    // this.questions = [
    //   {
    //     question: "How many days are there in a normal year?",
    //     options: ["366", "365 (not a leap year)", "367", "364"],
    //     answer: "365 (not a leap year)",
    //   },
    //   {
    //     question: "How many colors are there in a rainbow?",
    //     options: ["7", "8", "9", "6"],
    //     answer: "7",
    //   },
    //   {
    //     question: "Which animal is known as the ‘Ship of the Desert?’",
    //     options: ["Lion", "Elephant", "Camel", "Dog"],
    //     answer: "Camel",
    //   },
    //   {
    //     question: "How many letters are there in the English alphabet?",
    //     options: ["36", "25", "23", "26"],
    //     answer: "26",
    //   },
    //   {
    //     question: "How many consonants are there in the English alphabet?",
    //     options: ["20", "15", "21", "18"],
    //     answer: "21",
    //   },
    //   {
    //     question: "How many sides are there in a triangle?",
    //     options: ["Five", "Three", "Six", "Four"],
    //     answer: "Three",
    //   },
    //   {
    //     question: "Which month of the year has the least number of days?",
    //     options: ["January", "February", "March", "April"],
    //     answer: "February",
    //   },
    //   {
    //     question: " What do you call a house made of ice?",
    //     options: ["Igloo", "Hut", "Cave", "Nest"],
    //     answer: "Igloo",
    //   },
    //   {
    //     question: "Which is the largest animal in the world?",
    //     options: ["Bear", "Elephant", "Giraffe", "Blue whale"],
    //     answer: "Blue whale",
    //   },
    //   {
    //     question: "Which festival is called the festival of light?",
    //     options: ["Chathurthi", "Ugadi", "Diwali", "Christmas"],
    //     answer: "Diwali",
    //   },
    // ];
    

    this.getquizDetails();
  }
  
  
  getquizDetails(){
    
    this.quizserve.getQuizDetails().subscribe((res: any) =>{
      console.log(res);
      this.questions = res;
      var quizQuestionSet = [];
      res.forEach(element => {
        this.options = []
        this.options.push(element['optionA'])
        this.options.push(element['optionB'])
        this.options.push(element['optionC'])
        this.options.push(element['optionD'])
        quizQuestionSet.push({
          question: element['question'],
          options: this.options,
          answer: element[element['answer']]
        })
        
      });
      console.log(quizQuestionSet)
      this.questions = quizQuestionSet;
      this.totalQuestions.emit(this.questions.length);
    });
    console.log('reeeeeeeeeee',this.questions);
        
      }

  

  ngDoCheck(): void {
    console.log(this.questions)
    this.currentQuestion = this.questions[this.questionIndex].question;
    this.currentOptions = this.questions[this.questionIndex].options;
  }
  setUserAnswer(option: string) {
    this.userAnswer = option;
    this.correctAnswer = this.questions[this.questionIndex].answer;
    this.answers.emit({
      user_answer: this.userAnswer,
      correct_answer: this.correctAnswer,
    });
  }
}
