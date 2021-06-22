import { Component, OnInit } from '@angular/core';
import BotUI, { ButtonActionOption, ButtonObject } from 'botui'

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  public botName: string = "BernardBot";
  private bot: any
  public welcomeMessages: string[] = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.bot = new BotUI('my-botui-app');
    console.log('isOpen ? ')
    this.welcomeMessage()

  }
  async welcomeMessage() {
    await this.bot.message.add(`Bonjour, je suis ${this.botName}, et je suis là pour répondre à vos questions. Est ce que vous avez besoin d'aide pour un des points suivants ?`)
    let buttons: ButtonActionOption;
    let msgList: ButtonObject[] = [];
    this.welcomeMessages.forEach((msg) => {
      msgList.push({ text: msg, value: 'none' })
    })
    buttons = { type: 'button', action: msgList }
    await this.bot.action.button(buttons)
  }

}
