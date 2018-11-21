import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "result-edit",
  templateUrl: './result-edit.component.html',
  styleUrls: ['./result-edit.component.css']
})

export class ResultEditComponent {
  title: string;
  result: Result;
  editMode: boolean;  // this will be TRUE when editing an existing question,
                      // FALSE when creating a new one.

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) {

    // create an empty object from the Result interface
    this.result = <Result>{};
    let id = +this.activatedRoute.snapshot.params["id"];
    // check if we're in edit mode or not
    this.editMode = (this.activatedRoute.snapshot.url[1].path === "edit");

    if (this.editMode) {
      // fetch the quiz from the server
      let url = this.baseUrl + "api/result/" + id;
      this.http.get<Result>(url).subscribe(res => {
        this.result = res;
        this.title = "Edit - " + this.result.Text;
      }, error => console.error(error));
    }
    else {
      this.result.QuizId = id;
      this.title = "Create a new Question";
    }
  }

  onSubmit(result: Result) {
    let url = this.baseUrl + "api/result";
    if (this.editMode) {
      this.http
        .post<Result>(url, result)
        .subscribe(res => {
          let v = res;
          console.log("Result " + v.Id + " has been updated.");
          this.router.navigate(["result/edit", v.QuizId]);
        }, error => console.log(error));
    }
    else {
      this.http
        .put<Result>(url, result)
        .subscribe(res => {
          let v = res;
          console.log("Result " + v.Id + " has been created.");
          this.router.navigate(["quiz/edit", v.QuizId]);
        }, error => console.log(error));
    }
  }

  onBack() {
    this.router.navigate(["quiz/edit", this.result.QuizId]);
  }
}
