import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {



          ngAfterViewInit(){
            $(".post-module").hover(function () {
              /*$(this).find(".description").stop().animate(
                {
                  height: "toggle",
                  opacity: "toggle"
                },
                300
              );*/
            });
          }

  constructor() { }

  ngOnInit(): void {


  }

}
