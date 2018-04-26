import {Component, OnInit} from '@angular/core';
import { NavController, NavParams,} from 'ionic-angular';
import cards from '../../providers/data/cards';
import {Card} from '../../providers/Models/cards.interface';

@Component({
  selector: 'page-random-cards',
  templateUrl: 'random-cards.html',
})

export class RandomCardsPage implements OnInit {
  cards: Card[];
  availableCards: Card[];
  randomCard: Card;
  startText: string = "Commencer";
  answerVisible: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  this.cards = [];
  this.randomCard = null;
  this.availableCards = [];
  }

  ngOnInit() {
    this.cards = cards.cards;
    this.cards.forEach(card => card.displayed = false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomCardsPage');
    console.log(this.cards);
  }

  getRandom() {
/*   if (this.availableCards.length === 1) {
      window.alert('Oops, that was our last Card !');
    }
    else*/
    this.answerVisible = false;
    this.availableCards = this.cards.filter(card => !card.displayed);
    let rd = Math.floor(Math.random() * this.availableCards.length);
    this.randomCard = this.availableCards[rd];
    this.cards.find(card => card.id === this.randomCard.id).displayed = true;
    console.log(this.cards);
  }
}
