import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'alpha build';
    base: string = "/assets/";
    ads: string[] = [this.base+'1.png', this.base+'2.jpg', this.base+'3.jpg'];
    currentImage: string = "";
    currIndex: number = 1;

    public showAds(){
        setTimeout(() => {
            this.currentImage = this.ads[this.currIndex];

            if(this.currIndex != this.ads.length - 1){
                this.currIndex++;
            }else{
                this.currIndex = 0;
            }

            return this.showAds();
        },1000)
    }
}
