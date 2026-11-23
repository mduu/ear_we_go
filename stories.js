/*
 * Ear We Go! – content
 *
 * Question types:
 *   mc  – multiple choice. The FIRST option in "o" is the correct one (the app shuffles them).
 *   tf  – true / false statement. "a" is true or false.
 *   gap – fill in the gap. "q" contains ___ and "accept" lists all accepted answers (lower case).
 * "why" is the short explanation shown after checking.
 *
 * Text rules: no abbreviations with dots (write "Mr Hill", not "Mr. Hill"),
 * because the app reads sentence by sentence.
 */
window.EWG_MODULES = [
  {
    id: 'm1',
    name: 'Easy Listening',
    level: 'A2',
    blurb: 'Short texts about everyday life. A good warm-up.',
    sessions: [
      {
        id: 'lost-phone',
        title: 'The lost phone',
        kind: 'Phone call',
        intro: 'Emma calls the lost property office at the train station.',
        speakers: { A: { name: 'Clerk', g: 'm' }, B: { name: 'Emma', g: 'f' } },
        lines: [
          { s: 'A', t: 'Good afternoon. Lost property office. How can I help you?' },
          { s: 'B', t: 'Hi. I think I left my phone on the train this morning.' },
          { s: 'A', t: 'Oh dear. Which train was it?' },
          { s: 'B', t: 'The eight fifteen from Oxford to London.' },
          { s: 'A', t: 'OK. And what does your phone look like?' },
          { s: 'B', t: 'It\'s black, and it has a green case with a little cat sticker on the back.' },
          { s: 'A', t: 'A green case with a cat sticker. Where were you sitting?' },
          { s: 'B', t: 'In the last carriage, next to the window.' },
          { s: 'A', t: 'Just a moment, please. Yes! You\'re lucky. A cleaner found it under the seat.' },
          { s: 'B', t: 'Oh, thank you so much! Can I come and get it today?' },
          { s: 'A', t: 'Of course. We\'re open until six o\'clock. Please bring your student card with you.' },
          { s: 'B', t: 'Great. I\'ll be there at five. Thanks again!' }
        ],
        vocab: [
          ['lost property office', 'Fundbüro'], ['carriage', 'Zugwagen'], ['case', 'Hülle'],
          ['sticker', 'Aufkleber'], ['cleaner', 'Reinigungskraft'], ['to be lucky', 'Glück haben']
        ],
        questions: [
          { t: 'mc', q: 'Where did Emma lose her phone?', o: ['On the train', 'On the bus', 'At school'], why: 'She says: "I think I left my phone on the train this morning."' },
          { t: 'mc', q: 'When did her train leave?', o: ['At 8:15', 'At 8:50', 'At 7:15'], why: 'It was "the eight fifteen from Oxford to London".' },
          { t: 'mc', q: 'What is on the back of the phone case?', o: ['A cat sticker', 'A dog sticker', 'A green star'], why: 'The green case has "a little cat sticker on the back".' },
          { t: 'tf', q: 'Emma was sitting next to the door.', a: false, why: 'She was sitting "in the last carriage, next to the window".' },
          { t: 'mc', q: 'Who found the phone?', o: ['A cleaner', 'The train driver', 'Another passenger'], why: '"A cleaner found it under the seat."' },
          { t: 'gap', q: 'The office is open until ___ o\'clock.', accept: ['six', '6'], why: '"We\'re open until six o\'clock."' },
          { t: 'mc', q: 'What must Emma bring with her?', o: ['Her student card', 'Her passport', 'Her train ticket'], why: '"Please bring your student card with you."' }
        ]
      },
      {
        id: 'change-of-plan',
        title: 'Change of plan',
        kind: 'Voicemail',
        intro: 'Mia leaves a message on her friend Lily\'s phone about Saturday.',
        speakers: { A: { name: 'Mia', g: 'f' } },
        lines: [
          { s: 'A', t: 'Hi Lily, it\'s Mia. I\'m sorry, but we have to change our plan for Saturday. My mum needs the car in the morning, so she can\'t drive us to the swimming pool.' },
          { s: 'A', t: 'But I have another idea. Let\'s go to the cinema in the afternoon. The new space film starts at half past three. Tickets cost seven pounds, but on Saturdays students pay only five.' },
          { s: 'A', t: 'We can take the number twelve bus from your street. Let\'s meet at the bus stop at quarter to three. Oh, and don\'t eat too much at lunch, because I\'m bringing popcorn from home.' },
          { s: 'A', t: 'My brother Ben wants to come too. I hope that\'s OK. Call me back tonight, but not before eight, because I have a piano lesson. Bye!' }
        ],
        vocab: [
          ['to change a plan', 'einen Plan ändern'], ['half past three', 'halb vier'], ['quarter to three', 'Viertel vor drei'],
          ['bus stop', 'Bushaltestelle'], ['to call back', 'zurückrufen'], ['piano lesson', 'Klavierstunde']
        ],
        questions: [
          { t: 'mc', q: 'Why can\'t the girls go to the swimming pool?', o: ['Mia\'s mum needs the car', 'The pool is closed', 'Mia is ill'], why: 'Her mum needs the car, "so she can\'t drive us to the swimming pool".' },
          { t: 'mc', q: 'When does the film start?', o: ['At 3:30', 'At 2:45', 'At 3:00'], why: 'The film "starts at half past three". Quarter to three is when they meet.' },
          { t: 'gap', q: 'On Saturdays, students pay only ___ pounds.', accept: ['five', '5'], why: 'Tickets cost seven pounds, "but on Saturdays students pay only five".' },
          { t: 'mc', q: 'Which bus can they take?', o: ['Number 12', 'Number 20', 'Number 7'], why: '"We can take the number twelve bus from your street."' },
          { t: 'tf', q: 'Mia wants to buy popcorn at the cinema.', a: false, why: 'She is "bringing popcorn from home".' },
          { t: 'mc', q: 'Who else wants to come?', o: ['Mia\'s brother', 'Lily\'s brother', 'Mia\'s mum'], why: '"My brother Ben wants to come too."' },
          { t: 'mc', q: 'When should Lily call back?', o: ['Tonight after eight', 'Tonight before eight', 'Tomorrow morning'], why: '"Call me back tonight, but not before eight."' }
        ]
      },
      {
        id: 'class-trip',
        title: 'The class trip',
        kind: 'Announcement',
        intro: 'Mr Hill, a teacher, tells his class about next week\'s trip.',
        speakers: { A: { name: 'Mr Hill', g: 'm' } },
        lines: [
          { s: 'A', t: 'Good morning, everyone. Please listen carefully. Next Thursday we are going on our class trip to the Treetop Climbing Park.' },
          { s: 'A', t: 'We meet in front of the school at half past seven. Please don\'t be late, because the bus leaves at quarter to eight and it will not wait. The journey takes about one hour.' },
          { s: 'A', t: 'At the park, an instructor will show us how to use the ropes safely. Wear sports shoes and long trousers. No sandals, please! Bring a packed lunch and a bottle of water.' },
          { s: 'A', t: 'You don\'t need any money, because the school pays for the tickets. But you can bring a little pocket money for an ice cream. Phones stay in your bags while we are climbing.' },
          { s: 'A', t: 'If it rains, we will go to the science museum instead. We will be back at school at four o\'clock. Any questions?' }
        ],
        vocab: [
          ['class trip', 'Klassenausflug'], ['journey', 'Fahrt'], ['rope', 'Seil'], ['safely', 'sicher'],
          ['packed lunch', 'Lunchpaket'], ['pocket money', 'Taschengeld'], ['instead', 'stattdessen']
        ],
        questions: [
          { t: 'mc', q: 'On which day is the class trip?', o: ['Thursday', 'Tuesday', 'Friday'], why: '"Next Thursday we are going on our class trip."' },
          { t: 'mc', q: 'When does the bus leave?', o: ['At 7:45', 'At 7:30', 'At 8:15'], why: 'They meet at half past seven, but "the bus leaves at quarter to eight".' },
          { t: 'gap', q: 'The journey takes about ___ hour.', accept: ['one', '1', 'an', 'a'], why: '"The journey takes about one hour."' },
          { t: 'mc', q: 'What should the students wear?', o: ['Sports shoes and long trousers', 'Sandals and shorts', 'Their school uniform'], why: '"Wear sports shoes and long trousers. No sandals, please!"' },
          { t: 'tf', q: 'The students have to pay for their tickets.', a: false, why: '"You don\'t need any money, because the school pays for the tickets."' },
          { t: 'mc', q: 'What happens if it rains?', o: ['They go to the science museum', 'They stay at school', 'The trip is one week later'], why: '"If it rains, we will go to the science museum instead."' },
          { t: 'mc', q: 'When will the class be back at school?', o: ['At four o\'clock', 'At five o\'clock', 'At three o\'clock'], why: '"We will be back at school at four o\'clock."' }
        ]
      },
      {
        id: 'pizza-problem',
        title: 'Pizza problem',
        kind: 'Phone call',
        intro: 'Sophie phones a pizza restaurant to order dinner.',
        speakers: { A: { name: 'Luca', g: 'm' }, B: { name: 'Sophie', g: 'f' } },
        lines: [
          { s: 'A', t: 'Hello, Pizza Palace. Luca speaking.' },
          { s: 'B', t: 'Hi. I\'d like to order two pizzas, please.' },
          { s: 'A', t: 'Sure. What would you like?' },
          { s: 'B', t: 'One large pizza with mushrooms, and one small pizza with ham and pineapple.' },
          { s: 'A', t: 'I\'m sorry, we have no pineapple today.' },
          { s: 'B', t: 'Oh no. OK, then ham and sweetcorn, please.' },
          { s: 'A', t: 'No problem. Anything to drink?' },
          { s: 'B', t: 'Yes, a big bottle of lemonade, please.' },
          { s: 'A', t: 'Good. That\'s eighteen pounds in total. What\'s your address?' },
          { s: 'B', t: 'Twenty-four Park Road. It\'s the house with the red door.' },
          { s: 'A', t: 'Twenty-four Park Road. Your pizzas will be there in about thirty minutes.' },
          { s: 'B', t: 'Perfect. Oh, one more thing. Please don\'t ring the bell. My baby sister is sleeping. Just knock on the door.' },
          { s: 'A', t: 'OK, I\'ll tell the driver. Enjoy your meal!' }
        ],
        vocab: [
          ['to order', 'bestellen'], ['mushroom', 'Pilz'], ['ham', 'Schinken'], ['pineapple', 'Ananas'],
          ['sweetcorn', 'Mais'], ['in total', 'insgesamt'], ['to ring the bell', 'klingeln'], ['to knock', 'klopfen']
        ],
        questions: [
          { t: 'mc', q: 'How many pizzas does Sophie order?', o: ['Two', 'Three', 'One'], why: '"I\'d like to order two pizzas, please."' },
          { t: 'mc', q: 'What is on the large pizza?', o: ['Mushrooms', 'Ham', 'Pineapple'], why: 'She orders "one large pizza with mushrooms".' },
          { t: 'mc', q: 'Why does Sophie change her order?', o: ['There is no pineapple today', 'She doesn\'t like ham', 'The pizza is too expensive'], why: 'Luca says: "We have no pineapple today."' },
          { t: 'gap', q: 'The order costs ___ pounds in total.', accept: ['eighteen', '18'], why: '"That\'s eighteen pounds in total."' },
          { t: 'mc', q: 'What is Sophie\'s address?', o: ['24 Park Road', '42 Park Road', '24 Park Street'], why: '"Twenty-four Park Road. It\'s the house with the red door."' },
          { t: 'tf', q: 'The pizzas will arrive in about twenty minutes.', a: false, why: 'They will be there "in about thirty minutes".' },
          { t: 'mc', q: 'Why should the driver knock on the door?', o: ['Sophie\'s baby sister is sleeping', 'The bell is broken', 'The dog hates the bell'], why: '"Please don\'t ring the bell. My baby sister is sleeping."' }
        ]
      }
    ]
  },
  {
    id: 'm2',
    name: 'Turn It Up',
    level: 'A2+',
    blurb: 'Longer texts with more details to catch.',
    sessions: [
      {
        id: 'animal-shelter',
        title: 'At the animal shelter',
        kind: 'Radio interview',
        intro: 'A radio presenter talks to Priya, who helps at an animal shelter.',
        speakers: { A: { name: 'Tom', g: 'm' }, B: { name: 'Priya', g: 'f' } },
        lines: [
          { s: 'A', t: 'Welcome to Teen Talk on Radio Riverside. My guest today is Priya. She is fourteen and she helps at an animal shelter. Priya, how often do you go there?' },
          { s: 'B', t: 'Twice a week. Every Wednesday after school and every Saturday morning.' },
          { s: 'A', t: 'And what do you do there?' },
          { s: 'B', t: 'Lots of things. I clean the cages, I give the cats fresh water and I walk the dogs. Walking the dogs is my favourite job.' },
          { s: 'A', t: 'Is there anything you don\'t like?' },
          { s: 'B', t: 'Well, cleaning the cages is not much fun, and it smells terrible. But somebody has to do it.' },
          { s: 'A', t: 'How many animals live at the shelter?' },
          { s: 'B', t: 'At the moment about forty. Most of them are cats, but we also have dogs, rabbits and even a parrot called Captain. He can say good morning in three languages!' },
          { s: 'A', t: 'Wow. Why did you start working there?' },
          { s: 'B', t: 'Two years ago we got our dog Bella from the shelter. I saw how much work the people do, and I wanted to help.' },
          { s: 'A', t: 'Do you get any money for it?' },
          { s: 'B', t: 'No, I\'m a volunteer. But when a sad animal finds a new family, that\'s better than money.' },
          { s: 'A', t: 'And what are your plans for the future?' },
          { s: 'B', t: 'I\'d like to become a vet.' }
        ],
        vocab: [
          ['animal shelter', 'Tierheim'], ['twice a week', 'zweimal pro Woche'], ['cage', 'Käfig'], ['to smell', 'riechen'],
          ['parrot', 'Papagei'], ['volunteer', 'Freiwillige/r'], ['vet', 'Tierärztin / Tierarzt']
        ],
        questions: [
          { t: 'mc', q: 'How often does Priya go to the shelter?', o: ['Twice a week', 'Once a week', 'Every day'], why: '"Twice a week. Every Wednesday after school and every Saturday morning."' },
          { t: 'mc', q: 'What is her favourite job?', o: ['Walking the dogs', 'Feeding the cats', 'Cleaning the cages'], why: '"Walking the dogs is my favourite job."' },
          { t: 'gap', q: 'At the moment, about ___ animals live at the shelter.', accept: ['forty', '40', 'fourty'], why: '"At the moment about forty."' },
          { t: 'mc', q: 'What is special about Captain, the parrot?', o: ['He can say good morning in three languages', 'He can sing three songs', 'He is forty years old'], why: '"He can say good morning in three languages!"' },
          { t: 'mc', q: 'Why did Priya start helping at the shelter?', o: ['Her family got their dog from there', 'Her teacher asked her to help', 'She needed pocket money'], why: 'They got their dog Bella from the shelter, and she saw how much work the people do.' },
          { t: 'tf', q: 'Priya earns a little money at the shelter.', a: false, why: '"No, I\'m a volunteer." A volunteer works without pay.' },
          { t: 'mc', q: 'What would Priya like to be in the future?', o: ['A vet', 'A radio presenter', 'A dog trainer'], why: '"I\'d like to become a vet."' }
        ]
      },
      {
        id: 'skatepark',
        title: 'Skatepark dreams',
        kind: 'Radio report',
        intro: 'A radio reporter tells the story of a new skatepark in a small town.',
        speakers: { A: { name: 'Reporter', g: 'f' } },
        lines: [
          { s: 'A', t: 'And now some good news from the small town of Millbrook. For years, the young people there had nowhere to skate. They used the car park behind the supermarket, but the shop owners were not happy about it.' },
          { s: 'A', t: 'Last spring, fifteen-year-old Jake Turner decided to do something. He wrote a letter to the mayor and asked for a real skatepark. The mayor liked the idea, but she said the town could only pay half of the money.' },
          { s: 'A', t: 'So Jake and his friends started to collect the rest. They washed cars, sold home-made cakes and organised a big concert in the school hall. More than three hundred people came to the concert. In six months the group collected nine thousand pounds.' },
          { s: 'A', t: 'The building work started in October, and last Saturday the skatepark finally opened. Jake was the first person to ride down the big ramp. I was so nervous that I nearly fell off my board, he told us, laughing.' },
          { s: 'A', t: 'The park is free for everyone and it is open every day until nine in the evening. Helmets are a must.' }
        ],
        vocab: [
          ['car park', 'Parkplatz'], ['owner', 'Besitzer/in'], ['to decide', 'entscheiden'], ['mayor', 'Bürgermeister/in'],
          ['to collect money', 'Geld sammeln'], ['home-made', 'selbst gemacht'], ['nearly', 'beinahe'], ['helmet', 'Helm']
        ],
        questions: [
          { t: 'mc', q: 'Where did the young people skate before?', o: ['In a car park', 'In the school playground', 'In the town square'], why: '"They used the car park behind the supermarket."' },
          { t: 'mc', q: 'What did Jake do first?', o: ['He wrote a letter to the mayor', 'He organised a concert', 'He washed cars'], why: '"He wrote a letter to the mayor and asked for a real skatepark."' },
          { t: 'mc', q: 'How much of the money could the town pay?', o: ['Half of it', 'All of it', 'None of it'], why: 'The mayor said "the town could only pay half of the money".' },
          { t: 'tf', q: 'Jake and his friends sold home-made pizzas.', a: false, why: 'They "sold home-made cakes".' },
          { t: 'gap', q: 'More than ___ hundred people came to the concert.', accept: ['three', '3'], why: '"More than three hundred people came to the concert."' },
          { t: 'mc', q: 'How much money did the group collect?', o: ['9,000 pounds', '6,000 pounds', '19,000 pounds'], why: '"In six months the group collected nine thousand pounds."' },
          { t: 'mc', q: 'Why did Jake nearly fall off his board?', o: ['He was very nervous', 'The ramp was wet', 'His board was broken'], why: '"I was so nervous that I nearly fell off my board."' }
        ]
      },
      {
        id: 'edinburgh',
        title: 'A rainy day in Edinburgh',
        kind: 'Story',
        intro: 'Hannah talks about one day of her family holiday in Scotland.',
        speakers: { A: { name: 'Hannah', g: 'f' } },
        lines: [
          { s: 'A', t: 'Last summer my family and I spent a week in Scotland. On the third day we wanted to climb a hill called Arthur\'s Seat, but when we woke up, it was raining heavily. My dad looked out of the window and said: Change of plan. We\'re going to the castle.' },
          { s: 'A', t: 'Edinburgh Castle is very old and stands on a rock high above the city. We bought our tickets and joined a tour. Our guide was a funny man in a kilt. He told us stories about kings, queens and ghosts.' },
          { s: 'A', t: 'At one o\'clock exactly, there was a terribly loud bang. My little brother Finn was so scared that he dropped his sandwich. The guide laughed and explained that they fire a big gun at one o\'clock. In the past, it helped the sailors to set their clocks.' },
          { s: 'A', t: 'After the tour we were cold and wet, so we went to a small café and drank hot chocolate. In the afternoon the sun came out at last. We climbed Arthur\'s Seat after all, and the view over the city and the sea was fantastic. It was the best day of the holiday.' }
        ],
        vocab: [
          ['castle', 'Burg, Schloss'], ['guide', 'Führer/in'], ['kilt', 'Schottenrock'], ['ghost', 'Geist'], ['bang', 'Knall'],
          ['scared', 'erschrocken'], ['sailor', 'Seemann'], ['view', 'Aussicht'], ['after all', 'doch noch']
        ],
        questions: [
          { t: 'mc', q: 'Why didn\'t the family climb the hill in the morning?', o: ['It was raining heavily', 'They were too tired', 'The hill was closed'], why: '"When we woke up, it was raining heavily."' },
          { t: 'mc', q: 'What was the guide wearing?', o: ['A kilt', 'A uniform', 'A raincoat'], why: '"Our guide was a funny man in a kilt."' },
          { t: 'mc', q: 'What happened at one o\'clock?', o: ['There was a loud bang', 'The tour ended', 'It started to rain'], why: '"At one o\'clock exactly, there was a terribly loud bang."' },
          { t: 'mc', q: 'What did Finn do?', o: ['He dropped his sandwich', 'He started to cry', 'He ran away'], why: 'He "was so scared that he dropped his sandwich".' },
          { t: 'tf', q: 'In the past, the gun helped sailors to set their clocks.', a: true, why: '"In the past, it helped the sailors to set their clocks."' },
          { t: 'mc', q: 'What did the family drink in the café?', o: ['Hot chocolate', 'Tea', 'Lemonade'], why: 'They "went to a small café and drank hot chocolate".' },
          { t: 'tf', q: 'The family never climbed Arthur\'s Seat.', a: false, why: '"We climbed Arthur\'s Seat after all" – in the afternoon, when the sun came out.' }
        ]
      },
      {
        id: 'school-radio',
        title: 'Monday news',
        kind: 'School radio',
        intro: 'Zoe and Sam read the news on their school radio.',
        speakers: { A: { name: 'Zoe', g: 'f' }, B: { name: 'Sam', g: 'm' } },
        lines: [
          { s: 'A', t: 'Good morning, Greenfield School! This is Zoe.' },
          { s: 'B', t: 'And this is Sam, with your Monday news.' },
          { s: 'A', t: 'First, sport. Our girls\' football team won the final on Saturday. They beat Westhill School three to one. Congratulations, girls!' },
          { s: 'B', t: 'Great result. Next, the library. It is closed this week because it is getting new shelves and computers. It opens again next Monday. Please return your books then.' },
          { s: 'A', t: 'Now, something for music fans. The school band is looking for a new drummer. If you are interested, come to room fourteen on Wednesday at lunchtime.' },
          { s: 'B', t: 'You don\'t need your own drums, but please bring your own sticks.' },
          { s: 'A', t: 'And don\'t forget the cake sale on Friday. All the money goes to a children\'s hospital. Last year we collected two hundred and fifty pounds.' },
          { s: 'B', t: 'This year we want to reach three hundred. So bake, buy and eat!' },
          { s: 'A', t: 'Finally, the weather. It will be cold and windy today, with rain in the afternoon.' },
          { s: 'B', t: 'So take a jacket for the break. That\'s all from us. Have a great week!' }
        ],
        vocab: [
          ['to beat', 'besiegen'], ['shelf, shelves', 'Regal, Regale'], ['to return', 'zurückbringen'], ['drummer', 'Schlagzeuger/in'],
          ['cake sale', 'Kuchenverkauf'], ['to reach', 'erreichen'], ['break', 'Pause']
        ],
        questions: [
          { t: 'mc', q: 'What was the score in the football final?', o: ['3–1 for Greenfield', '3–1 for Westhill', '3–0 for Greenfield'], why: '"They beat Westhill School three to one."' },
          { t: 'mc', q: 'Why is the library closed this week?', o: ['It is getting new shelves and computers', 'The librarian is ill', 'It is being painted'], why: 'It is closed "because it is getting new shelves and computers".' },
          { t: 'mc', q: 'Who is the school band looking for?', o: ['A drummer', 'A singer', 'A guitar player'], why: '"The school band is looking for a new drummer."' },
          { t: 'gap', q: 'Interested students should come to room ___ on Wednesday.', accept: ['fourteen', '14'], why: '"Come to room fourteen on Wednesday at lunchtime."' },
          { t: 'tf', q: 'You must bring your own drums.', a: false, why: '"You don\'t need your own drums, but please bring your own sticks."' },
          { t: 'mc', q: 'Where does the money from the cake sale go?', o: ['To a children\'s hospital', 'To the school band', 'To the football team'], why: '"All the money goes to a children\'s hospital."' },
          { t: 'mc', q: 'How much money do they want to collect this year?', o: ['300 pounds', '250 pounds', '350 pounds'], why: 'Last year it was 250 pounds. "This year we want to reach three hundred."' }
        ]
      }
    ]
  },
  {
    id: 'm3',
    name: 'Full Volume',
    level: 'B1',
    blurb: 'Opinions, stories and science. Listen for the reasons.',
    sessions: [
      {
        id: 'phones-in-a-box',
        title: 'Phones in a box',
        kind: 'Discussion',
        intro: 'Amy and Noah talk about a new rule at their school.',
        speakers: { A: { name: 'Amy', g: 'f' }, B: { name: 'Noah', g: 'm' } },
        lines: [
          { s: 'A', t: 'Have you heard the news, Noah? From next term, we have to put our phones in a box every morning. We only get them back at the end of the day.' },
          { s: 'B', t: 'Yes, I heard. Honestly, I think it\'s a good idea.' },
          { s: 'A', t: 'You\'re joking! What if I need to call my parents?' },
          { s: 'B', t: 'You can go to the school office. They\'ve always let us use the phone there.' },
          { s: 'A', t: 'That\'s not the same. And I use my phone for learning, too. I look up words and take photos of the board.' },
          { s: 'B', t: 'True, but be honest. How often do you check your messages during a lesson?' },
          { s: 'A', t: 'Well, maybe a few times.' },
          { s: 'B', t: 'Exactly. My cousin\'s school banned phones last year. He says that at first everyone complained. But after a few weeks, people started talking to each other more at break. Some of them even play table tennis again.' },
          { s: 'A', t: 'Hmm. I suppose the breaks are quite boring now. Everybody just stares at a screen.' },
          { s: 'B', t: 'And the teachers say that the marks got better.' },
          { s: 'A', t: 'OK, maybe it\'s not a terrible idea. But I still think older students should be allowed to keep their phones at lunchtime.' },
          { s: 'B', t: 'That sounds fair. Why don\'t you write to the student council and suggest it?' },
          { s: 'A', t: 'You know what? I will.' }
        ],
        vocab: [
          ['term', 'Semester'], ['honestly', 'ehrlich gesagt'], ['to look up', 'nachschlagen'], ['to ban', 'verbieten'],
          ['to complain', 'sich beschweren'], ['to stare at', 'anstarren'], ['marks', 'Noten'], ['to be allowed to', 'dürfen'],
          ['student council', 'Schülerrat'], ['to suggest', 'vorschlagen']
        ],
        questions: [
          { t: 'mc', q: 'What is the new rule?', o: ['Phones stay in a box all day', 'Phones are not allowed in the building', 'Phones are only allowed at break'], why: 'They put their phones in a box every morning and "only get them back at the end of the day".' },
          { t: 'mc', q: 'What does Noah think about the rule at the beginning?', o: ['He thinks it is a good idea', 'He is angry about it', 'He doesn\'t care'], why: '"Honestly, I think it\'s a good idea."' },
          { t: 'mc', q: 'How can students call their parents?', o: ['From the school office', 'With a teacher\'s phone', 'They can\'t call them'], why: '"You can go to the school office."' },
          { t: 'mc', q: 'How does Amy use her phone for learning?', o: ['She looks up words and takes photos of the board', 'She records the lessons', 'She uses it as a calculator'], why: '"I look up words and take photos of the board."' },
          { t: 'tf', q: 'At the cousin\'s school, nobody complained about the ban.', a: false, why: '"At first everyone complained."' },
          { t: 'mc', q: 'What changed at the cousin\'s school after a few weeks?', o: ['Students talked to each other more', 'Students stayed at home more often', 'The breaks got shorter'], why: '"People started talking to each other more at break."' },
          { t: 'mc', q: 'What does Amy want for older students?', o: ['To keep their phones at lunchtime', 'To go home earlier', 'To have their own room'], why: 'She thinks "older students should be allowed to keep their phones at lunchtime".' },
          { t: 'mc', q: 'What is Amy going to do?', o: ['Write to the student council', 'Talk to the head teacher', 'Hide her phone'], why: 'Noah suggests writing to the student council, and Amy says: "I will."' }
        ]
      },
      {
        id: 'night-hike',
        title: 'The night hike',
        kind: 'Story',
        intro: 'Leo tells a story about the last evening at his summer camp.',
        speakers: { A: { name: 'Leo', g: 'm' } },
        lines: [
          { s: 'A', t: 'I have never been as scared as I was last August. I was at a summer camp in Wales, and on the last evening our leaders organised a night hike. We walked through the forest in small groups, with only one torch for each group.' },
          { s: 'A', t: 'My group was me, my best friend Oscar and two girls from London, Ruby and Jas. At first it was fun. We told jokes and looked at the stars. But after about half an hour, Oscar stopped. Did you hear that? he whispered.' },
          { s: 'A', t: 'We listened. Something was moving in the bushes behind us. Then our torch started to flicker, and a few seconds later it went out completely. It was so dark that I couldn\'t see my own hands. Ruby held my arm so tightly that it hurt.' },
          { s: 'A', t: 'The noise came closer and closer. I wanted to run, but my legs wouldn\'t move. Suddenly, something cold and wet touched my hand. I screamed. And then I heard a familiar sound: Woof!' },
          { s: 'A', t: 'It was Biscuit, the camp cook\'s old dog. He had followed us all the way from the camp. Jas found a spare battery in her pocket, and with Biscuit beside us, we walked back, laughing. Nobody at camp ever let me forget that scream.' }
        ],
        vocab: [
          ['hike', 'Wanderung'], ['torch', 'Taschenlampe'], ['to whisper', 'flüstern'], ['bush', 'Busch'], ['to flicker', 'flackern'],
          ['to go out', 'ausgehen (Licht)'], ['tightly', 'fest'], ['to scream', 'schreien'], ['familiar', 'vertraut'], ['spare battery', 'Ersatzbatterie']
        ],
        questions: [
          { t: 'mc', q: 'Where was the summer camp?', o: ['In Wales', 'In Scotland', 'In London'], why: '"I was at a summer camp in Wales." The two girls were from London.' },
          { t: 'mc', q: 'How many torches did each group have?', o: ['One', 'Two', 'One for each person'], why: 'They walked "with only one torch for each group".' },
          { t: 'gap', q: 'There were ___ people in Leo\'s group.', accept: ['four', '4'], why: 'Leo, Oscar, Ruby and Jas: four people.' },
          { t: 'mc', q: 'What did the group hear?', o: ['Something moving in the bushes', 'Somebody screaming', 'Music from the camp'], why: '"Something was moving in the bushes behind us."' },
          { t: 'mc', q: 'What happened to the torch?', o: ['It flickered and went out', 'Leo dropped it', 'Ruby lost it'], why: 'It "started to flicker, and a few seconds later it went out completely".' },
          { t: 'mc', q: 'Why did Leo\'s arm hurt?', o: ['Ruby held it very tightly', 'He fell over', 'A branch hit him'], why: '"Ruby held my arm so tightly that it hurt."' },
          { t: 'mc', q: 'Who or what touched Leo\'s hand?', o: ['The cook\'s dog', 'His friend Oscar', 'A wet leaf'], why: 'It was Biscuit, "the camp cook\'s old dog".' },
          { t: 'tf', q: 'The group had to walk back without any light.', a: false, why: 'Jas found a spare battery in her pocket, so the torch worked again.' }
        ]
      },
      {
        id: 'bike-girl',
        title: 'The girl who fixes bikes',
        kind: 'Radio interview',
        intro: 'A radio presenter interviews Maya, who has her own small business.',
        speakers: { A: { name: 'Dan', g: 'm' }, B: { name: 'Maya', g: 'f' } },
        lines: [
          { s: 'A', t: 'Today on Young and Busy I\'m talking to Maya Collins. She\'s fifteen and she runs her own bike repair service. Maya, how did it all start?' },
          { s: 'B', t: 'By accident, really. Two years ago my own bike broke, and the repair shop wanted sixty pounds. That was too expensive for me, so I watched some videos online and fixed it myself. It took me a whole weekend!' },
          { s: 'A', t: 'And then?' },
          { s: 'B', t: 'Then my neighbour asked me to look at her bike, and after that her friends came too. Now I repair about ten bikes a month in my parents\' garage.' },
          { s: 'A', t: 'What is the most common problem?' },
          { s: 'B', t: 'Flat tyres, definitely. And brakes that don\'t work properly. People often wait too long, and that can be really dangerous.' },
          { s: 'A', t: 'How much do you charge?' },
          { s: 'B', t: 'It depends. A flat tyre costs five pounds. Bigger jobs are more expensive, but I\'m always cheaper than a shop.' },
          { s: 'A', t: 'What do you do with the money?' },
          { s: 'B', t: 'I save most of it. I\'m planning a cycling trip through the Netherlands with my sister next summer. The rest I spend on tools.' },
          { s: 'A', t: 'Is it difficult to do this and school at the same time?' },
          { s: 'B', t: 'Sometimes. I only work on Saturdays, and never before an exam. My mum is very strict about that.' },
          { s: 'A', t: 'Any advice for young people with a business idea?' },
          { s: 'B', t: 'Start small, and don\'t be afraid of mistakes. I put my first wheel on the wrong way round. You learn from it.' }
        ],
        vocab: [
          ['to run a business', 'ein Geschäft führen'], ['by accident', 'zufällig'], ['flat tyre', 'platter Reifen'], ['brakes', 'Bremsen'],
          ['properly', 'richtig'], ['to charge', 'verlangen (Preis)'], ['it depends', 'es kommt darauf an'], ['to save', 'sparen'],
          ['tools', 'Werkzeuge'], ['strict', 'streng'], ['advice', 'Rat']
        ],
        questions: [
          { t: 'mc', q: 'Why did Maya repair her own bike?', o: ['The shop was too expensive', 'The shop was closed', 'Her dad told her to'], why: 'The shop wanted sixty pounds. "That was too expensive for me."' },
          { t: 'gap', q: 'The repair shop wanted ___ pounds.', accept: ['sixty', '60'], why: '"The repair shop wanted sixty pounds."' },
          { t: 'mc', q: 'Who was Maya\'s first customer?', o: ['Her neighbour', 'Her sister', 'Her teacher'], why: '"Then my neighbour asked me to look at her bike."' },
          { t: 'mc', q: 'How many bikes does she repair?', o: ['About ten a month', 'About ten a week', 'About five a month'], why: '"Now I repair about ten bikes a month."' },
          { t: 'mc', q: 'What is the most common problem?', o: ['Flat tyres', 'Broken lights', 'Old chains'], why: '"Flat tyres, definitely."' },
          { t: 'mc', q: 'What is Maya saving her money for?', o: ['A cycling trip through the Netherlands', 'A new racing bike', 'Her own shop'], why: '"I\'m planning a cycling trip through the Netherlands with my sister."' },
          { t: 'mc', q: 'When does Maya work?', o: ['Only on Saturdays', 'Every day after school', 'Only in the holidays'], why: '"I only work on Saturdays, and never before an exam."' },
          { t: 'tf', q: 'Maya has never made a mistake with a bike.', a: false, why: '"I put my first wheel on the wrong way round."' }
        ]
      },
      {
        id: 'tired-teens',
        title: 'Why are teenagers always tired?',
        kind: 'Podcast',
        intro: 'A science podcast answers a question from a thirteen-year-old listener.',
        speakers: { A: { name: 'Presenter', g: 'f' } },
        lines: [
          { s: 'A', t: 'Welcome to Science Snack, the podcast that explains big questions in a few minutes. Today\'s question comes from Daniel, who is thirteen. He asks: Why am I always so tired in the morning? My parents say I\'m lazy.' },
          { s: 'A', t: 'Well, Daniel, here is the good news: you are not lazy. It\'s biology. Our body has a kind of inner clock. It tells us when to feel sleepy and when to wake up. Scientists have found that this clock changes during the teenage years. It moves up to two hours later.' },
          { s: 'A', t: 'So a teenager who goes to bed at ten often can\'t fall asleep until midnight. But school still starts early in the morning, so many teenagers simply don\'t get enough sleep. Experts say that young people between thirteen and eighteen need eight to ten hours a night. Many of them get less than seven. That\'s a problem, because the brain uses sleep to store what we learned during the day.' },
          { s: 'A', t: 'What can you do? First, put your phone away an hour before bedtime. The bright light of the screen tells your brain that it is still daytime. Second, try to get up at the same time every day, even at the weekend. And third, go outside in the morning, because daylight helps to reset your inner clock.' },
          { s: 'A', t: 'Some schools in the United States now start an hour later. And guess what? Their students are not only less tired. They are also late less often and get better marks. Sleep well, Daniel!' }
        ],
        vocab: [
          ['lazy', 'faul'], ['inner clock', 'innere Uhr'], ['sleepy', 'schläfrig'], ['scientist', 'Wissenschaftler/in'],
          ['to fall asleep', 'einschlafen'], ['midnight', 'Mitternacht'], ['brain', 'Gehirn'], ['to store', 'speichern'],
          ['bright', 'hell'], ['screen', 'Bildschirm'], ['daylight', 'Tageslicht']
        ],
        questions: [
          { t: 'mc', q: 'What do Daniel\'s parents say about him?', o: ['That he is lazy', 'That he is ill', 'That he works too much'], why: '"My parents say I\'m lazy."' },
          { t: 'mc', q: 'What changes during the teenage years?', o: ['The inner clock moves later', 'The body needs less sleep', 'The brain stops learning at night'], why: 'The inner clock "moves up to two hours later".' },
          { t: 'gap', q: 'Teenagers need eight to ___ hours of sleep a night.', accept: ['ten', '10'], why: 'They "need eight to ten hours a night".' },
          { t: 'mc', q: 'Why is sleep important for learning?', o: ['The brain stores what we learned', 'The eyes need a rest', 'The body grows at night'], why: '"The brain uses sleep to store what we learned during the day."' },
          { t: 'mc', q: 'Why should you put your phone away before bedtime?', o: ['The bright screen tells the brain it is daytime', 'Messages are too exciting', 'The battery needs to charge'], why: '"The bright light of the screen tells your brain that it is still daytime."' },
          { t: 'tf', q: 'The presenter says you should sleep much longer at the weekend.', a: false, why: 'She says: "Try to get up at the same time every day, even at the weekend."' },
          { t: 'mc', q: 'What helps to reset the inner clock in the morning?', o: ['Daylight', 'A cold shower', 'A big breakfast'], why: '"Go outside in the morning, because daylight helps to reset your inner clock."' },
          { t: 'mc', q: 'What happened at the schools that start later?', o: ['Students are less tired and get better marks', 'Students go to bed even later', 'Teachers complained about it'], why: 'The students are "less tired", "late less often" and "get better marks".' }
        ]
      }
    ]
  }
];
