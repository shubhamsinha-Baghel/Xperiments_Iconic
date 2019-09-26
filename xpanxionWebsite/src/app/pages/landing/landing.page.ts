import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostPage } from '../post/post.page';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  recentPost:any[];
  constructor(public modalController: ModalController) { 
    this.recentPost = [
      {
          "postImage":"post1.PNG",
          "userImg":"",
          "title":"Family League",
          "by":"Xcite",
          "description":"The Ultimate Weekend Is Coming - 6 July 2019 I Super Family League",
          "postdate":"03rd March, 2019"
      },
        {
          "postImage":"post2.PNG",
          "userImg":"",
          "title":"Holi",
          "by":"Xcite",
          "description":"HOLI CELEBRATIONS - 21st March 2019",
          "postdate":"21st March, 2019"
      },
      {
        "postImage":"post3.PNG",
        "userImg":"",
        "title":"Yash theme",
        "by":"Xcite",
        "description":"Yash'19: Office Decor",
        "postdate":"27th January, 2019"
    },
      {
          "postImage":"post4.PNG",
          "userImg":"",
          "title":"Art of Story Telling",
          "by":"Learning & Development",
          "description":"Session on : The Art Of Story Telling",
          "postdate":"18th September, 2019"
      },
      {
          "postImage":"post5.PNG",
          "userImg":"",
          "title":"PRERNA INSIGHTS",
          "by":"Prerna",
          "description":"WATER HEROES  2019",
          "postdate":"24th May, 2019"
      },
      {
          postImage:'post6.PNG',
          userImg:"",
          title:"we are hiring",
          by:"TMG",
          description:"Bring Your Buddies - \"Program Manager\"",
          postdate:"24th May, 2019"
      }
    ]
  }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PostPage
    });
    return await modal.present();
  }
  likePost(id){

  }
  bookmerkPost(id){

  }

}
