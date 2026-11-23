/* Ear We Go! – module 1. Format and rules: see stories/base.js */
window.EWG_MODULES.push(
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
      },
      {
        id: 'swimming-club',
        title: 'Joining the swimming club',
        kind: 'Phone call',
        intro: 'Oliver phones the sports centre because he wants to start a new hobby.',
        speakers: { A: { name: 'Grace', g: 'f' }, B: { name: 'Oliver', g: 'm' } },
        lines: [
          { s: 'A', t: 'Good morning, Riverside Sports Centre. Grace speaking.' },
          { s: 'B', t: 'Hello. My name is Oliver. I\'d like to join the swimming club.' },
          { s: 'A', t: 'Lovely. How old are you, Oliver?' },
          { s: 'B', t: 'I\'m thirteen.' },
          { s: 'A', t: 'Then you can join the junior group. They train on Mondays and Thursdays.' },
          { s: 'B', t: 'What time does training start?' },
          { s: 'A', t: 'At half past five. It finishes at seven o\'clock.' },
          { s: 'B', t: 'Good. And how much does it cost?' },
          { s: 'A', t: 'Fifteen pounds a month. The first lesson is free, so you can try it.' },
          { s: 'B', t: 'Great! What do I have to bring?' },
          { s: 'A', t: 'A towel, goggles and a swimming cap. You can buy a cap here for three pounds.' },
          { s: 'B', t: 'OK. Can I start next Monday?' },
          { s: 'A', t: 'Yes, of course. Your coach is Mr Patel. Meet him at the small pool ten minutes before training.' },
          { s: 'B', t: 'Thank you. I only hope the water isn\'t too cold!' },
          { s: 'A', t: 'Don\'t worry. It\'s warmer than the sea!' }
        ],
        vocab: [
          ['to join', 'beitreten'], ['junior group', 'Juniorengruppe'], ['to train', 'trainieren'], ['towel', 'Badetuch'],
          ['goggles', 'Schwimmbrille'], ['swimming cap', 'Badekappe'], ['coach', 'Trainer']
        ],
        questions: [
          { t: 'mc', q: 'How old is Oliver?', o: ['Thirteen', 'Thirty', 'Fourteen'], why: 'He says: "I\'m thirteen."' },
          { t: 'mc', q: 'On which days does the junior group train?', o: ['Mondays and Thursdays', 'Mondays and Tuesdays', 'Tuesdays and Thursdays'], why: '"They train on Mondays and Thursdays."' },
          { t: 'mc', q: 'When does training start?', o: ['At 5:30', 'At 7:00', 'At 4:30'], why: 'It starts "at half past five" and finishes at seven o\'clock.' },
          { t: 'gap', q: 'The swimming club costs ___ pounds a month.', accept: ['fifteen', '15'], why: '"Fifteen pounds a month."' },
          { t: 'tf', q: 'Oliver doesn\'t have to pay for the first lesson.', a: true, why: '"The first lesson is free, so you can try it."' },
          { t: 'mc', q: 'What can Oliver buy at the sports centre?', o: ['A swimming cap', 'A big towel', 'New goggles'], why: '"You can buy a cap here for three pounds."' },
          { t: 'mc', q: 'Where does Oliver meet his coach?', o: ['At the small pool', 'At the big pool', 'At the front door'], why: '"Meet him at the small pool ten minutes before training."' }
        ]
      },
      {
        id: 'party-invitation',
        title: 'Party time!',
        kind: 'Voicemail',
        intro: 'Chloe leaves a message for her friend Hannah about a special day.',
        speakers: { A: { name: 'Chloe', g: 'f' } },
        lines: [
          { s: 'A', t: 'Hi Hannah, it\'s Chloe. Guess what? I\'m going to be fourteen next week, and I\'m having a birthday party. I really hope you can come!' },
          { s: 'A', t: 'The party is on Saturday the twelfth of May. It starts at four o\'clock and finishes at nine. It isn\'t at my house, because our garden is too small. It\'s at the bowling centre in Mill Street, next to the supermarket.' },
          { s: 'A', t: 'First we\'re going to play two games of bowling. After that there will be burgers, chips and a huge chocolate cake. My dad is making the cake, so I hope it tastes OK!' },
          { s: 'A', t: 'You don\'t have to bring a present, but please bring socks. You can\'t wear bowling shoes without them. Please send me a message before Wednesday, so we know how many people are coming. See you soon. Bye!' }
        ],
        vocab: [
          ['Guess what?', 'Rate mal!'], ['bowling centre', 'Bowlingcenter'], ['huge', 'riesig'], ['to taste', 'schmecken'],
          ['present', 'Geschenk'], ['socks', 'Socken'], ['without', 'ohne'], ['message', 'Nachricht']
        ],
        questions: [
          { t: 'mc', q: 'How old is Chloe going to be?', o: ['Fourteen', 'Forty', 'Thirteen'], why: '"I\'m going to be fourteen next week."' },
          { t: 'mc', q: 'On which day is the party?', o: ['On Saturday', 'On Wednesday', 'On Sunday'], why: '"The party is on Saturday the twelfth of May."' },
          { t: 'mc', q: 'When does the party finish?', o: ['At nine o\'clock', 'At four o\'clock', 'At eight o\'clock'], why: 'It "starts at four o\'clock and finishes at nine".' },
          { t: 'tf', q: 'The party is in Chloe\'s garden.', a: false, why: 'The garden is too small. The party is "at the bowling centre in Mill Street".' },
          { t: 'gap', q: 'First they are going to play ___ games of bowling.', accept: ['two', '2'], why: '"First we\'re going to play two games of bowling."' },
          { t: 'mc', q: 'Who is making the cake?', o: ['Chloe\'s dad', 'Chloe\'s mum', 'Hannah\'s dad'], why: '"My dad is making the cake."' },
          { t: 'mc', q: 'What should Hannah bring?', o: ['Socks', 'A present', 'Bowling shoes'], why: '"You don\'t have to bring a present, but please bring socks."' }
        ]
      },
      {
        id: 'new-trainers',
        title: 'New trainers',
        kind: 'Dialogue',
        intro: 'Zoe is in a shoe shop and talks to the shop assistant.',
        speakers: { A: { name: 'Shop assistant', g: 'm' }, B: { name: 'Zoe', g: 'f' } },
        lines: [
          { s: 'A', t: 'Hello. Can I help you?' },
          { s: 'B', t: 'Yes, please. I\'m looking for new trainers for my sports lessons.' },
          { s: 'A', t: 'These white ones are very popular. They cost sixty pounds.' },
          { s: 'B', t: 'Oh, that\'s too expensive. I only have forty-five pounds.' },
          { s: 'A', t: 'No problem. The blue ones over there are on sale. They were fifty pounds, and now they\'re thirty-five.' },
          { s: 'B', t: 'They look nice. Do you have them in size six?' },
          { s: 'A', t: 'Let me check. Here you are. Try them on.' },
          { s: 'B', t: 'They\'re a bit too small. My toes hurt.' },
          { s: 'A', t: 'Then try size seven. How are those?' },
          { s: 'B', t: 'Much better. They\'re really comfortable. I\'ll take them.' },
          { s: 'A', t: 'Good choice. Would you like a bag? It costs ten pence.' },
          { s: 'B', t: 'No, thanks. I\'ll put them in my rucksack.' },
          { s: 'A', t: 'Here\'s your receipt. You can bring them back within fourteen days.' },
          { s: 'B', t: 'Thank you. But I think I\'m going to keep them. Goodbye!' }
        ],
        vocab: [
          ['trainers', 'Turnschuhe'], ['popular', 'beliebt'], ['expensive', 'teuer'], ['on sale', 'reduziert'],
          ['size', 'Grösse'], ['to try on', 'anprobieren'], ['toe', 'Zehe'], ['comfortable', 'bequem'], ['receipt', 'Quittung']
        ],
        questions: [
          { t: 'mc', q: 'Why does Zoe need new trainers?', o: ['For her sports lessons', 'For her class trip', 'For a birthday party'], why: 'She is looking for "new trainers for my sports lessons".' },
          { t: 'mc', q: 'How much money does Zoe have?', o: ['45 pounds', '60 pounds', '35 pounds'], why: '"I only have forty-five pounds."' },
          { t: 'mc', q: 'What colour are the trainers on sale?', o: ['Blue', 'White', 'Black'], why: '"The blue ones over there are on sale." The white ones cost sixty pounds.' },
          { t: 'gap', q: 'The trainers on sale were fifty pounds, and now they cost ___ pounds.', accept: ['thirty-five', 'thirty five', 'thirtyfive', '35'], why: '"They were fifty pounds, and now they\'re thirty-five."' },
          { t: 'tf', q: 'Size six is too big for Zoe.', a: false, why: 'Size six is "a bit too small". Her toes hurt.' },
          { t: 'mc', q: 'Which size does Zoe buy?', o: ['Size seven', 'Size six', 'Size five'], why: 'She tries size seven and says: "Much better. I\'ll take them."' },
          { t: 'mc', q: 'Where does Zoe put her new trainers?', o: ['In her rucksack', 'In a plastic bag', 'On her feet'], why: 'She doesn\'t want a bag: "I\'ll put them in my rucksack."' }
        ]
      },
      {
        id: 'way-to-the-museum',
        title: 'Which way, please?',
        kind: 'Dialogue',
        intro: 'Noah is visiting a town for the first time and asks a woman in the street for help.',
        speakers: { A: { name: 'Noah', g: 'm' }, B: { name: 'Woman', g: 'f' } },
        lines: [
          { s: 'A', t: 'Excuse me. Can you help me? I\'m looking for the transport museum.' },
          { s: 'B', t: 'Of course. It isn\'t far. You can walk there in about ten minutes.' },
          { s: 'A', t: 'Great. Which way do I have to go?' },
          { s: 'B', t: 'Go straight on along this street until you get to the traffic lights. Then turn left into Bridge Road.' },
          { s: 'A', t: 'Left at the traffic lights. OK.' },
          { s: 'B', t: 'Walk past the post office and cross the bridge. The museum is on the right, opposite the park. It\'s a big red building.' },
          { s: 'A', t: 'Thank you. Do you know when it closes?' },
          { s: 'B', t: 'At five o\'clock, I think. But it\'s closed on Mondays.' },
          { s: 'A', t: 'Lucky me. Today is Tuesday! Is there a café near the museum?' },
          { s: 'B', t: 'Yes, there\'s a nice one inside. Try the carrot cake. It\'s the best in town.' },
          { s: 'A', t: 'I will. Thanks for your help!' },
          { s: 'B', t: 'You\'re welcome. Enjoy the old buses!' }
        ],
        vocab: [
          ['straight on', 'geradeaus'], ['traffic lights', 'Ampel'], ['to turn left', 'links abbiegen'], ['to walk past', 'vorbeigehen an'],
          ['to cross', 'überqueren'], ['bridge', 'Brücke'], ['opposite', 'gegenüber'], ['building', 'Gebäude']
        ],
        questions: [
          { t: 'mc', q: 'Which place is Noah looking for?', o: ['The transport museum', 'The post office', 'The town park'], why: '"I\'m looking for the transport museum."' },
          { t: 'gap', q: 'Noah can walk there in about ___ minutes.', accept: ['ten', '10'], why: '"You can walk there in about ten minutes."' },
          { t: 'mc', q: 'Where must Noah turn left?', o: ['At the traffic lights', 'At the post office', 'After the bridge'], why: 'He goes straight on to the traffic lights. "Then turn left into Bridge Road."' },
          { t: 'mc', q: 'Where is the museum?', o: ['Opposite the park', 'Opposite the post office', 'Next to the traffic lights'], why: '"The museum is on the right, opposite the park."' },
          { t: 'mc', q: 'When does the museum close?', o: ['At five o\'clock', 'At four o\'clock', 'At six o\'clock'], why: 'The woman says: "At five o\'clock, I think."' },
          { t: 'tf', q: 'The museum is closed on Tuesdays.', a: false, why: '"It\'s closed on Mondays." Today is Tuesday, so Noah is lucky.' },
          { t: 'mc', q: 'What should Noah try in the café?', o: ['The carrot cake', 'The chocolate cake', 'The apple cake'], why: '"Try the carrot cake. It\'s the best in town."' }
        ]
      },
      {
        id: 'cow-on-the-line',
        title: 'A cow on the line',
        kind: 'Announcement',
        intro: 'You are at a railway station in England and hear an announcement.',
        speakers: { A: { name: 'Announcer', g: 'f' } },
        lines: [
          { s: 'A', t: 'Good afternoon, ladies and gentlemen. This is an announcement for passengers travelling to Brighton.' },
          { s: 'A', t: 'The twenty past two train to Brighton is late today, because there is a cow on the line. Yes, a cow! The train will now leave at ten to three. We are sorry for the delay.' },
          { s: 'A', t: 'Please note that there is also a platform change. The train will not leave from platform two. It will leave from platform six. Please use the lift or the stairs next to the ticket office.' },
          { s: 'A', t: 'This train has eight carriages. Bicycles can go in the last carriage only. There is a small shop on the train with drinks and sandwiches.' },
          { s: 'A', t: 'Passengers for Gatwick Airport must change at Redhill today. While you are waiting, the station café is giving a free cup of tea to everyone with a Brighton ticket. Thank you for listening.' }
        ],
        vocab: [
          ['announcement', 'Durchsage'], ['passenger', 'Fahrgast'], ['delay', 'Verspätung'], ['platform', 'Perron, Gleis'],
          ['lift', 'Lift'], ['stairs', 'Treppe'], ['carriage', 'Zugwagen'], ['to change', 'umsteigen']
        ],
        questions: [
          { t: 'mc', q: 'Where is the train going?', o: ['To Brighton', 'To Redhill', 'To London'], why: 'It is "the twenty past two train to Brighton".' },
          { t: 'mc', q: 'Why is the train late?', o: ['There is a cow on the line', 'There is snow on the line', 'The train driver is ill'], why: 'The train is late "because there is a cow on the line".' },
          { t: 'mc', q: 'When will the train leave now?', o: ['At 2:50', 'At 2:20', 'At 3:10'], why: '"The train will now leave at ten to three."' },
          { t: 'gap', q: 'The train will now leave from platform ___.', accept: ['six', '6'], why: 'Not from platform two: "It will leave from platform six."' },
          { t: 'tf', q: 'The train has eighteen carriages.', a: false, why: '"This train has eight carriages."' },
          { t: 'mc', q: 'Where can bicycles go?', o: ['In the last carriage', 'In the first carriage', 'In every carriage'], why: '"Bicycles can go in the last carriage only."' },
          { t: 'mc', q: 'What do people with a Brighton ticket get in the café?', o: ['A free cup of tea', 'A free sandwich', 'A cheap coffee'], why: 'The café is "giving a free cup of tea to everyone with a Brighton ticket".' }
        ]
      },
      {
        id: 'weekend-weather',
        title: 'Sun or umbrella?',
        kind: 'Radio spot',
        intro: 'It is Friday evening. Daniel tells the radio listeners about the weather.',
        speakers: { A: { name: 'Daniel', g: 'm' } },
        lines: [
          { s: 'A', t: 'Good evening. This is Daniel with the weather for the weekend on Radio Sunshine.' },
          { s: 'A', t: 'Tomorrow, Saturday, will start cold and foggy, with temperatures of about six degrees in the morning. But don\'t worry. By lunchtime the sun will come out, and in the afternoon it will be dry and bright, with a high of fourteen degrees. It is a perfect day for a walk or a bike ride.' },
          { s: 'A', t: 'Sunday is a different story. There will be heavy rain in the north from early morning, and strong winds on the coast. In the south it will stay dry until about four o\'clock. So if you want to have a picnic, have it on Saturday.' },
          { s: 'A', t: 'And Monday? More rain, I\'m afraid. Don\'t forget your umbrella when you go to school. That\'s all from me. Have a lovely weekend!' }
        ],
        vocab: [
          ['foggy', 'neblig'], ['degree', 'Grad'], ['bright', 'heiter, hell'], ['bike ride', 'Velotour'],
          ['heavy rain', 'starker Regen'], ['coast', 'Küste'], ['I\'m afraid', 'leider'], ['umbrella', 'Regenschirm']
        ],
        questions: [
          { t: 'mc', q: 'What will the weather be like on Saturday morning?', o: ['Cold and foggy', 'Warm and sunny', 'Wet and windy'], why: 'Saturday "will start cold and foggy".' },
          { t: 'mc', q: 'How warm will it be on Saturday afternoon?', o: ['14 degrees', '40 degrees', '6 degrees'], why: 'In the afternoon there will be "a high of fourteen degrees". Six degrees is in the morning.' },
          { t: 'tf', q: 'It will rain on Saturday afternoon.', a: false, why: '"In the afternoon it will be dry and bright."' },
          { t: 'mc', q: 'Where will there be heavy rain on Sunday morning?', o: ['In the north', 'In the south', 'In the east'], why: '"There will be heavy rain in the north from early morning."' },
          { t: 'gap', q: 'On Sunday the south will stay dry until about ___ o\'clock.', accept: ['four', '4'], why: '"In the south it will stay dry until about four o\'clock."' },
          { t: 'mc', q: 'Which day is best for a picnic?', o: ['Saturday', 'Sunday', 'Monday'], why: '"If you want to have a picnic, have it on Saturday."' },
          { t: 'mc', q: 'What should the listeners take to school on Monday?', o: ['An umbrella', 'A warm hat', 'Sunglasses'], why: '"Don\'t forget your umbrella when you go to school."' }
        ]
      },
      {
        id: 'my-new-pet',
        title: 'Biscuit, my new pet',
        kind: 'Short talk',
        intro: 'Ruby gives a short talk to her class about a new member of her family.',
        speakers: { A: { name: 'Ruby', g: 'f' } },
        lines: [
          { s: 'A', t: 'Hello, everyone. Today I want to tell you about my new pet. His name is Biscuit, and he is a rabbit. I got him three weeks ago for my birthday.' },
          { s: 'A', t: 'Biscuit is brown with white ears, and he is only five months old. He lives in a big cage in our garden, but in the evening he can run around in the living room.' },
          { s: 'A', t: 'I feed him twice a day, before school and after dinner. He eats hay and vegetables. His favourite food is carrots, of course, but he also loves bananas. Last week he ate my maths homework too. My teacher didn\'t believe me!' },
          { s: 'A', t: 'Every Saturday I have to clean his cage. That isn\'t much fun, but it is my job. Next month we are going to buy a second rabbit, so Biscuit will have a friend.' }
        ],
        vocab: [
          ['pet', 'Haustier'], ['rabbit', 'Kaninchen'], ['cage', 'Käfig'], ['to feed', 'füttern'],
          ['twice', 'zweimal'], ['hay', 'Heu'], ['vegetables', 'Gemüse'], ['to believe', 'glauben']
        ],
        questions: [
          { t: 'mc', q: 'What kind of animal is Biscuit?', o: ['A rabbit', 'A hamster', 'A puppy'], why: '"His name is Biscuit, and he is a rabbit."' },
          { t: 'mc', q: 'When did Ruby get Biscuit?', o: ['Three weeks ago', 'Three months ago', 'Five weeks ago'], why: '"I got him three weeks ago for my birthday."' },
          { t: 'gap', q: 'Biscuit is only ___ months old.', accept: ['five', '5'], why: '"He is only five months old."' },
          { t: 'tf', q: 'Biscuit\'s cage is in the living room.', a: false, why: '"He lives in a big cage in our garden." He can only run around in the living room in the evening.' },
          { t: 'mc', q: 'How often does Ruby feed Biscuit?', o: ['Twice a day', 'Once a day', 'Three times a day'], why: '"I feed him twice a day, before school and after dinner."' },
          { t: 'mc', q: 'What did Biscuit eat last week?', o: ['Ruby\'s maths homework', 'Ruby\'s English book', 'Ruby\'s birthday card'], why: '"Last week he ate my maths homework too."' },
          { t: 'mc', q: 'What does Ruby have to do every Saturday?', o: ['Clean the cage', 'Buy new carrots', 'Wash the rabbit'], why: '"Every Saturday I have to clean his cage."' }
        ]
      },
      {
        id: 'timetable-change',
        title: 'A later start',
        kind: 'Announcement',
        intro: 'Mrs Carter, a class teacher, has some news for her class about tomorrow.',
        speakers: { A: { name: 'Mrs Carter', g: 'f' } },
        lines: [
          { s: 'A', t: 'Good morning, class eight B. Sit down, please, and listen. I have some news about tomorrow\'s timetable.' },
          { s: 'A', t: 'Mr Evans, your maths teacher, is ill this week. So there is no maths lesson tomorrow morning. You will have art with Miss Young instead. Please bring your coloured pencils.' },
          { s: 'A', t: 'Because of that, lessons start later tomorrow. You don\'t have to be here at half past eight. Come at twenty past nine. I can see some happy faces!' },
          { s: 'A', t: 'There is also a change in the afternoon. The sports hall is closed, because workers are repairing the roof. Your sports lesson will be outside on the football field, so bring a warm jacket.' },
          { s: 'A', t: 'And one last thing. The history test is not on Wednesday. It is now on Friday, in room twelve. So you have two more days to study. Use them well!' }
        ],
        vocab: [
          ['timetable', 'Stundenplan'], ['ill', 'krank'], ['instead', 'stattdessen'], ['coloured pencils', 'Farbstifte'],
          ['sports hall', 'Turnhalle'], ['to repair', 'reparieren'], ['roof', 'Dach'], ['to study', 'lernen']
        ],
        questions: [
          { t: 'mc', q: 'Which teacher is ill this week?', o: ['Mr Evans', 'Miss Young', 'Mrs Carter'], why: '"Mr Evans, your maths teacher, is ill this week."' },
          { t: 'mc', q: 'Which lesson will the class have instead of maths?', o: ['Art', 'History', 'Sport'], why: '"You will have art with Miss Young instead."' },
          { t: 'mc', q: 'When do lessons start tomorrow?', o: ['At 9:20', 'At 8:30', 'At 9:40'], why: 'Not at half past eight: "Come at twenty past nine."' },
          { t: 'tf', q: 'The sports hall is closed because the floor is wet.', a: false, why: 'It is closed "because workers are repairing the roof".' },
          { t: 'mc', q: 'What should the students bring for the sports lesson?', o: ['A warm jacket', 'A football', 'An umbrella'], why: 'The lesson will be outside, "so bring a warm jacket".' },
          { t: 'mc', q: 'On which day is the history test now?', o: ['On Friday', 'On Wednesday', 'On Thursday'], why: 'The test "is not on Wednesday. It is now on Friday".' },
          { t: 'gap', q: 'The history test is in room ___.', accept: ['twelve', '12'], why: '"It is now on Friday, in room twelve."' }
        ]
      },
      {
        id: 'at-the-library',
        title: 'A card for Amelia',
        kind: 'Dialogue',
        intro: 'Amelia visits the town library for the first time and talks to the librarian.',
        speakers: { A: { name: 'Librarian', g: 'm' }, B: { name: 'Amelia', g: 'f' } },
        lines: [
          { s: 'A', t: 'Hello. How can I help you?' },
          { s: 'B', t: 'Hi. I\'d like to join the library, please.' },
          { s: 'A', t: 'Of course. It\'s free for everyone under sixteen. What\'s your name?' },
          { s: 'B', t: 'Amelia Brooks.' },
          { s: 'A', t: 'Thank you, Amelia. Here is your library card. Don\'t lose it, because a new one costs two pounds.' },
          { s: 'B', t: 'How many books can I borrow?' },
          { s: 'A', t: 'Eight books at a time, and you can keep them for three weeks.' },
          { s: 'B', t: 'And what happens if I bring them back late?' },
          { s: 'A', t: 'Then you pay ten pence a day for each book.' },
          { s: 'B', t: 'OK, I\'ll be careful. Where are the books about horses?' },
          { s: 'A', t: 'Upstairs, on the first floor, next to the comics.' },
          { s: 'B', t: 'Thanks. Are you open on Sundays?' },
          { s: 'A', t: 'No, we\'re closed on Sundays. On Saturdays we close at one o\'clock.' },
          { s: 'B', t: 'Good to know. I\'ll go and look for my books now.' },
          { s: 'A', t: 'Enjoy! And please be quiet upstairs. People are studying there.' }
        ],
        vocab: [
          ['library', 'Bibliothek'], ['to join', 'beitreten, Mitglied werden'], ['library card', 'Bibliotheksausweis'], ['to lose', 'verlieren'],
          ['to borrow', 'ausleihen'], ['careful', 'vorsichtig'], ['upstairs', 'oben'], ['first floor', 'erster Stock'], ['quiet', 'leise']
        ],
        questions: [
          { t: 'mc', q: 'Who can join the library for free?', o: ['People under sixteen', 'People under sixty', 'People under eighteen'], why: '"It\'s free for everyone under sixteen."' },
          { t: 'mc', q: 'How much does a new library card cost?', o: ['Two pounds', 'Ten pounds', 'Eight pounds'], why: '"Don\'t lose it, because a new one costs two pounds."' },
          { t: 'gap', q: 'Amelia can borrow ___ books at a time.', accept: ['eight', '8'], why: '"Eight books at a time."' },
          { t: 'mc', q: 'How long can Amelia keep the books?', o: ['For three weeks', 'For two weeks', 'For three days'], why: '"You can keep them for three weeks."' },
          { t: 'mc', q: 'Which books is Amelia looking for?', o: ['Books about horses', 'Books about dogs', 'Comic books'], why: 'She asks: "Where are the books about horses?" They are next to the comics.' },
          { t: 'tf', q: 'The library is open on Sundays.', a: false, why: '"No, we\'re closed on Sundays."' },
          { t: 'mc', q: 'When does the library close on Saturdays?', o: ['At one o\'clock', 'At three o\'clock', 'At eight o\'clock'], why: '"On Saturdays we close at one o\'clock."' }
        ]
      },
      {
        id: 'perfect-pancakes',
        title: 'Perfect pancakes',
        kind: 'Instructions',
        intro: 'Jack makes cooking videos. Today he explains one of his favourite recipes.',
        speakers: { A: { name: 'Jack', g: 'm' } },
        lines: [
          { s: 'A', t: 'Hi, I\'m Jack, and welcome to my kitchen. Today I\'m going to show you how to make pancakes. It\'s really easy, and you only need four things.' },
          { s: 'A', t: 'You need two hundred grams of flour, two eggs, half a litre of milk and a little salt. Put the flour and the salt into a big bowl. Then add the eggs and the milk, and mix everything well. Now wait for twenty minutes.' },
          { s: 'A', t: 'Next, heat a little butter in a pan. Pour some of the mixture into the pan and cook the pancake for one minute on each side. Now comes the fun part. Throw the pancake into the air to turn it. Be careful! My first pancake landed on the dog.' },
          { s: 'A', t: 'Serve your pancakes with lemon juice and sugar. That\'s how we eat them in England. This recipe makes eight pancakes. Enjoy!' }
        ],
        vocab: [
          ['flour', 'Mehl'], ['bowl', 'Schüssel'], ['to add', 'hinzufügen'], ['to mix', 'mischen'], ['to heat', 'erhitzen'],
          ['pan', 'Pfanne'], ['to pour', 'giessen'], ['mixture', 'Teig, Mischung'], ['recipe', 'Rezept']
        ],
        questions: [
          { t: 'mc', q: 'How many things do you need for the pancakes?', o: ['Four', 'Two', 'Five'], why: '"You only need four things": flour, eggs, milk and salt.' },
          { t: 'mc', q: 'How much flour do you need?', o: ['200 grams', '20 grams', '100 grams'], why: '"You need two hundred grams of flour."' },
          { t: 'gap', q: 'After mixing, you have to wait for ___ minutes.', accept: ['twenty', '20'], why: '"Now wait for twenty minutes."' },
          { t: 'mc', q: 'What do you heat in the pan first?', o: ['A little butter', 'A little milk', 'A little sugar'], why: '"Next, heat a little butter in a pan."' },
          { t: 'tf', q: 'You cook the pancake for two minutes on each side.', a: false, why: 'You "cook the pancake for one minute on each side".' },
          { t: 'mc', q: 'Where did Jack\'s first pancake land?', o: ['On the dog', 'On the floor', 'On the cat'], why: '"My first pancake landed on the dog."' },
          { t: 'mc', q: 'What do people in England eat with pancakes?', o: ['Lemon juice and sugar', 'Butter and a little salt', 'Chocolate and bananas'], why: '"Serve your pancakes with lemon juice and sugar. That\'s how we eat them in England."' }
        ]
      },
      {
        id: 'where-is-pepper',
        title: 'Where is Pepper?',
        kind: 'Radio spot',
        intro: 'A local radio station asks its listeners to help a family.',
        speakers: { A: { name: 'Holly', g: 'f' } },
        lines: [
          { s: 'A', t: 'This is Radio Greenhill with a message for all our listeners in the town centre. The Baker family needs your help.' },
          { s: 'A', t: 'Their cat, Pepper, is missing. Pepper is a small grey cat with one white paw and a red collar. She is two years old, and she is very friendly.' },
          { s: 'A', t: 'Pepper went out on Tuesday evening and didn\'t come home. A neighbour saw her on Wednesday near the fish and chip shop in Church Lane. That is no surprise, because Pepper loves fish.' },
          { s: 'A', t: 'Please look in your garage and your garden shed. Cats often hide in dark places. If you see Pepper, don\'t run after her. Just put some food on the ground and call the Baker family.' },
          { s: 'A', t: 'Their number is five five five, three one four. Seven-year-old Tom Baker will give his pocket money, twelve pounds, to the person who finds her. Thank you for your help.' }
        ],
        vocab: [
          ['listener', 'Zuhörer'], ['missing', 'vermisst'], ['paw', 'Pfote'], ['collar', 'Halsband'], ['neighbour', 'Nachbar'],
          ['surprise', 'Überraschung'], ['garden shed', 'Gartenhaus'], ['to hide', 'sich verstecken'], ['pocket money', 'Taschengeld']
        ],
        questions: [
          { t: 'mc', q: 'What colour is Pepper\'s collar?', o: ['Red', 'White', 'Grey'], why: 'Pepper is a grey cat "with one white paw and a red collar".' },
          { t: 'gap', q: 'Pepper is ___ years old.', accept: ['two', '2'], why: '"She is two years old, and she is very friendly."' },
          { t: 'mc', q: 'When did Pepper go out?', o: ['On Tuesday evening', 'On Wednesday evening', 'On Tuesday morning'], why: '"Pepper went out on Tuesday evening and didn\'t come home."' },
          { t: 'mc', q: 'Where did a neighbour see Pepper?', o: ['Near the fish and chip shop', 'Near the baker\'s shop', 'Near the radio station'], why: 'A neighbour saw her "near the fish and chip shop in Church Lane".' },
          { t: 'mc', q: 'Where should the listeners look for Pepper?', o: ['In the garage and garden shed', 'In the kitchen and living room', 'In the church and town hall'], why: '"Please look in your garage and your garden shed."' },
          { t: 'tf', q: 'If you see Pepper, you should run after her.', a: false, why: '"If you see Pepper, don\'t run after her."' },
          { t: 'mc', q: 'How much money will Tom give to the person who finds Pepper?', o: ['12 pounds', '20 pounds', '7 pounds'], why: 'Tom will give "his pocket money, twelve pounds". Seven is his age.' }
        ]
      }
    ]
  }
);
