import { Component, OnInit } from '@angular/core';
import BotUI, { ButtonActionOption, ButtonObject } from 'botui'

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  public botName: string = "AfterSchool-Bot";
  private bot: any
  public welcomeMessages: string[] = ["Infos sur les cours", "Infos sur les voyages", "Besoin d'un devis", "Test de niveau gratuit", "Besoin de nous contacter"];
  public courseTypes: string[] = ['Etudiants', 'Adultes', 'Entreprise']
  private firstchoice: string | null = null;
  constructor() { }

  async ngOnInit(): Promise<void> {
    this.bot = new BotUI('my-botui-app');
    let firstChoice = (this.welcomeMessage())
    if (firstChoice) {
      console.log(firstChoice)
    }



  }
  async welcomeMessage() {
    try {
      await this.bot.message.add(`Bonjour, je suis ${this.botName}, et je suis là pour répondre à vos questions. Est ce que vous avez besoin d'aide pour un des points suivants ?`)
      let buttons: ButtonActionOption;
      let msgList: ButtonObject[] = [];
      this.welcomeMessages.forEach((msg) => {
        msgList.push({ text: msg, value: msg })
      })
      buttons = { type: 'button', action: msgList }
      console.log(buttons)
      let result = await this.bot.action.button(buttons)
      switch (result) {
        default:
          console.log(result)
          break
      }
      this.selectASchema(result.value)
    } catch (error) {
      console.log(error)
    }

  }
  selectASchema(buttonClicked: string) {
    console.log(buttonClicked)
    switch (buttonClicked) {
      case 'Infos sur les cours':
        this.coursesSchema()
        break;
      case 'Infos sur les voyages':
        this.tripsSchema()
        break;
      case "Besoin d'un devis":
        this.needPricing()
        break;
      case 'Test de niveau gratuit':
        this.needLevelTest()
        break;
      case 'Besoin de nous contacter':
        this.needContact()
        break;
    }
  }
  coursesSchema() {

  }
  tripsSchema() {

  }
  needPricing() {

  }
  needLevelTest() {
    let testUrl: string = "https://www.afterschoollyon.com/test-de-niveau.html"

  }
  needContact() {

  }

}
