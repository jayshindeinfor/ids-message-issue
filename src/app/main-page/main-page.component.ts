import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import IdsMessage from 'ids-enterprise-wc/components/ids-message/ids-message';
import IdsMessageService from 'ids-enterprise-wc/components/ids-message/ids-message-service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainPageComponent {
onClickButton(){
  IdsMessageService.show({
    id: 'ids-message-1',
    status: 'info',
    title: 'popup',
    message: `<ids-text>data from ids-text is showing up in popup but not from app-popup component</ids-text><app-popup></app-popup>`,
    width: '100%',
    buttons: [
      {
        id: 'btn-cancel',
        text: 'Cancel',
        click: async (e: Event, message: IdsMessage) => {
          console.info('Cancel clicked', e, message);
        },
        isCancel: true
      },
      {
        id: 'btn-download',
        text: 'Download',
        click: async (e: Event, message: IdsMessage) => {
          console.info('download clicked', e, message);
        },
        isDefault: true
      }
    ]
  });
}
}
