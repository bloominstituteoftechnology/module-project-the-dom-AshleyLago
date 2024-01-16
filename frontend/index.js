function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in

  let widgets = document.querySelectorAll("section>div");
  widgets.forEach(wid => {
    wid.classList.add("widget");
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget

  let rand = Math.floor(Math.random()*(quotes.length));
  let randQuote = quotes[rand];
  let quote = document.createElement("div");
  let text = randQuote.quote;
  quote.textContent = text;

  let qotd = document.querySelector(".quoteoftheday");
  qotd.appendChild(quote);

  let dateIs = document.createElement("div");
  let {author, date} = randQuote;

  if (date === null) {
    dateIs.textContent = author+" in an unknown date";
  }
  else {
    dateIs.textContent = author+" in "+date;
  }

  qotd.appendChild(dateIs);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  
  let randV = verbs[Math.floor(Math.random()*(verbs.length))];
  let randV2 = verbs[Math.floor(Math.random()*(verbs.length))];
  let randAV = adverbs[Math.floor(Math.random()*(adverbs.length))];
  let randAV2 = adverbs[Math.floor(Math.random()*(adverbs.length))];
  let randN = nouns[Math.floor(Math.random()*(nouns.length))];
  let randN2 = nouns[Math.floor(Math.random()*(nouns.length))];

  let sentenceC = "We need to "+randV+" our "+randN+" "+randAV+" in order to "+randV2+" our "+randN2+" "+randAV2+".";
  let corpSpeak = document.createElement("p");
  corpSpeak.textContent = sentenceC;
  document.querySelector(".corporatespeak").appendChild(corpSpeak);

  // 👉 TASK 4 - Build a "Countdown" widget
  
  let cDWid = document.querySelector(".countdown");
  let count = 5;
  let countdown = document.createElement("p");
  countdown.textContent = "T-minus "+count+"...";
  cDWid.appendChild(countdown);
  
  let i4 = setInterval(() => {
    if (count === 1) {
      countdown.textContent = "Liftoff! 🚀"
      clearInterval(i4);
    }
    else {
      count--;
      countdown.textContent = "T-minus "+count+"...";
    }
  }, 999);

  // 👉 TASK 5 - Build a "Friends" widget

  let per = people[Math.floor(Math.random()*(people.length))];
  let perSent = document.createElement("p");
  document.querySelector(".friends").appendChild(perSent);
  let year = per.dateOfBirth.split("-")[0];
  let sentence = per.fname+" "+per.lname+" was born in "+year+" and ";
  
  if (per.friends.length) {
    sentence += "is friends with ";
    for (let idx=0; idx<per.friends.length; idx++) {
      let fI = per.friends[idx];
      let friendNum = people.find(p => p.id === fI);
      let fullName = friendNum.fname+" "+friendNum.lname;
      let last = idx === per.friends.length - 1;
      let next = idx === per.friends.length - 2;
      if (last) {
        sentence += fullName+".";
      }
      else if (next) {
        sentence += fullName+" and ";
      }
      else {
        sentence += fullName+", ";
      }
    }
  }
  else {
    sentence += "has no friends.";
  }

  perSent.textContent = sentence;

  // 👉 TASK 6 - Make it so user can tab through the widgets

  widgets.forEach((x,i) => {
    x.setAttribute("tabindex",i+1);
  });

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
