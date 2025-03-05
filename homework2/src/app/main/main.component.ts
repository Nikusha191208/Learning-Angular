import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {

  quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "People who are crazy enough to think they can change the world, are the ones who do.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk.",
    "We may encounter many defeats but we must not be defeated.",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Creativity is intelligence having fun.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Do what you can with all you have, wherever you are.",
    "You are never too old to set another goal or to dream a new dream.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The road to success and the road to failure are almost exactly the same.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Believe you can and you're halfway there.",
    "Work hard in silence, let success make the noise.",
    "Opportunities don't happen. You create them.",
    "Do what you feel in your heart to be right – for you'll be criticized anyway.",
    "The secret of getting ahead is getting started.",
    "Only put off until tomorrow what you are willing to die having left undone.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The way to get started is to quit talking and begin doing.",
    "Everything you've ever wanted is on the other side of fear.",
    "If you genuinely want something, don't wait for it – teach yourself to be impatient.",
    "Dream big and dare to fail.",
    "It does not matter how slowly you go as long as you do not stop.",
    "If you want to lift yourself up, lift up someone else.",
    "Success is getting what you want. Happiness is wanting what you get.",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "Do one thing every day that scares you.",
    "You don’t have to be great to start, but you have to start to be great.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The successful warrior is the average man, with laser-like focus.",
    "Don't watch the clock; do what it does. Keep going.",
    "Try not to become a person of success, but rather try to become a person of value.",
    "A goal is a dream with a deadline.",
    "You may have to fight a battle more than once to win it.",
    "I never dreamed about success, I worked for it.",
    "Difficulties in life are intended to make us better, not bitter.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "You are what you do, not what you say you’ll do.",
    "It always seems impossible until it’s done.",
    "Great things never come from comfort zones.",
    "The only place where success comes before work is in the dictionary.",
    "Hustle in silence and let your success make the noise."
  ]

  quoteNumber = Math.round(Math.random() * this.quotes.length)

  genQuote(){
    this.quoteNumber = Math.round(Math.random() * this.quotes.length)
  }

}
