/* Ear We Go! – module 3. Format and rules: see stories/base.js */
window.EWG_MODULES.push(
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
      },
      {
        id: 'uniform-vote',
        title: 'An army of pigeons',
        kind: 'Discussion',
        intro: 'Priya and Tom talk about an email from their head teacher.',
        speakers: { A: { name: 'Priya', g: 'f' }, B: { name: 'Tom', g: 'm' } },
        lines: [
          { s: 'A', t: 'Tom, have you seen the email from the head teacher? The school wants to introduce a uniform next year, and we\'re all supposed to vote on it.' },
          { s: 'B', t: 'I have, and I\'m voting no. Clothes show who you are. If everyone wears the same grey jumper, we\'ll look like an army of pigeons.' },
          { s: 'A', t: 'I used to think that too. However, I\'ve changed my mind since my cousin told me about her school. She wears a uniform, and she says that mornings are much easier. She doesn\'t waste twenty minutes deciding what to put on.' },
          { s: 'B', t: 'I\'d rather lose twenty minutes than my style.' },
          { s: 'A', t: 'There\'s a more serious reason, though. At our school, some people are laughed at because they don\'t have expensive trainers or the right brand of jacket. With a uniform, nobody can tell whose family has more money.' },
          { s: 'B', t: 'I hadn\'t thought of that. But uniforms cost money too. My mum said that a blazer alone can cost fifty pounds.' },
          { s: 'A', t: 'That\'s true. Although the email says that families who can\'t afford it would get help from the school.' },
          { s: 'B', t: 'OK, that\'s fair. I still don\'t like the idea of a blazer and tie, though. They\'re so uncomfortable, especially in summer.' },
          { s: 'A', t: 'What if it was something simple instead? A polo shirt and a sweatshirt with the school logo.' },
          { s: 'B', t: 'I could live with that, actually. As long as the sweatshirt isn\'t grey.' },
          { s: 'A', t: 'Then let\'s suggest it at the class meeting on Thursday. If enough people agree, the head teacher might listen.' },
          { s: 'B', t: 'Fine. But I\'m choosing the colour.' }
        ],
        vocab: [
          ['to introduce', 'einführen'], ['to vote', 'abstimmen'], ['pigeon', 'Taube'], ['to waste', 'verschwenden'],
          ['brand', 'Marke'], ['to afford', 'sich leisten'], ['uncomfortable', 'unbequem'],
          ['instead', 'stattdessen'], ['as long as', 'solange']
        ],
        questions: [
          { t: 'mc', q: 'What are the students supposed to do?', o: ['Vote on a school uniform', 'Design a school uniform', 'Write to the head teacher'], why: 'The school wants to introduce a uniform, "and we\'re all supposed to vote on it".' },
          { t: 'mc', q: 'Why is Tom against a uniform at the beginning?', o: ['He thinks clothes show who you are', 'He thinks uniforms are too expensive', 'His cousin hates her uniform'], why: '"I\'m voting no. Clothes show who you are."' },
          { t: 'mc', q: 'Why has Priya changed her mind?', o: ['Her cousin told her about her school', 'The head teacher talked to her', 'Her parents like the idea'], why: '"I\'ve changed my mind since my cousin told me about her school."' },
          { t: 'gap', q: 'Priya\'s cousin doesn\'t waste ___ minutes deciding what to wear.', accept: ['twenty', '20'], why: '"She doesn\'t waste twenty minutes deciding what to put on."' },
          { t: 'mc', q: 'What is Priya\'s more serious reason for a uniform?', o: ['Nobody can see who has more money', 'Students get ready faster in the morning', 'Students behave better in lessons'], why: '"With a uniform, nobody can tell whose family has more money."' },
          { t: 'tf', q: 'According to the email, families who cannot afford the uniform would get help.', a: true, why: 'Families who can\'t afford it "would get help from the school".' },
          { t: 'mc', q: 'Why does Tom still not like a blazer and tie?', o: ['They are uncomfortable', 'They are too expensive', 'They are always grey'], why: '"They\'re so uncomfortable, especially in summer."' },
          { t: 'mc', q: 'What are Priya and Tom going to do on Thursday?', o: ['Suggest a simple uniform at the class meeting', 'Vote against the uniform at the class meeting', 'Show the head teacher a new sweatshirt'], why: 'Priya says: "Let\'s suggest it at the class meeting on Thursday."' }
        ]
      },
      {
        id: 'plastic-sea',
        title: 'Turn off the tap',
        kind: 'Podcast',
        intro: 'A podcast about the sea explains a problem that begins on land.',
        speakers: { A: { name: 'Zoe', g: 'f' } },
        lines: [
          { s: 'A', t: 'Welcome to Blue Planet Minutes. Today I want to talk about something you have probably used at least once today: plastic. Plastic is light, cheap and strong, which is exactly why it is so useful. Unfortunately, it is also why it has become such a problem for our oceans.' },
          { s: 'A', t: 'Every year, millions of tonnes of plastic end up in the sea. Many people think that most of it is left on beaches by tourists or dropped from ships. In fact, most of it comes from the land. Rubbish that isn\'t collected properly is blown into rivers, and the rivers carry it to the sea.' },
          { s: 'A', t: 'The real trouble is that plastic never truly disappears. Instead, it is broken into smaller and smaller pieces by the sun and the waves. These tiny pieces are called microplastics, and they have been found even in the ice of the Arctic. Sea animals often eat plastic by mistake. A turtle, for example, can\'t tell the difference between a plastic bag and a jellyfish.' },
          { s: 'A', t: 'So should we simply clean the oceans? Some organisations are trying, and that is great. However, most experts say that cleaning alone is like mopping the floor while the tap is still running. First, you have to turn off the tap. In other words, we need to use less plastic in the first place.' },
          { s: 'A', t: 'Take a bottle that you can fill again, and say no to bags you don\'t need. One bottle may not seem important. But if a whole school did the same, it would make a real difference.' }
        ],
        vocab: [
          ['tonne', 'Tonne'], ['rubbish', 'Abfall'], ['properly', 'richtig'], ['to disappear', 'verschwinden'], ['tiny', 'winzig'],
          ['by mistake', 'aus Versehen'], ['turtle', 'Schildkröte'], ['jellyfish', 'Qualle'], ['to mop', 'aufwischen'],
          ['tap', 'Wasserhahn'], ['to make a difference', 'etwas bewirken']
        ],
        questions: [
          { t: 'mc', q: 'Why is plastic so useful?', o: ['It is light, cheap and strong', 'It is easy to clean and repair', 'It disappears after a few years'], why: '"Plastic is light, cheap and strong, which is exactly why it is so useful."' },
          { t: 'mc', q: 'Where does most of the plastic in the sea come from?', o: ['From the land, carried by rivers', 'From tourists on the beaches', 'From ships that drop rubbish'], why: 'Many people think of tourists or ships, but "in fact, most of it comes from the land".' },
          { t: 'tf', q: 'After some time in the sea, plastic disappears completely.', a: false, why: '"Plastic never truly disappears." It is only broken into smaller pieces.' },
          { t: 'mc', q: 'What are microplastics?', o: ['Tiny pieces of broken plastic', 'Very small sea animals', 'Pieces of ice in the Arctic'], why: 'Plastic is broken into smaller and smaller pieces. "These tiny pieces are called microplastics."' },
          { t: 'gap', q: 'A turtle may eat a plastic bag because it looks like a ___.', accept: ['jellyfish'], why: 'A turtle "can\'t tell the difference between a plastic bag and a jellyfish".' },
          { t: 'mc', q: 'What does Zoe think about organisations that clean the oceans?', o: ['It is great, but it is not enough', 'It is a waste of time and money', 'It is the best way to solve the problem'], why: 'She says "that is great", but cleaning alone is like mopping while the tap is running.' },
          { t: 'mc', q: 'What do the experts mean when they say: turn off the tap?', o: ['We have to use less plastic first', 'We have to save more water at home', 'We have to stop cleaning the oceans'], why: '"In other words, we need to use less plastic in the first place."' },
          { t: 'mc', q: 'What would make a real difference, according to Zoe?', o: ['If a whole school used bottles again and again', 'If one person stopped drinking from bottles', 'If schools collected plastic bags on beaches'], why: 'One bottle may not seem important, "but if a whole school did the same, it would make a real difference".' }
        ]
      },
      {
        id: 'lost-sock',
        title: 'The boy behind Lost Sock',
        kind: 'Radio interview',
        intro: 'A presenter talks to Kofi, who has made his own computer game.',
        speakers: { A: { name: 'Hannah', g: 'f' }, B: { name: 'Kofi', g: 'm' } },
        lines: [
          { s: 'A', t: 'Welcome back to Tech Talk. My guest today is Kofi Mensah, who is sixteen and has already published his own computer game. Kofi, what is the game about?' },
          { s: 'B', t: 'It\'s called Lost Sock. You play a sock that has fallen behind the washing machine and has to find its way back to its partner.' },
          { s: 'A', t: 'How did you learn to make games?' },
          { s: 'B', t: 'I started when I was twelve. My uncle had given me an old laptop, and I followed free lessons on the internet. My first game was terrible. The hero could walk through walls, which wasn\'t planned.' },
          { s: 'A', t: 'How long did Lost Sock take?' },
          { s: 'B', t: 'Almost two years. I had hoped to finish in six months, but I kept adding new ideas. In the end, my sister told me that a small finished game is better than a perfect game that never comes out. She was right, so I cut half of the levels.' },
          { s: 'A', t: 'Was that the hardest part?' },
          { s: 'B', t: 'No, the hardest part was the testing. I asked ten classmates to play it, and they found more than a hundred mistakes. That hurt a bit. However, the game is much better because of them.' },
          { s: 'A', t: 'Has it made you rich?' },
          { s: 'B', t: 'Not at all! It has been downloaded about three thousand times, but it only costs one pound. I\'ve earned enough for a new computer, and I\'m happy with that.' },
          { s: 'A', t: 'So what\'s next? A bigger game?' },
          { s: 'B', t: 'Actually, no. I\'d like to study music first, because the thing I enjoyed most was writing the soundtrack. Maybe I\'ll write music for other people\'s games one day.' }
        ],
        vocab: [
          ['to publish', 'veröffentlichen'], ['washing machine', 'Waschmaschine'], ['hero', 'Held'],
          ['to add', 'hinzufügen'], ['in the end', 'schliesslich'], ['to cut', 'streichen, kürzen'], ['classmate', 'Mitschüler/in'],
          ['to download', 'herunterladen'], ['to earn', 'verdienen'], ['soundtrack', 'Musik zu einem Spiel oder Film']
        ],
        questions: [
          { t: 'mc', q: 'What do you have to do in the game Lost Sock?', o: ['Help a sock to find its partner', 'Repair a broken washing machine', 'Walk through walls to find a hero'], why: 'You play a sock that "has to find its way back to its partner".' },
          { t: 'mc', q: 'How did Kofi learn to make games?', o: ['With free lessons on the internet', 'With the help of his uncle', 'In a computer club at school'], why: '"I followed free lessons on the internet." His uncle only gave him the laptop.' },
          { t: 'mc', q: 'Why did the game take almost two years?', o: ['Kofi kept adding new ideas', 'Kofi had too much homework', 'Kofi\'s laptop was too old'], why: '"I had hoped to finish in six months, but I kept adding new ideas."' },
          { t: 'mc', q: 'What did Kofi do after his sister had given him advice?', o: ['He cut half of the levels', 'He started a new, perfect game', 'He asked her to test the game'], why: '"She was right, so I cut half of the levels."' },
          { t: 'tf', q: 'Kofi says that cutting the levels was the hardest part.', a: false, why: '"No, the hardest part was the testing."' },
          { t: 'mc', q: 'What does Kofi think about the mistakes his classmates found?', o: ['It hurt, but the game is better now', 'It was funny, and he changed nothing', 'It was unfair, and he was angry'], why: '"That hurt a bit. However, the game is much better because of them."' },
          { t: 'gap', q: 'The game has been downloaded about ___ thousand times.', accept: ['three', '3'], why: '"It has been downloaded about three thousand times."' },
          { t: 'mc', q: 'What does Kofi want to do next?', o: ['Study music, because he loved writing the soundtrack', 'Make a bigger game, because the first one sold well', 'Buy a new computer, because he is rich now'], why: '"I\'d like to study music first, because the thing I enjoyed most was writing the soundtrack."' }
        ]
      },
      {
        id: 'missing-trophy',
        title: 'The empty cabinet',
        kind: 'Story',
        intro: 'Ella tells the story of a strange Friday at her school.',
        speakers: { A: { name: 'Ella', g: 'f' } },
        lines: [
          { s: 'A', t: 'Last Friday, something strange happened at our school. Our football team had won the regional cup for the first time in twenty years, and the silver trophy had been placed in a glass cabinet next to the head teacher\'s office. On Friday morning, the cabinet was empty.' },
          { s: 'A', t: 'By break time, everybody had a theory. Some people said that it had been stolen by students from Westfield, the school we had beaten in the final. Others suspected Marcus, our goalkeeper, because he had complained that he never got to hold the trophy. Poor Marcus went red and said that he had been at the dentist all morning.' },
          { s: 'A', t: 'My friend Yusuf and I decided to investigate. First, we looked at the cabinet. The glass wasn\'t broken and the lock hadn\'t been damaged, so somebody must have used a key. Then Yusuf noticed something on the floor: a few drops of white liquid that smelled of lemon.' },
          { s: 'A', t: 'That smell reminded me of something. I had noticed it before, outside the caretaker\'s room in the basement. So we went downstairs and knocked on the door. Mr Bell opened it with a cloth in one hand and, yes, the trophy in the other.' },
          { s: 'A', t: 'He laughed when he saw our faces. He explained that a photographer from the local newspaper was coming on Monday, and the head teacher had asked him to polish the trophy until it shone. He had simply forgotten to leave a note. So nothing had been stolen after all. Marcus was allowed to carry the trophy back upstairs, and he didn\'t stop smiling all day.' }
        ],
        vocab: [
          ['trophy', 'Pokal'], ['cabinet', 'Vitrine'], ['to suspect', 'verdächtigen'], ['goalkeeper', 'Torhüter/in'],
          ['to investigate', 'nachforschen'], ['lock', 'Schloss'], ['liquid', 'Flüssigkeit'], ['caretaker', 'Hauswart'],
          ['basement', 'Untergeschoss'], ['cloth', 'Lappen'], ['to polish', 'polieren']
        ],
        questions: [
          { t: 'mc', q: 'Why was the trophy so special for the school?', o: ['The team had not won the cup for 20 years', 'The trophy was 20 years old and made of gold', 'The team had beaten Westfield 20 times'], why: 'The team "had won the regional cup for the first time in twenty years".' },
          { t: 'mc', q: 'Why did some people suspect Marcus?', o: ['He had complained that he never got to hold the trophy', 'He had played badly in the final against Westfield', 'He had been seen near the cabinet in the morning'], why: 'They suspected him "because he had complained that he never got to hold the trophy".' },
          { t: 'mc', q: 'Where had Marcus been all morning, according to him?', o: ['At the dentist', 'In the basement', 'At Westfield'], why: 'He "said that he had been at the dentist all morning".' },
          { t: 'mc', q: 'Why did Ella and Yusuf think that somebody had used a key?', o: ['The glass and the lock were not damaged', 'They found a key on the floor', 'The head teacher had lost her key'], why: '"The glass wasn\'t broken and the lock hadn\'t been damaged, so somebody must have used a key."' },
          { t: 'mc', q: 'Why did they go to the basement?', o: ['Ella knew the lemon smell from the caretaker\'s room', 'Yusuf heard a strange noise from downstairs', 'Marcus told them to look for Mr Bell there'], why: 'Ella had noticed the smell before, "outside the caretaker\'s room in the basement".' },
          { t: 'mc', q: 'Why had Mr Bell taken the trophy?', o: ['The head teacher had asked him to polish it', 'He wanted to play a joke on the students', 'He had to repair the lock of the cabinet'], why: '"The head teacher had asked him to polish the trophy until it shone."' },
          { t: 'gap', q: 'A photographer from the local newspaper was coming on ___.', accept: ['monday'], why: '"A photographer from the local newspaper was coming on Monday."' },
          { t: 'tf', q: 'Mr Bell had left a note to say where the trophy was.', a: false, why: '"He had simply forgotten to leave a note."' }
        ]
      },
      {
        id: 'hiker-rescue',
        title: 'Found by a dog called Skye',
        kind: 'News report',
        intro: 'A radio news programme reports on a man who was missing in the mountains.',
        speakers: { A: { name: 'Grace', g: 'f' }, B: { name: 'Owen', g: 'm' } },
        lines: [
          { s: 'A', t: 'Good evening. This is the six o\'clock news on Radio Highland. A hiker who had been missing since Saturday afternoon was found safe and well this morning. Owen Fraser from the mountain rescue team is with me. Owen, what happened?' },
          { s: 'B', t: 'The man had set off alone on Saturday morning to climb Ben Arran. The weather was fine at first. However, thick fog came down in the afternoon, and he lost the path. Then he slipped on wet rocks and hurt his ankle, so he couldn\'t walk any further.' },
          { s: 'A', t: 'Why didn\'t he call for help?' },
          { s: 'B', t: 'He tried to, but there was no signal on that side of the mountain. Luckily, he had told the owner of his guesthouse which route he was planning to take. When he hadn\'t returned by nine in the evening, she called us.' },
          { s: 'A', t: 'And you started searching straight away?' },
          { s: 'B', t: 'We did, with twelve volunteers and two dogs. The helicopter couldn\'t fly because of the fog, so we had to search on foot. It was one of our dogs, Skye, who found him just after seven this morning.' },
          { s: 'A', t: 'How had he survived such a cold night?' },
          { s: 'B', t: 'He did everything right. Instead of walking on in the dark, he stayed where he was. He had packed a warm jacket, extra food and a whistle, and he sheltered behind a large rock. If he had kept moving, we wouldn\'t have found him so quickly.' },
          { s: 'A', t: 'How is he now?' },
          { s: 'B', t: 'He\'s in hospital with a broken ankle, but he\'s in good spirits. He has already promised to buy Skye the biggest sausage in Scotland.' }
        ],
        vocab: [
          ['hiker', 'Wanderer, Wanderin'], ['to set off', 'aufbrechen'], ['fog', 'Nebel'], ['to slip', 'ausrutschen'],
          ['ankle', 'Knöchel'], ['guesthouse', 'Pension'], ['volunteer', 'Freiwillige/r'], ['to survive', 'überleben'],
          ['whistle', 'Pfeife'], ['to shelter', 'Schutz suchen'], ['in good spirits', 'guter Dinge']
        ],
        questions: [
          { t: 'mc', q: 'Why did the hiker lose the path?', o: ['Thick fog came down', 'It was already dark', 'Snow covered the path'], why: '"Thick fog came down in the afternoon, and he lost the path."' },
          { t: 'mc', q: 'Why couldn\'t he walk any further?', o: ['He had hurt his ankle', 'He was too tired', 'He was too cold'], why: '"He slipped on wet rocks and hurt his ankle, so he couldn\'t walk any further."' },
          { t: 'mc', q: 'Why didn\'t he phone for help?', o: ['There was no signal', 'He had lost his phone', 'His battery was empty'], why: '"He tried to, but there was no signal on that side of the mountain."' },
          { t: 'mc', q: 'Why was it lucky that he had talked to the owner of the guesthouse?', o: ['She knew his route and called the rescue team', 'She had given him a warm jacket and extra food', 'She was a volunteer in the rescue team herself'], why: 'He had told her "which route he was planning to take", and when he hadn\'t returned, "she called us".' },
          { t: 'gap', q: 'The team searched with twelve volunteers and ___ dogs.', accept: ['two', '2'], why: '"We did, with twelve volunteers and two dogs."' },
          { t: 'tf', q: 'A helicopter helped to search for the man during the night.', a: false, why: '"The helicopter couldn\'t fly because of the fog, so we had to search on foot."' },
          { t: 'mc', q: 'What did the hiker do right, according to Owen?', o: ['He stayed where he was', 'He kept walking to stay warm', 'He climbed higher to find a signal'], why: '"Instead of walking on in the dark, he stayed where he was."' },
          { t: 'mc', q: 'What has the hiker promised to do?', o: ['Buy the dog a big sausage', 'Never go hiking alone again', 'Join the rescue team'], why: '"He has already promised to buy Skye the biggest sausage in Scotland."' }
        ]
      },
      {
        id: 'fake-news',
        title: 'The free chocolate trick',
        kind: 'Short talk',
        intro: 'Ravi gives a talk to his class about false stories on the internet.',
        speakers: { A: { name: 'Ravi', g: 'm' } },
        lines: [
          { s: 'A', t: 'My talk today is about fake news, and I\'d like to begin with a confession. Last month, I shared a post which said that a famous chocolate company was giving free bars to everyone who forwarded the message. I sent it to fifteen friends. Nobody ever received any chocolate, and I felt rather stupid.' },
          { s: 'A', t: 'So why do false stories spread so quickly? Researchers have found that people share things that make them feel a strong emotion, such as anger, fear or excitement. The people who invent fake news know this. As a result, their headlines are written to shock you, not to inform you.' },
          { s: 'A', t: 'How can you protect yourself? Ask three questions before you share anything. Firstly, who is behind it? If you can\'t find out who wrote the story, be careful. Secondly, is anybody else reporting it? If something important has really happened, it will be reported by several serious news sites, not only by one.' },
          { s: 'A', t: 'Thirdly, and this is the question I find most useful: how does it make me feel? If a post makes you furious, or promises something that sounds too good to be true, that is exactly the moment to stop and check. Photos can be misleading as well. Sometimes a real picture is used with the wrong story, for example a photo of a flood that actually happened ten years earlier.' },
          { s: 'A', t: 'Since my chocolate disaster, I\'ve made a rule for myself. I wait five minutes before I share anything surprising. It has already saved me from three false stories. Thank you for listening.' }
        ],
        vocab: [
          ['confession', 'Geständnis'], ['to forward', 'weiterleiten'], ['to spread', 'sich verbreiten'], ['researcher', 'Forscher/in'],
          ['to invent', 'erfinden'], ['headline', 'Schlagzeile'], ['to protect', 'schützen'], ['furious', 'wütend'],
          ['misleading', 'irreführend'], ['flood', 'Überschwemmung'], ['disaster', 'Katastrophe']
        ],
        questions: [
          { t: 'mc', q: 'What did the post that Ravi shared promise?', o: ['Free chocolate for forwarding the message', 'A prize for the fifteen fastest friends', 'A visit to a famous chocolate company'], why: 'It said a company "was giving free bars to everyone who forwarded the message".' },
          { t: 'mc', q: 'How did Ravi feel afterwards?', o: ['Rather stupid', 'Rather proud', 'Very angry'], why: '"Nobody ever received any chocolate, and I felt rather stupid."' },
          { t: 'mc', q: 'Why do false stories spread so quickly?', o: ['People share things that cause strong emotions', 'People prefer short stories with photos', 'People trust everything their friends send'], why: '"People share things that make them feel a strong emotion, such as anger, fear or excitement."' },
          { t: 'mc', q: 'When should you be careful, according to Ravi\'s first question?', o: ['When you can\'t find out who wrote the story', 'When the story was written by a journalist', 'When the story is on several news sites'], why: '"If you can\'t find out who wrote the story, be careful."' },
          { t: 'tf', q: 'Ravi says that really important news is usually reported by only one news site.', a: false, why: 'It "will be reported by several serious news sites, not only by one".' },
          { t: 'mc', q: 'Which question does Ravi find most useful?', o: ['How does it make me feel?', 'Who is behind it?', 'Is anybody else reporting it?'], why: '"Thirdly, and this is the question I find most useful: how does it make me feel?"' },
          { t: 'mc', q: 'How can a real photo be misleading?', o: ['It is used with the wrong story', 'It is changed on a computer', 'It is too small to see clearly'], why: '"Sometimes a real picture is used with the wrong story."' },
          { t: 'gap', q: 'Ravi waits ___ minutes before he shares anything surprising.', accept: ['five', '5'], why: '"I wait five minutes before I share anything surprising."' }
        ]
      },
      {
        id: 'memory-tricks',
        title: 'Is my brain broken?',
        kind: 'Podcast',
        intro: 'Jake asks a memory expert why he forgets some things and remembers others.',
        speakers: { A: { name: 'Jake', g: 'm' }, B: { name: 'Professor Hart', g: 'f' } },
        lines: [
          { s: 'A', t: 'Welcome to Brain Waves. I\'m Jake, and I have a problem. I know the words of every song by my favourite band, but I forgot most of my French vocabulary a day after the test. Professor Nina Hart studies memory. Professor, is my brain broken?' },
          { s: 'B', t: 'Not at all, Jake. Your brain receives a huge amount of information every day, and it has to decide what to keep. Things that are repeated often, or connected to feelings, are stored. Most of the rest is thrown out.' },
          { s: 'A', t: 'So my brain thinks French isn\'t important?' },
          { s: 'B', t: 'If you only learn it the night before the test, yes. You\'ve heard those songs hundreds of times, and you enjoy them. The vocabulary was seen once and never used again.' },
          { s: 'A', t: 'I usually read the list again and again until I know it.' },
          { s: 'B', t: 'That is the most popular method, and unfortunately one of the weakest. It feels as if you are learning because the words look familiar. However, recognising a word isn\'t the same as remembering it. Testing yourself works far better. Cover the list and try to say the words.' },
          { s: 'A', t: 'And when should I do that?' },
          { s: 'B', t: 'Little and often. Ten minutes on four different days beats forty minutes on one evening. And don\'t forget sleep. While you are asleep, your brain moves the day\'s information into long-term memory.' },
          { s: 'A', t: 'So staying up late to study is a bad idea?' },
          { s: 'B', t: 'A very bad one.' },
          { s: 'A', t: 'Right. Tonight I\'m going to make some cards, test myself for ten minutes and then go to bed early. Thank you, Professor!' }
        ],
        vocab: [
          ['vocabulary', 'Wortschatz'], ['memory', 'Gedächtnis'], ['huge', 'riesig'], ['amount', 'Menge'], ['to repeat', 'wiederholen'],
          ['to store', 'speichern'], ['weak', 'schwach'], ['familiar', 'vertraut'], ['to recognise', 'wiedererkennen'],
          ['to cover', 'abdecken'], ['long-term memory', 'Langzeitgedächtnis']
        ],
        questions: [
          { t: 'mc', q: 'What is Jake\'s problem?', o: ['He forgets French words quickly but remembers songs', 'He can\'t remember the words of his favourite songs', 'He always gets bad marks in his French tests'], why: 'He knows every song, "but I forgot most of my French vocabulary a day after the test".' },
          { t: 'mc', q: 'Which information does the brain keep?', o: ['Things that are repeated or connected to feelings', 'Things that we read just before we go to sleep', 'Things that we have seen once in a long list'], why: '"Things that are repeated often, or connected to feelings, are stored."' },
          { t: 'mc', q: 'Why does Jake remember the songs so well?', o: ['He has heard them very often and enjoys them', 'He learned them the night before a concert', 'He has read the words again and again'], why: '"You\'ve heard those songs hundreds of times, and you enjoy them."' },
          { t: 'mc', q: 'Why does reading a list again and again feel like learning?', o: ['Because the words look familiar', 'Because it takes a lot of time', 'Because it is very hard work'], why: '"It feels as if you are learning because the words look familiar."' },
          { t: 'mc', q: 'What does the professor suggest instead?', o: ['Covering the list and trying to say the words', 'Writing the whole list out several times', 'Listening to French songs before the test'], why: '"Testing yourself works far better. Cover the list and try to say the words."' },
          { t: 'gap', q: 'Ten minutes on ___ different days is better than forty minutes on one evening.', accept: ['four', '4'], why: '"Ten minutes on four different days beats forty minutes on one evening."' },
          { t: 'tf', q: 'During sleep, the brain moves information into long-term memory.', a: true, why: '"While you are asleep, your brain moves the day\'s information into long-term memory."' },
          { t: 'mc', q: 'What is Jake going to do tonight?', o: ['Test himself with cards and go to bed early', 'Read his list until he knows every word', 'Stay up late and study for forty minutes'], why: '"I\'m going to make some cards, test myself for ten minutes and then go to bed early."' }
        ]
      },
      {
        id: 'school-garden',
        title: 'From car park to carrots',
        kind: 'Radio interview',
        intro: 'Finn from the school radio visits a special corner of the school grounds.',
        speakers: { A: { name: 'Finn', g: 'm' }, B: { name: 'Aisha', g: 'f' }, C: { name: 'Mrs Park', g: 'f' } },
        lines: [
          { s: 'A', t: 'This is Finn from school radio, and I\'m standing in what used to be the ugliest corner of our school grounds. Two years ago this was an old car park. Today it\'s a garden. Aisha, whose idea was it?' },
          { s: 'B', t: 'It was Mrs Park\'s idea. She had noticed that half of our class couldn\'t say where carrots come from. Somebody thought they grew on trees!' },
          { s: 'C', t: 'So I asked the head teacher for the car park, which was hardly ever used. She agreed, on condition that the project wouldn\'t cost the school anything.' },
          { s: 'A', t: 'So how did you pay for it?' },
          { s: 'B', t: 'We organised a cake sale, and a local garden centre gave us seeds and tools for free. The soil was the biggest problem. It was so full of stones that nothing would grow in the first spring.' },
          { s: 'C', t: 'We nearly stopped. Instead, the students built raised beds out of old wooden boxes and filled them with fresh soil. After that, things started to grow.' },
          { s: 'A', t: 'What do you grow now?' },
          { s: 'B', t: 'Tomatoes, beans, pumpkins and lots of herbs. The vegetables are used by the school kitchen, and whatever is left is sold to parents on Friday afternoons.' },
          { s: 'A', t: 'Has the garden changed anything, Mrs Park?' },
          { s: 'C', t: 'More than I expected. Students who find it hard to sit still in class are often the best gardeners. And I\'ve noticed that our students eat more vegetables now that they have grown them themselves.' },
          { s: 'A', t: 'And what\'s the next step?' },
          { s: 'B', t: 'Bees! We\'ve been promised two beehives for next spring. I can\'t wait to try our own honey.' }
        ],
        vocab: [
          ['school grounds', 'Schulgelände'], ['car park', 'Parkplatz'], ['hardly ever', 'fast nie'], ['on condition that', 'unter der Bedingung, dass'],
          ['seeds', 'Samen'], ['soil', 'Erde'], ['raised bed', 'Hochbeet'], ['pumpkin', 'Kürbis'], ['herbs', 'Kräuter'],
          ['to grow', 'wachsen, anbauen'], ['beehive', 'Bienenstock']
        ],
        questions: [
          { t: 'mc', q: 'What was in this corner of the school grounds two years ago?', o: ['An old car park', 'A football pitch', 'A bike shed'], why: '"Two years ago this was an old car park."' },
          { t: 'mc', q: 'Why did Mrs Park have the idea for a garden?', o: ['Many students didn\'t know where vegetables come from', 'The school kitchen needed cheaper vegetables', 'The head teacher thought the corner was ugly'], why: '"Half of our class couldn\'t say where carrots come from."' },
          { t: 'mc', q: 'On what condition did the head teacher agree?', o: ['The project must not cost the school anything', 'The project must be finished within two years', 'The project must be for older students only'], why: 'She agreed "on condition that the project wouldn\'t cost the school anything".' },
          { t: 'mc', q: 'How did the students get seeds and tools?', o: ['A garden centre gave them for free', 'They bought them after the cake sale', 'Parents brought them from home'], why: '"A local garden centre gave us seeds and tools for free."' },
          { t: 'mc', q: 'Why did nothing grow in the first spring?', o: ['The soil was full of stones', 'The weather was too cold', 'Nobody watered the plants'], why: 'The soil "was so full of stones that nothing would grow in the first spring".' },
          { t: 'mc', q: 'What happens to the vegetables that the school kitchen doesn\'t need?', o: ['They are sold to parents', 'They are given to the garden centre', 'They are taken home by the students'], why: '"Whatever is left is sold to parents on Friday afternoons."' },
          { t: 'tf', q: 'Mrs Park says that students who can\'t sit still in class are often the best gardeners.', a: true, why: '"Students who find it hard to sit still in class are often the best gardeners."' },
          { t: 'gap', q: 'The school has been promised two ___ for next spring.', accept: ['beehives', 'beehive', 'bee hives', 'hives'], why: '"We\'ve been promised two beehives for next spring."' }
        ]
      },
      {
        id: 'missed-train',
        title: 'Eleven minutes in York',
        kind: 'Story',
        intro: 'Isabel tells the story of a train journey with her older brother.',
        speakers: { A: { name: 'Isabel', g: 'f' } },
        lines: [
          { s: 'A', t: 'Last summer, my brother Max and I travelled to Edinburgh by train to visit our grandparents. It was the first time we had been allowed to go without our parents, and Mum had written everything down for us: change trains in York, platform five, eleven minutes.' },
          { s: 'A', t: 'When we arrived in York, Max announced that he was starving. I told him that we didn\'t have enough time. He said that eleven minutes was plenty and ran to a sandwich shop. Of course, there was a queue. By the time he came back, with two cheese sandwiches, our train was leaving the platform.' },
          { s: 'A', t: 'I was furious. The next train to Edinburgh didn\'t leave for two hours. I borrowed a phone at the information desk and rang him. Although I had expected him to be annoyed, he just laughed and told us to go and look at the city.' },
          { s: 'A', t: 'So we did. We walked along the old city walls, and Max bought me an ice cream to say sorry. I have to admit that I had stopped being angry by then. In fact, it was the nicest part of the whole journey.' },
          { s: 'A', t: 'When we finally reached Edinburgh, Grandad told us that a tree had fallen onto the line that afternoon. The train we had missed had been stuck in the middle of nowhere for almost two hours, and it had arrived only ten minutes before ours. If Max hadn\'t been so hungry, we would have spent the afternoon staring at a field. He has reminded me of that ever since.' }
        ],
        vocab: [
          ['platform', 'Perron, Gleis'], ['to announce', 'verkünden'], ['starving', 'am Verhungern'], ['plenty', 'mehr als genug'],
          ['queue', 'Warteschlange'], ['to borrow', 'ausleihen'], ['annoyed', 'verärgert'], ['to admit', 'zugeben'],
          ['journey', 'Reise'], ['stuck', 'steckengeblieben'], ['to remind', 'erinnern']
        ],
        questions: [
          { t: 'mc', q: 'Why was this journey special for Isabel and Max?', o: ['They travelled without their parents for the first time', 'They visited their grandparents for the first time', 'They went to Edinburgh by train for the first time'], why: '"It was the first time we had been allowed to go without our parents."' },
          { t: 'gap', q: 'They had ___ minutes to change trains in York.', accept: ['eleven', '11'], why: 'Mum had written: "change trains in York, platform five, eleven minutes".' },
          { t: 'mc', q: 'Why did they miss their train?', o: ['Max had to queue in a sandwich shop', 'Max went to the wrong platform', 'Their first train arrived too late'], why: 'Max ran to a sandwich shop, and "of course, there was a queue".' },
          { t: 'mc', q: 'How did Grandad react when Isabel phoned him?', o: ['He laughed and told them to look at the city', 'He was annoyed because he was already waiting', 'He offered to drive to York and fetch them'], why: 'She had expected him to be annoyed, but "he just laughed and told us to go and look at the city".' },
          { t: 'mc', q: 'Why did Max buy Isabel an ice cream?', o: ['He wanted to say sorry', 'He was still starving', 'Grandad had told him to'], why: '"Max bought me an ice cream to say sorry."' },
          { t: 'tf', q: 'Isabel was still angry when they walked along the city walls.', a: false, why: '"I have to admit that I had stopped being angry by then."' },
          { t: 'mc', q: 'What had happened to the train they had missed?', o: ['It had been stuck because of a fallen tree', 'It had broken down in York station', 'It had arrived in Edinburgh too early'], why: 'A tree had fallen onto the line, and the train "had been stuck in the middle of nowhere for almost two hours".' },
          { t: 'mc', q: 'Why was it lucky in the end that Max had been so hungry?', o: ['They saw York instead of sitting in a stuck train', 'They arrived in Edinburgh before the first train', 'They got the money for their tickets back'], why: '"If Max hadn\'t been so hungry, we would have spent the afternoon staring at a field."' }
        ]
      },
      {
        id: 'exam-stress',
        title: 'My head goes empty',
        kind: 'Advice show',
        intro: 'Theo phones a radio show because he is worried about something at school.',
        speakers: { A: { name: 'Megan', g: 'f' }, B: { name: 'Theo', g: 'm' } },
        lines: [
          { s: 'A', t: 'You\'re listening to Ask Megan. On the line is Theo, who is fourteen. Theo, what\'s on your mind?' },
          { s: 'B', t: 'We\'ve got exams in two weeks, and I\'m panicking. Last year I knew everything at home. Then I sat down in the exam room, and my head was completely empty.' },
          { s: 'A', t: 'That sounds horrible, but it\'s more common than you think. How do you prepare?' },
          { s: 'B', t: 'I study in my room every evening until eleven. And I\'ve stopped going to basketball training, so that I have more time.' },
          { s: 'A', t: 'I understand why you did that. However, it\'s the first thing you should change. Exercise is one of the best ways to reduce stress, and your brain needs breaks in order to remember things. Go back to training.' },
          { s: 'B', t: 'But then I\'ll lose two evenings a week.' },
          { s: 'A', t: 'You\'ll lose a few hours, but you\'ll study better in the hours that are left. Do you make a plan?' },
          { s: 'B', t: 'No. I just start with the subject that I like best.' },
          { s: 'A', t: 'Try it the other way round. Do the subject you find hardest first, while you\'re still fresh. And write a timetable, so that you can see that there is enough time for everything. A lot of panic comes from not knowing where to begin.' },
          { s: 'B', t: 'And what if my head goes empty again in the exam?' },
          { s: 'A', t: 'Put your pen down and breathe slowly, five times. Then start with a question that you can answer easily. Once you have begun, the rest usually comes back.' },
          { s: 'B', t: 'OK, I\'ll try. I think I\'ll ring my coach right now.' },
          { s: 'A', t: 'Good luck, Theo!' }
        ],
        vocab: [
          ['exam', 'Prüfung'], ['to panic', 'in Panik geraten'], ['common', 'häufig'], ['to prepare', 'sich vorbereiten'],
          ['exercise', 'Bewegung, Sport'], ['to reduce', 'verringern'], ['subject', 'Schulfach'], ['the other way round', 'umgekehrt'],
          ['timetable', 'Zeitplan'], ['to breathe', 'atmen'], ['coach', 'Trainer/in']
        ],
        questions: [
          { t: 'mc', q: 'What happened to Theo in the exams last year?', o: ['He knew everything at home but forgot it in the exam', 'He had not studied enough and knew nothing', 'He was ill and could not take the exams'], why: '"Last year I knew everything at home. Then I sat down in the exam room, and my head was completely empty."' },
          { t: 'tf', q: 'Megan says that Theo\'s problem is very unusual.', a: false, why: 'She says: "It\'s more common than you think."' },
          { t: 'mc', q: 'Why has Theo stopped going to basketball training?', o: ['He wants more time for studying', 'His parents told him to stop', 'He has hurt himself'], why: '"I\'ve stopped going to basketball training, so that I have more time."' },
          { t: 'mc', q: 'Why does Megan want him to go back to training?', o: ['Exercise reduces stress and the brain needs breaks', 'His team needs him for an important match', 'He studies too much and learns nothing new'], why: '"Exercise is one of the best ways to reduce stress, and your brain needs breaks in order to remember things."' },
          { t: 'mc', q: 'Which subject should Theo start with?', o: ['The one he finds hardest', 'The one he likes best', 'The one with the first exam'], why: '"Do the subject you find hardest first, while you\'re still fresh."' },
          { t: 'mc', q: 'Why should Theo write a timetable?', o: ['To see that there is enough time for everything', 'To show his parents how hard he works', 'To plan his evenings until eleven o\'clock'], why: 'He should write a timetable "so that you can see that there is enough time for everything".' },
          { t: 'gap', q: 'If his head goes empty, Theo should put his pen down and breathe slowly ___ times.', accept: ['five', '5'], why: '"Put your pen down and breathe slowly, five times."' },
          { t: 'mc', q: 'What is Theo going to do right after the call?', o: ['Ring his basketball coach', 'Write a timetable', 'Study his hardest subject'], why: '"I think I\'ll ring my coach right now."' }
        ]
      },
      {
        id: 'car-free-town',
        title: 'Birds instead of engines',
        kind: 'News report',
        intro: 'A reporter visits a small town one year after a big change.',
        speakers: { A: { name: 'Chloe', g: 'f' }, B: { name: 'Mr Patel', g: 'm' }, C: { name: 'Freya', g: 'f' } },
        lines: [
          { s: 'A', t: 'This is Chloe Adams reporting from Millbrook, a small town that made a brave decision exactly one year ago. Since then, cars have not been allowed in the town centre. Only buses and bicycles may enter, and delivery vans before ten in the morning. I\'m standing in Market Street, where you can now hear birds instead of engines. But is everybody happy? Mr Patel, you own the bookshop here.' },
          { s: 'B', t: 'I do, and I\'ll be honest with you. I was against the ban. I even collected signatures to stop it, because I was sure that my customers would stay away if they couldn\'t park outside.' },
          { s: 'A', t: 'And did they?' },
          { s: 'B', t: 'For the first two months, yes. Then the council put benches and trees where the parking spaces had been, and people started to stay longer. I now sell more books than before, so I have to admit that I was wrong.' },
          { s: 'A', t: 'Freya, you\'re fifteen and you cycle to school through the centre. What has changed for you?' },
          { s: 'C', t: 'I feel much safer. I used to cycle on the pavement because the road was so busy, although that isn\'t allowed. Now even my little brother can ride to school on his own.' },
          { s: 'A', t: 'Is there anything you don\'t like?' },
          { s: 'C', t: 'The buses. More people take them now, so they are often full, and I\'ve been left standing at the stop a few times.' },
          { s: 'A', t: 'The council has told us that two extra buses will be added in September. It also says that the air in the centre has become cleaner. Chloe Adams, Radio South.' }
        ],
        vocab: [
          ['brave', 'mutig'], ['decision', 'Entscheidung'], ['delivery van', 'Lieferwagen'], ['engine', 'Motor'],
          ['ban', 'Verbot'], ['signature', 'Unterschrift'], ['customer', 'Kunde, Kundin'], ['council', 'Gemeinderat'],
          ['bench', 'Sitzbank'], ['pavement', 'Trottoir'], ['on his own', 'allein']
        ],
        questions: [
          { t: 'mc', q: 'What decision did Millbrook make a year ago?', o: ['To ban cars from the town centre', 'To build a new car park in the centre', 'To close Market Street to buses'], why: '"Cars have not been allowed in the town centre."' },
          { t: 'gap', q: 'Delivery vans may enter the centre before ___ in the morning.', accept: ['ten', '10'], why: 'Buses and bicycles may enter, "and delivery vans before ten in the morning".' },
          { t: 'mc', q: 'Why was Mr Patel against the ban at first?', o: ['He was afraid that his customers would stay away', 'He was afraid that his books would arrive late', 'He was afraid that the street would be too noisy'], why: '"I was sure that my customers would stay away if they couldn\'t park outside."' },
          { t: 'mc', q: 'Why did people start to stay longer in the centre?', o: ['The council put benches and trees there', 'The shops stayed open in the evening', 'The council made the buses free'], why: '"The council put benches and trees where the parking spaces had been, and people started to stay longer."' },
          { t: 'tf', q: 'Mr Patel still thinks that the ban was a mistake.', a: false, why: 'He sells more books than before and says: "I have to admit that I was wrong."' },
          { t: 'mc', q: 'Why did Freya use to cycle on the pavement?', o: ['The road was so busy', 'It was allowed then', 'Her brother was with her'], why: '"I used to cycle on the pavement because the road was so busy."' },
          { t: 'mc', q: 'What does Freya not like about the change?', o: ['The buses are often full', 'There are too many cyclists', 'The centre is too quiet now'], why: '"More people take them now, so they are often full."' },
          { t: 'mc', q: 'What is the council going to do in September?', o: ['Add two extra buses', 'Allow cars again', 'Plant more trees'], why: '"Two extra buses will be added in September."' }
        ]
      }
    ]
  }
);
