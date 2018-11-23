import {Component, Inject, Input, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "quiz-search",
  templateUrl: './quiz-search.component.html',
  styleUrls: ['./quiz-search.component.css']
})

export class QuizSearchComponent {
  @Input() class: string;
  @Input() placeholder: string;
}
