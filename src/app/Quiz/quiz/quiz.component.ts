import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  currentIndex = 0;
  answers: any;
  score = 0;
  totalQuestions: number;
  quizOver: boolean;

  ngOnInit(): void {}

  goPrevious() {
    this.currentIndex--;
  }
  goNext() {
    this.currentIndex++;
    this.updateScore();

    if (this.currentIndex === this.totalQuestions) {
      this.endQuiz();
    }
  }
  endQuiz() {
    this.quizOver = true;
    console.log("scoree:", this.score);
    alert("Quiz Over! Score is " + this.score + "/ " + this.totalQuestions);
  }
  receiveAnswers(receivedAnswers) {
    this.answers = receivedAnswers;
  }

  updateScore() {
    if (this.answers.user_answer === this.answers.correct_answer) {
      this.score++;
    }
  }
  getTotalQuestions(totalQuestions: number) {
    this.totalQuestions = totalQuestions;
  }

  restartQuiz() {
    this.quizOver = false;
    this.score = 0;
    this.currentIndex = 0;
  }
}
