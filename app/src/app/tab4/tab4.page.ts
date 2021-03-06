import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cảnh báo!',
      message: 'Bạn có chắc rằng mình muốn hủy đơn hàng này ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('không hủy đơn hàng nữa do lúc nãy còn bồng bột chưa biết suy nghĩ khi mua hàng !!');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('chuyển đến trang hủy đơn thành công');
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  } 
}
