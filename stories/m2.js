/* Ear We Go! – module 2. Format and rules: see stories/base.js */
window.EWG_MODULES.push(
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
      },
      {
        id: 'young-swimmer',
        title: 'Two gold medals',
        kind: 'Radio interview',
        intro: 'A sports presenter talks to Maya, a young swimmer, after a big weekend.',
        speakers: { A: { name: 'Ben', g: 'm' }, B: { name: 'Maya', g: 'f' } },
        lines: [
          { s: 'A', t: 'Welcome to Sports Hour on Radio Northside. My guest today is Maya Clarke. She is fifteen, and last weekend she won two gold medals at the national junior swimming championships. Maya, congratulations! How do you feel?' },
          { s: 'B', t: 'Thank you. I\'m still very tired, but I\'m really happy.' },
          { s: 'A', t: 'When did you start swimming?' },
          { s: 'B', t: 'When I was six. My parents wanted me to learn because we live near the sea. At first I was afraid of the water.' },
          { s: 'A', t: 'How often do you train?' },
          { s: 'B', t: 'Six times a week. Four mornings before school and two afternoons. On those mornings I get up at quarter past five.' },
          { s: 'A', t: 'That sounds terrible.' },
          { s: 'B', t: 'It is, especially in winter. But my dad drives me to the pool, so he has to get up even earlier than me.' },
          { s: 'A', t: 'What was the hardest race last weekend?' },
          { s: 'B', t: 'The two hundred metres. I was third after the first hundred, but then I thought about my coach. She always says: The race is not over until you touch the wall. So I swam faster in the second half and won by half a second.' },
          { s: 'A', t: 'Amazing. What is your next goal?' },
          { s: 'B', t: 'The European junior championships in July. If I train hard, I will make the team. But first I\'m going to sleep for a whole day!' }
        ],
        vocab: [
          ['championship', 'Meisterschaft'], ['medal', 'Medaille'], ['to be afraid of', 'Angst haben vor'], ['to train', 'trainieren'],
          ['especially', 'besonders'], ['coach', 'Trainer/in'], ['to touch', 'berühren'], ['goal', 'Ziel'], ['whole', 'ganz']
        ],
        questions: [
          { t: 'mc', q: 'How many gold medals did Maya win last weekend?', o: ['Two', 'Three', 'Six'], why: '"Last weekend she won two gold medals."' },
          { t: 'mc', q: 'Why did Maya\'s parents want her to learn to swim?', o: ['The family lives near the sea', 'Her mother is a swimming coach', 'The pool is next to her school'], why: '"My parents wanted me to learn because we live near the sea."' },
          { t: 'tf', q: 'At first, Maya was afraid of the water.', a: true, why: '"At first I was afraid of the water."' },
          { t: 'mc', q: 'How often does Maya train?', o: ['Six times a week', 'Four times a week', 'Twice a week'], why: '"Six times a week. Four mornings before school and two afternoons."' },
          { t: 'gap', q: 'On training mornings, Maya gets up at quarter past ___.', accept: ['five', '5'], why: '"On those mornings I get up at quarter past five."' },
          { t: 'mc', q: 'Who takes Maya to the pool in the morning?', o: ['Her dad', 'Her coach', 'Her mum'], why: '"My dad drives me to the pool."' },
          { t: 'mc', q: 'How did Maya win the 200 metres?', o: ['She swam faster in the second half', 'She was first from the start', 'The other swimmers made mistakes'], why: 'She was third after the first hundred, then "swam faster in the second half and won by half a second".' }
        ]
      },
      {
        id: 'toy-museum',
        title: 'Don\'t press the red button',
        kind: 'Audio guide',
        intro: 'You are visiting a toy museum and listening to the audio guide.',
        speakers: { A: { name: 'Audio guide', g: 'f' } },
        lines: [
          { s: 'A', t: 'Welcome to the Wellbury Museum of Toys. I am your audio guide. This building was a shoe factory until nineteen sixty-eight. Today it is the home of more than four thousand toys from all over the world.' },
          { s: 'A', t: 'You are now standing in room one. Look at the glass case on your left. The small wooden horse is the oldest toy in the museum. It is about three hundred years old. A farmer made it for his daughter, and she kept it all her life.' },
          { s: 'A', t: 'Now walk to the big table in the middle of the room. This model railway has got twelve trains, and it took two brothers nine years to build it. Press the green button and the trains will start to move. Please do not press the red button, because it turns off the lights in the whole room.' },
          { s: 'A', t: 'Room two is upstairs. There you can see teddy bears, dolls and the first video games. In most rooms you must not touch the toys, but in room three you can play with everything.' },
          { s: 'A', t: 'The museum café is on the ground floor, next to the shop. It closes at half past four, thirty minutes before the museum. Enjoy your visit!' }
        ],
        vocab: [
          ['factory', 'Fabrik'], ['glass case', 'Vitrine'], ['wooden', 'aus Holz'], ['model railway', 'Modelleisenbahn'], ['to press', 'drücken'],
          ['button', 'Knopf'], ['to turn off', 'ausschalten'], ['upstairs', 'oben, im oberen Stock'], ['ground floor', 'Erdgeschoss']
        ],
        questions: [
          { t: 'mc', q: 'What was the building in the past?', o: ['A shoe factory', 'A toy factory', 'A railway station'], why: '"This building was a shoe factory until nineteen sixty-eight."' },
          { t: 'gap', q: 'The museum has more than ___ thousand toys.', accept: ['four', '4'], why: '"It is the home of more than four thousand toys."' },
          { t: 'mc', q: 'Why did the farmer make the wooden horse?', o: ['It was for his daughter', 'He wanted to sell it', 'It was for the museum'], why: '"A farmer made it for his daughter, and she kept it all her life."' },
          { t: 'mc', q: 'How long did the brothers need to build the model railway?', o: ['9 years', '12 years', '2 years'], why: 'It has twelve trains, and "it took two brothers nine years to build it".' },
          { t: 'mc', q: 'Why should visitors not press the red button?', o: ['The lights in the room go off', 'The trains start to move', 'The glass case opens'], why: '"Do not press the red button, because it turns off the lights in the whole room."' },
          { t: 'tf', q: 'Visitors can play with the toys in room three.', a: true, why: '"In room three you can play with everything."' },
          { t: 'mc', q: 'When does the museum close?', o: ['At 5:00', 'At 4:30', 'At 4:00'], why: 'The café "closes at half past four, thirty minutes before the museum" – so the museum closes at five.' }
        ]
      },
      {
        id: 'lost-dog',
        title: 'Come back, Mabel!',
        kind: 'Story',
        intro: 'Oliver tells the story of a walk in the park that went wrong.',
        speakers: { A: { name: 'Oliver', g: 'm' } },
        lines: [
          { s: 'A', t: 'Last October something terrible happened. Well, it was terrible at first. I was walking our dog Mabel in the park near our house. Mabel is a small black and white dog, and she is afraid of only one thing: loud noises.' },
          { s: 'A', t: 'Suddenly a motorbike drove past. Mabel jumped, pulled the lead out of my hand and ran away through the trees. I ran after her and shouted her name, but she was much faster than me.' },
          { s: 'A', t: 'My mum, my sister and I looked for her until it was dark. The next morning we printed fifty posters with her photo and our phone number, and we put them up all over the town. Two days passed. Nobody called. I couldn\'t eat and I couldn\'t sleep.' },
          { s: 'A', t: 'On the third evening the phone rang. It was Mrs Patel from the bakery in Station Road. She said: I think your dog is in my garden. She has been eating my cat\'s food. We drove there at once. When Mabel saw us, she jumped so high that she knocked my glasses off.' },
          { s: 'A', t: 'We bought Mrs Patel a big box of chocolates to say thank you. And now Mabel wears a new collar with our phone number on it.' }
        ],
        vocab: [
          ['noise', 'Lärm, Geräusch'], ['lead', 'Leine'], ['to pull', 'ziehen'], ['to shout', 'rufen, schreien'], ['to print', 'drucken'],
          ['poster', 'Plakat'], ['bakery', 'Bäckerei'], ['at once', 'sofort'], ['to knock off', 'herunterschlagen'], ['collar', 'Halsband']
        ],
        questions: [
          { t: 'mc', q: 'Where was Oliver walking the dog?', o: ['In the park', 'By the river', 'In Station Road'], why: '"I was walking our dog Mabel in the park near our house."' },
          { t: 'mc', q: 'Why did Mabel run away?', o: ['A loud motorbike drove past', 'She saw a cat in the trees', 'Another dog ran after her'], why: 'She is afraid of loud noises, and "suddenly a motorbike drove past".' },
          { t: 'gap', q: 'The next morning, the family printed ___ posters.', accept: ['fifty', '50', 'fivty'], why: '"The next morning we printed fifty posters with her photo and our phone number."' },
          { t: 'tf', q: 'Somebody called the family on the first day.', a: false, why: '"Two days passed. Nobody called." The phone rang on the third evening.' },
          { t: 'mc', q: 'Who found Mabel?', o: ['A woman from the bakery', 'A man on a motorbike', 'Oliver\'s sister'], why: '"It was Mrs Patel from the bakery in Station Road."' },
          { t: 'mc', q: 'What was Mabel eating in the garden?', o: ['The cat\'s food', 'Bread from the bakery', 'A box of chocolates'], why: '"She has been eating my cat\'s food."' },
          { t: 'mc', q: 'How did the family thank Mrs Patel?', o: ['With a box of chocolates', 'With fifty pounds', 'With a new collar'], why: '"We bought Mrs Patel a big box of chocolates to say thank you."' }
        ]
      },
      {
        id: 'banana-pancakes',
        title: 'Kids in the kitchen',
        kind: 'Cooking show',
        intro: 'Rosie has a young guest on her cooking show. Today he is the cook.',
        speakers: { A: { name: 'Rosie', g: 'f' }, B: { name: 'Leo', g: 'm' } },
        lines: [
          { s: 'A', t: 'Hello and welcome to Kids in the Kitchen. I\'m Rosie, and my guest cook today is Leo, who is thirteen. Leo, what are we going to make?' },
          { s: 'B', t: 'Banana pancakes. They are my little sister\'s favourite breakfast, and they only take fifteen minutes.' },
          { s: 'A', t: 'Perfect. What do we need?' },
          { s: 'B', t: 'Two ripe bananas, two eggs, a cup of flour, a cup of milk and a little butter for the pan.' },
          { s: 'A', t: 'No sugar?' },
          { s: 'B', t: 'No. The bananas are sweet enough. First, mash the bananas in a bowl with a fork. Then add the eggs and the milk and mix everything together.' },
          { s: 'A', t: 'And now the flour?' },
          { s: 'B', t: 'Yes, but slowly, one spoon at a time. If you put it all in at once, you will get lumps.' },
          { s: 'A', t: 'Good tip. The pan is hot. Shall I turn the heat up?' },
          { s: 'B', t: 'No, please don\'t! I did that the first time I made them. They were black outside and still wet inside. My dad ate them anyway, although they tasted awful.' },
          { s: 'A', t: 'Poor Dad. So, medium heat. How long do they need?' },
          { s: 'B', t: 'About two minutes on the first side and one minute on the other.' },
          { s: 'A', t: 'They smell wonderful. What do you put on top?' },
          { s: 'B', t: 'I like yoghurt and blueberries. My sister prefers chocolate sauce, of course.' }
        ],
        vocab: [
          ['ripe', 'reif'], ['flour', 'Mehl'], ['pan', 'Pfanne'], ['to mash', 'zerdrücken'], ['bowl', 'Schüssel'],
          ['lump', 'Klumpen'], ['heat', 'Hitze'], ['awful', 'scheusslich'], ['blueberry', 'Heidelbeere'], ['to prefer', 'lieber mögen']
        ],
        questions: [
          { t: 'mc', q: 'How long does it take to make the pancakes?', o: ['15 minutes', '50 minutes', '2 minutes'], why: '"They only take fifteen minutes."' },
          { t: 'mc', q: 'Why doesn\'t Leo use any sugar?', o: ['The bananas are sweet enough', 'His sister doesn\'t like sugar', 'There is no sugar in the kitchen'], why: '"No. The bananas are sweet enough."' },
          { t: 'tf', q: 'Leo mashes the bananas with a spoon.', a: false, why: '"Mash the bananas in a bowl with a fork." The spoon is for the flour.' },
          { t: 'mc', q: 'Why do you have to add the flour slowly?', o: ['Because you get lumps if you don\'t', 'Because the bowl is very small', 'Because the pan is not hot yet'], why: '"If you put it all in at once, you will get lumps."' },
          { t: 'mc', q: 'What happened the first time Leo made pancakes?', o: ['They were black outside and wet inside', 'They fell out of the hot pan', 'His dad didn\'t want to eat them'], why: 'He turned the heat up: "They were black outside and still wet inside." His dad ate them anyway.' },
          { t: 'gap', q: 'The pancakes need about ___ minutes on the first side.', accept: ['two', '2'], why: '"About two minutes on the first side and one minute on the other."' },
          { t: 'mc', q: 'What does Leo like on top of his pancakes?', o: ['Yoghurt and blueberries', 'Chocolate sauce', 'Butter and sugar'], why: '"I like yoghurt and blueberries. My sister prefers chocolate sauce."' }
        ]
      },
      {
        id: 'camp-blue-lake',
        title: 'Camp Blue Lake',
        kind: 'Advert',
        intro: 'A radio advert for a summer camp in Wales.',
        speakers: { A: { name: 'Announcer', g: 'm' } },
        lines: [
          { s: 'A', t: 'Are you between eleven and fifteen? Are you already bored when you think about the summer holidays? Then listen carefully. Camp Blue Lake is waiting for you!' },
          { s: 'A', t: 'Our camp is in the hills of North Wales, right next to a beautiful lake. Every morning you can choose a different activity: kayaking, climbing, mountain biking or archery. In the afternoons we swim, build rafts and play games in the forest. And in the evenings we sit around the campfire and tell stories under the stars.' },
          { s: 'A', t: 'You will sleep in wooden cabins with five other campers, so you will quickly make new friends. Our cook Maggie makes three hot meals a day, and her pizza is famous. Mobile phones stay in the office during the day, but you can call home every evening between six and seven.' },
          { s: 'A', t: 'A week at Camp Blue Lake costs two hundred and ninety pounds. If you book before the first of May, you will pay only two hundred and fifty. Brothers and sisters get ten per cent off.' },
          { s: 'A', t: 'There are only sixty places each week, and last year July was full by Easter. So don\'t wait. Visit our website today. Camp Blue Lake: the best week of your summer!' }
        ],
        vocab: [
          ['bored', 'gelangweilt'], ['activity', 'Aktivität'], ['archery', 'Bogenschiessen'], ['raft', 'Floss'], ['campfire', 'Lagerfeuer'],
          ['cabin', 'Hütte'], ['meal', 'Mahlzeit'], ['to book', 'buchen'], ['ten per cent off', 'zehn Prozent Rabatt']
        ],
        questions: [
          { t: 'mc', q: 'Who is the camp for?', o: ['Young people aged 11 to 15', 'Young people aged 5 to 11', 'Young people aged 15 to 18'], why: '"Are you between eleven and fifteen?"' },
          { t: 'mc', q: 'What do the campers do in the evenings?', o: ['They sit around the campfire', 'They build rafts on the lake', 'They go mountain biking'], why: '"In the evenings we sit around the campfire and tell stories."' },
          { t: 'mc', q: 'Why will campers quickly make new friends?', o: ['They share a cabin with other campers', 'They cook all the meals together', 'They call each other every evening'], why: '"You will sleep in wooden cabins with five other campers, so you will quickly make new friends."' },
          { t: 'tf', q: 'Campers can use their mobile phones all day.', a: false, why: '"Mobile phones stay in the office during the day, but you can call home every evening."' },
          { t: 'gap', q: 'A week at the camp normally costs ___ pounds.', accept: ['290', 'two hundred and ninety', 'two hundred ninety'], why: '"A week at Camp Blue Lake costs two hundred and ninety pounds."' },
          { t: 'mc', q: 'How can you pay only 250 pounds?', o: ['You book before 1 May', 'You bring a brother or sister', 'You come in July'], why: '"If you book before the first of May, you will pay only two hundred and fifty."' },
          { t: 'mc', q: 'Why should you book soon?', o: ['There are only 60 places each week', 'The price goes up at Easter', 'The camp closes in July'], why: '"There are only sixty places each week, and last year July was full by Easter."' }
        ]
      },
      {
        id: 'exchange-week',
        title: 'A week in a tie',
        kind: 'Talk',
        intro: 'Lena, a Swiss exchange student, speaks to the pupils of an English school.',
        speakers: { A: { name: 'Lena', g: 'f' } },
        lines: [
          { s: 'A', t: 'Hello everyone. My name is Lena, I\'m fourteen and I come from Aarau in Switzerland. Last week I was a guest at your school here in Bristol, and Mrs Grant has asked me to tell you what I think.' },
          { s: 'A', t: 'The first surprise was the uniform. At home we wear what we like, so on Monday morning I felt strange in a tie and a blazer. But by Wednesday I liked it, because I didn\'t have to think about clothes in the morning.' },
          { s: 'A', t: 'The second surprise was the timetable. Your lessons start at ten to nine. Mine start at half past seven, so here I could sleep much longer. But in Switzerland I go home for lunch, and here everybody eats in the canteen. I have never eaten so many chips in my life!' },
          { s: 'A', t: 'My favourite lesson was drama, because we don\'t have that subject at my school. The most difficult one was history. The teacher spoke very fast and I understood only about half.' },
          { s: 'A', t: 'I stayed with Chloe and her family. They were very kind, although their cat slept on my face every night. Next spring Chloe is going to visit me, and I will show her real mountains. Thank you for a wonderful week!' }
        ],
        vocab: [
          ['guest', 'Gast'], ['surprise', 'Überraschung'], ['tie', 'Krawatte'], ['timetable', 'Stundenplan'], ['canteen', 'Mensa'],
          ['drama', 'Theater (Schulfach)'], ['subject', 'Schulfach'], ['kind', 'freundlich'], ['although', 'obwohl']
        ],
        questions: [
          { t: 'mc', q: 'Why did Lena like the uniform by Wednesday?', o: ['She didn\'t have to think about clothes', 'She looked like all her new friends', 'She felt warm in the blazer'], why: '"I liked it, because I didn\'t have to think about clothes in the morning."' },
          { t: 'gap', q: 'Lessons at the English school start at ten to ___.', accept: ['nine', '9'], why: '"Your lessons start at ten to nine. Mine start at half past seven."' },
          { t: 'tf', q: 'In Switzerland, Lena eats lunch in the school canteen.', a: false, why: '"In Switzerland I go home for lunch, and here everybody eats in the canteen."' },
          { t: 'mc', q: 'Why was drama Lena\'s favourite lesson?', o: ['She doesn\'t have it at her school', 'The teacher was very funny', 'She understood every word'], why: '"My favourite lesson was drama, because we don\'t have that subject at my school."' },
          { t: 'mc', q: 'What was the problem in the history lesson?', o: ['The teacher spoke very fast', 'The lesson was very long', 'Lena had no history book'], why: '"The teacher spoke very fast and I understood only about half."' },
          { t: 'mc', q: 'What did the family\'s cat do every night?', o: ['It slept on Lena\'s face', 'It ate Lena\'s chips', 'It woke up the family'], why: '"Their cat slept on my face every night."' },
          { t: 'mc', q: 'What is going to happen next spring?', o: ['Chloe is going to visit Lena', 'Lena is going back to Bristol', 'The class is going to Switzerland'], why: '"Next spring Chloe is going to visit me, and I will show her real mountains."' }
        ]
      },
      {
        id: 'surf-course',
        title: 'Surf\'s up',
        kind: 'Phone call',
        intro: 'Amira phones a surf school to ask about a course.',
        speakers: { A: { name: 'Dan', g: 'm' }, B: { name: 'Amira', g: 'f' } },
        lines: [
          { s: 'A', t: 'Good morning, Sandy Bay Surf School. Dan speaking. How can I help you?' },
          { s: 'B', t: 'Hello. My name is Amira Khan. My cousin and I would like to book a surfing course for beginners next week.' },
          { s: 'A', t: 'How old are you both?' },
          { s: 'B', t: 'I\'m fourteen and my cousin is twelve.' },
          { s: 'A', t: 'No problem. Our courses are for anyone over ten. We have a three-day course from Monday to Wednesday, or a five-day course from Monday to Friday.' },
          { s: 'B', t: 'We wanted the five-day course, but we\'re going home on Friday morning. So the three-day course, please.' },
          { s: 'A', t: 'Fine. Lessons start at half past nine and finish at twelve. Please be here at quarter past nine, because you need time to put on your wetsuits.' },
          { s: 'B', t: 'Do we have to bring our own wetsuits?' },
          { s: 'A', t: 'No, wetsuits and boards are included. Just bring a towel, a swimsuit and sun cream.' },
          { s: 'B', t: 'And how much does it cost?' },
          { s: 'A', t: 'Seventy-five pounds each. So that\'s a hundred and fifty pounds for two.' },
          { s: 'B', t: 'What happens if the weather is bad?' },
          { s: 'A', t: 'We surf in the rain. You\'ll get wet anyway! But if there is a storm, we will move the lesson to the afternoon. One last question. Can you both swim fifty metres?' },
          { s: 'B', t: 'Yes, easily. We\'re both in a swimming club.' },
          { s: 'A', t: 'Then see you on Monday, Amira!' }
        ],
        vocab: [
          ['to book', 'buchen'], ['beginner', 'Anfänger/in'], ['wetsuit', 'Neoprenanzug'], ['included', 'inbegriffen'], ['towel', 'Badetuch'],
          ['sun cream', 'Sonnencreme'], ['storm', 'Sturm'], ['to move', 'verschieben'], ['easily', 'mit Leichtigkeit']
        ],
        questions: [
          { t: 'mc', q: 'Who is going to do the course with Amira?', o: ['Her cousin', 'Her sister', 'Her best friend'], why: '"My cousin and I would like to book a surfing course."' },
          { t: 'mc', q: 'How old must you be to do a course?', o: ['Over 10', 'Over 12', 'Over 14'], why: '"Our courses are for anyone over ten."' },
          { t: 'mc', q: 'Why does Amira book the three-day course?', o: ['They are going home on Friday morning', 'The five-day course is too expensive', 'The five-day course is already full'], why: '"We wanted the five-day course, but we\'re going home on Friday morning."' },
          { t: 'mc', q: 'Why should the girls arrive at 9:15?', o: ['They need time to put on their wetsuits', 'The lesson starts at that time', 'They have to pay before the lesson'], why: '"Please be here at quarter past nine, because you need time to put on your wetsuits."' },
          { t: 'tf', q: 'The girls have to bring their own wetsuits.', a: false, why: '"No, wetsuits and boards are included."' },
          { t: 'gap', q: 'The course costs ___ pounds for one person.', accept: ['seventy-five', '75', 'seventy five', 'seventyfive'], why: '"Seventy-five pounds each." A hundred and fifty is the price for two.' },
          { t: 'mc', q: 'What happens if there is a storm?', o: ['The lesson moves to the afternoon', 'The girls get their money back', 'They surf in the morning anyway'], why: '"If there is a storm, we will move the lesson to the afternoon."' }
        ]
      },
      {
        id: 'london-vlog',
        title: 'London on a budget',
        kind: 'Vlog',
        intro: 'Ruby is making a video about her day in London.',
        speakers: { A: { name: 'Ruby', g: 'f' } },
        lines: [
          { s: 'A', t: 'Hi guys, it\'s Ruby. Today I\'m in London with my aunt Kate, and I\'m going to show you how to have a great day here without spending too much money.' },
          { s: 'A', t: 'It\'s ten o\'clock and we\'ve just arrived at the Natural History Museum. The best thing about it? It\'s free! Look up. That is the skeleton of a blue whale, and it is twenty-five metres long. I have never felt so small.' },
          { s: 'A', t: 'Now it\'s lunchtime. We wanted to eat in the museum café, but a sandwich there costs eight pounds. So we bought sandwiches in a supermarket for three pounds, and we\'re having a picnic in Hyde Park. A squirrel has already tried to steal my crisps.' },
          { s: 'A', t: 'Next stop: the London Eye. This is the only expensive thing today, so I paid for my ticket with my birthday money. We queued for forty minutes, and the ride takes thirty minutes. But the view is amazing. I can see Big Ben and the river. Aunt Kate is keeping her eyes closed because she is afraid of heights.' },
          { s: 'A', t: 'It\'s six o\'clock now and my feet hurt. We have walked nearly twenty thousand steps today. Tomorrow we are going to visit Camden Market. If you liked this video, give it a thumbs up. Bye!' }
        ],
        vocab: [
          ['to spend money', 'Geld ausgeben'], ['skeleton', 'Skelett'], ['whale', 'Wal'], ['squirrel', 'Eichhörnchen'], ['to steal', 'stehlen'],
          ['crisps', 'Chips'], ['to queue', 'anstehen'], ['view', 'Aussicht'], ['afraid of heights', 'nicht schwindelfrei'], ['step', 'Schritt']
        ],
        questions: [
          { t: 'mc', q: 'Who is Ruby in London with?', o: ['Her aunt', 'Her mother', 'Her best friend'], why: '"Today I\'m in London with my aunt Kate."' },
          { t: 'mc', q: 'What is the best thing about the museum for Ruby?', o: ['It is free', 'It is quiet', 'It has a café'], why: '"The best thing about it? It\'s free!"' },
          { t: 'gap', q: 'The skeleton of the blue whale is ___ metres long.', accept: ['twenty-five', '25', 'twenty five', 'twentyfive'], why: '"It is twenty-five metres long."' },
          { t: 'mc', q: 'Why didn\'t Ruby and her aunt eat in the museum café?', o: ['The sandwiches were too expensive', 'There were no free tables', 'The café was closed at lunchtime'], why: '"A sandwich there costs eight pounds. So we bought sandwiches in a supermarket for three pounds."' },
          { t: 'mc', q: 'How did Ruby pay for her London Eye ticket?', o: ['With her birthday money', 'Her aunt paid for it', 'The ticket was free'], why: '"I paid for my ticket with my birthday money."' },
          { t: 'mc', q: 'How long did they wait for the London Eye?', o: ['40 minutes', '30 minutes', '25 minutes'], why: '"We queued for forty minutes, and the ride takes thirty minutes."' },
          { t: 'tf', q: 'Aunt Kate enjoyed looking at the view from the London Eye.', a: false, why: '"Aunt Kate is keeping her eyes closed because she is afraid of heights."' }
        ]
      },
      {
        id: 'babysitting',
        title: 'Little angels',
        kind: 'Story',
        intro: 'Ethan tells us about his first evening as a babysitter.',
        speakers: { A: { name: 'Ethan', g: 'm' } },
        lines: [
          { s: 'A', t: 'Last Saturday I babysat for the first time. Our neighbours, the Morgans, were going to the theatre, and they asked me to look after their twins, Alfie and Daisy. They are five years old. Mrs Morgan said: They are little angels. Just put them to bed at half past seven. Easy money, I thought.' },
          { s: 'A', t: 'At seven o\'clock I made them cheese on toast. While I was cleaning the kitchen, the house became very quiet. Too quiet. I went upstairs and found the twins in the bathroom. They were washing the cat in the bath with their mum\'s expensive shampoo. There was water everywhere, and the cat was not happy.' },
          { s: 'A', t: 'I dried the cat, the floor and the twins. Then Alfie didn\'t want to go to bed without his toy rabbit. We looked for it for twenty minutes. In the end I found it in the fridge, next to the milk. Don\'t ask me why.' },
          { s: 'A', t: 'I read them four stories, and at nine o\'clock they finally fell asleep. So did I, on the sofa. When the Morgans came home at eleven, they woke me up. They gave me twenty-five pounds and asked: Can you come again next week? I said yes. But next time I\'m going to lock the bathroom door.' }
        ],
        vocab: [
          ['to look after', 'aufpassen auf'], ['twins', 'Zwillinge'], ['angel', 'Engel'], ['quiet', 'still'], ['expensive', 'teuer'],
          ['to dry', 'abtrocknen'], ['fridge', 'Kühlschrank'], ['finally', 'endlich'], ['asleep', 'eingeschlafen'], ['to lock', 'abschliessen']
        ],
        questions: [
          { t: 'mc', q: 'Why did Ethan think the job was easy money?', o: ['Mrs Morgan called the twins little angels', 'The twins were already in bed', 'The Morgans were only away for an hour'], why: 'Mrs Morgan said: "They are little angels. Just put them to bed at half past seven."' },
          { t: 'gap', q: 'The twins are ___ years old.', accept: ['five', '5'], why: '"They are five years old."' },
          { t: 'mc', q: 'Why did Ethan go upstairs?', o: ['The house was suddenly very quiet', 'He heard the cat in the bathroom', 'The twins were calling him'], why: '"The house became very quiet. Too quiet. I went upstairs."' },
          { t: 'mc', q: 'What were the twins doing in the bathroom?', o: ['Washing the cat', 'Washing the toy rabbit', 'Cleaning the floor'], why: '"They were washing the cat in the bath with their mum\'s expensive shampoo."' },
          { t: 'mc', q: 'Where was Alfie\'s toy rabbit?', o: ['In the fridge', 'In the bath', 'On the sofa'], why: '"In the end I found it in the fridge, next to the milk."' },
          { t: 'tf', q: 'The twins fell asleep at half past seven.', a: false, why: 'That was the plan, but "at nine o\'clock they finally fell asleep".' },
          { t: 'mc', q: 'How much money did Ethan get?', o: ['25 pounds', '20 pounds', '35 pounds'], why: '"They gave me twenty-five pounds." Twenty minutes was the time they looked for the rabbit.' }
        ]
      },
      {
        id: 'fun-run',
        title: 'Bananas on the run',
        kind: 'Radio report',
        intro: 'A local radio reporter talks about a charity run in his town.',
        speakers: { A: { name: 'Marcus', g: 'm' } },
        lines: [
          { s: 'A', t: 'Good evening. This is Marcus Reid for Radio Kent with today\'s local news. More than eight hundred runners took part in the Fairfield Fun Run this morning. That is two hundred more than last year, although the weather was cold and it was raining at the start.' },
          { s: 'A', t: 'The run is five kilometres long and goes through the park and along the river. Everybody who takes part collects money for the children\'s ward at Fairfield Hospital. This year the hospital wants to buy new beds for parents, so that they can stay with their children at night.' },
          { s: 'A', t: 'The fastest runner today was seventeen-year-old Callum Price, who finished in sixteen minutes. But the star of the day was Doris Hall. She is eighty-one and it was her tenth Fun Run. I asked her about her secret. She laughed and said: I walk my dog every day and I never take the lift.' },
          { s: 'A', t: 'Many people ran in funny costumes. I saw two bananas, a dinosaur and a whole family of penguins. The prize for the best costume went to a teacher who ran as a giant cup of tea.' },
          { s: 'A', t: 'The organisers have collected twelve thousand pounds so far, and they hope to reach fifteen thousand by the end of the week.' }
        ],
        vocab: [
          ['to take part', 'teilnehmen'], ['although', 'obwohl'], ['ward', 'Spitalabteilung'], ['secret', 'Geheimnis'], ['lift', 'Lift'],
          ['costume', 'Kostüm'], ['prize', 'Preis (Gewinn)'], ['giant', 'riesig'], ['organiser', 'Organisator/in'], ['so far', 'bis jetzt']
        ],
        questions: [
          { t: 'mc', q: 'How many runners took part this year?', o: ['More than 800', 'More than 600', 'More than 200'], why: '"More than eight hundred runners took part." That is two hundred more than last year.' },
          { t: 'tf', q: 'It was warm and sunny at the start of the run.', a: false, why: '"The weather was cold and it was raining at the start."' },
          { t: 'mc', q: 'Why does the hospital need the money this year?', o: ['To buy beds for parents', 'To buy toys for children', 'To build a new car park'], why: '"The hospital wants to buy new beds for parents, so that they can stay with their children at night."' },
          { t: 'gap', q: 'The fastest runner finished in ___ minutes.', accept: ['sixteen', '16'], why: 'Callum Price is seventeen, and he "finished in sixteen minutes".' },
          { t: 'mc', q: 'How does Doris Hall stay so fit?', o: ['She walks her dog every day', 'She runs along the river every day', 'She goes to a sports club'], why: '"I walk my dog every day and I never take the lift."' },
          { t: 'mc', q: 'Who won the prize for the best costume?', o: ['A teacher dressed as a cup of tea', 'A family dressed as penguins', 'A runner dressed as a dinosaur'], why: '"The prize for the best costume went to a teacher who ran as a giant cup of tea."' },
          { t: 'mc', q: 'How much money have the organisers collected so far?', o: ['12,000 pounds', '15,000 pounds', '20,000 pounds'], why: '"The organisers have collected twelve thousand pounds so far, and they hope to reach fifteen thousand."' }
        ]
      },
      {
        id: 'surprise-party',
        title: 'Don\'t tell Emily',
        kind: 'Dialogue',
        intro: 'Three friends are making plans for Emily\'s birthday.',
        speakers: { A: { name: 'Nina', g: 'f' }, B: { name: 'Josh', g: 'm' }, C: { name: 'Grace', g: 'f' } },
        lines: [
          { s: 'A', t: 'OK, listen. Emily is fourteen next Saturday and she thinks everybody has forgotten. Let\'s give her a surprise party!' },
          { s: 'B', t: 'Great idea. Where? At the youth club?' },
          { s: 'A', t: 'I\'ve already asked. The youth club is closed on Saturdays. But my mum says we can use our garage. It\'s big, and it has a table tennis table.' },
          { s: 'C', t: 'Perfect. How many people are we going to invite?' },
          { s: 'A', t: 'About twenty. If we invite more, there won\'t be enough room.' },
          { s: 'B', t: 'I\'ll make a playlist. Emily loves old rock songs, so I\'ll ask my dad for ideas.' },
          { s: 'C', t: 'And I\'ll bake the cake. Chocolate?' },
          { s: 'A', t: 'No, lemon. She had chocolate last year and she said it was too sweet.' },
          { s: 'C', t: 'Lemon, then. What about a present?' },
          { s: 'B', t: 'She has broken her headphones. If everybody gives three pounds, we can buy her new ones.' },
          { s: 'A', t: 'Good. Now the difficult part. How do we get her to my house?' },
          { s: 'C', t: 'I\'ll tell her that I need help with my maths homework at your place. She can never say no to maths.' },
          { s: 'B', t: 'What time?' },
          { s: 'A', t: 'The guests come at half past five, and Grace brings Emily at six. And Josh, please don\'t tell anybody else. Last time you told the whole class.' },
          { s: 'B', t: 'That was one time!' }
        ],
        vocab: [
          ['to forget', 'vergessen'], ['surprise party', 'Überraschungsparty'], ['youth club', 'Jugendtreff'], ['to invite', 'einladen'],
          ['enough room', 'genug Platz'], ['to bake', 'backen'], ['present', 'Geschenk'], ['headphones', 'Kopfhörer'], ['guest', 'Gast']
        ],
        questions: [
          { t: 'mc', q: 'Why can\'t the party be at the youth club?', o: ['It is closed on Saturdays', 'It is too small for a party', 'It is too expensive'], why: '"The youth club is closed on Saturdays."' },
          { t: 'gap', q: 'The friends are going to invite about ___ people.', accept: ['twenty', '20'], why: '"About twenty. If we invite more, there won\'t be enough room."' },
          { t: 'mc', q: 'Who is going to make the playlist?', o: ['Josh', 'Grace', 'Josh\'s dad'], why: 'Josh says: "I\'ll make a playlist." He will only ask his dad for ideas.' },
          { t: 'mc', q: 'Why is Grace going to bake a lemon cake?', o: ['Emily found chocolate cake too sweet', 'Grace can\'t make chocolate cake', 'Lemon cake is cheaper to make'], why: '"She had chocolate last year and she said it was too sweet."' },
          { t: 'mc', q: 'What present are they going to buy?', o: ['New headphones', 'A table tennis bat', 'A rock album'], why: '"She has broken her headphones. If everybody gives three pounds, we can buy her new ones."' },
          { t: 'mc', q: 'How will Grace get Emily to Nina\'s house?', o: ['She will ask for help with maths', 'She will invite her to play table tennis', 'She will tell her about the party'], why: '"I\'ll tell her that I need help with my maths homework at your place."' },
          { t: 'tf', q: 'Emily is going to arrive at half past five.', a: false, why: '"The guests come at half past five, and Grace brings Emily at six."' }
        ]
      }
    ]
  }
);
