const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/books', (req, res) => {
  const books = [
    {
      title: "The Great Reclamation",
      description: "An aching love story and powerful coming-of-age that reckons with the legacy of British colonialism, the World War II Japanese occupation, and the pursuit of modernity, The Great Reclamation confronts the wounds of progress, the sacrifices of love, and the difficulty of defining home when nature and nation collide, literally shifting the land beneath people’s feet.",
      cover: "https://assets.lulu.com/cover_thumbs/j/e/je5vd5m-ebook-shortedge-384.jpg"
    },
    {
      title: "Warrior Girl Unearthed",
      description: "In order to reclaim this inheritance for her people, Perry has no choice but to take matters into her own hands. She can only count on her friends and allies, including her overachieving twin and a charming new boy in town with unwavering morals. Old rivalries, sister secrets, and botched heists cannot - will not - stop her from uncovering the mystery before the ancestors and missing women are lost forever.",
      cover: "https://assets.lulu.com/cover_thumbs/7/k/7ky4v4p-ebook-shortedge-384.jpg"

    },
    {
      title: "Symphony of Secrets",
      description: "In the present day, Bern and Eboni begin to uncover more clues that indicate Delaney may have had help in composing his most successful work. Armed with more questions than answers and caught in the crosshairs of a powerful organization who will stop at nothing to keep their secret hidden, Bern and Eboni will move heaven and earth in their dogged quest to right history’s wrongs.",
      cover: "https://assets.lulu.com/cover_thumbs/d/y/dyrk6k8-ebook-shortedge-384.jpg"
    },
    {
      title: "Hang the Moon",
      description: "Sallie Kincaid is the daughter of the biggest man in a small town, the charismatic Duke Kincaid. Born at the turn of the 20th century into a life of comfort and privilege, Sallie remembers little about her mother who died in a violent argument with the Duke. By the time she is just eight years old, the Duke has remarried and had a son, Eddie. While Sallie is her father’s daughter, sharp-witted and resourceful, Eddie is his mother’s son, timid and cerebral. When Sallie tries to teach young Eddie to be more like their father, her daredevil coaching leads to an accident, and Sallie is cast out.",
      cover: "https://assets.lulu.com/cover_thumbs/d/y/dyrk698-ebook-shortedge-384.jpg"
    },
    {
      title: "Small Mercies",
      description: "Set against the hot, tumultuous months when the city’s desegregation of its public schools exploded in violence, Small Mercies is a superb thriller, a brutal depiction of criminality and power, and an unflinching portrait of the dark heart of American racism. It is a mesmerizing and wrenching work that only Dennis Lehane could write.",
      cover: "https://assets.lulu.com/cover_thumbs/2/m/2m2kw66-ebook-shortedge-384.jpg"
    },
    {
      title: "Lady Tan's Circle of Women",
      description: "How might a woman like Yunxian break free of these traditions and lead a life of such importance that many of her remedies are still used five centuries later? How might the power of friendship support or complicate these efforts? A captivating story of women helping each other, Lady Tan’s Circle of Women is a triumphant reimagining of the life of one person who was remarkable in the Ming dynasty and would be considered remarkable today.",
      cover: "https://assets.lulu.com/cover_thumbs/8/4/84zv525-ebook-shortedge-384.jpg"
    },
    {
      title: "King: A Life",
      description: " In this revelatory new portrait of the preacher and activist who shook the world, the bestselling biographer gives us an intimate view of the courageous and often emotionally troubled human being who demanded peaceful protest for his movement but was rarely at peace with himself. He casts fresh light on the King family’s origins as well as MLK’s complex relationships with his wife, father, and fellow activists. King reveals a minister wrestling with his own human frailties and dark moods, a citizen hunted by his own government, and a man determined to fight for justice even if it proved to be a fight to the death. ",
      cover: "https://assets.lulu.com/cover_thumbs/k/v/kvnzeqg-ebook-shortedge-384.jpg"
    },
    {
      title: "Happy Place",
      description: "Only this year, Harriet and Wyn are lying through their teeth while trying not to notice how desperately they still want each other. Because the cottage is for sale and this is the last week they’ll all have together in this place. They can’t stand to break their friends’ hearts, and so they’ll play their parts. Harriet will be the driven surgical resident who never starts a fight, and Wyn will be the laid-back charmer who never lets the cracks show. It’s a flawless plan (if you look at it from a great distance and through a pair of sunscreen-smeared sunglasses). After years of being in love, how hard can it be to fake it for one week…in front of those who know you best?",
      cover: "https://assets.lulu.com/cover_thumbs/9/5/95mnp4k-ebook-shortedge-384.jpg"
    },
    {
      title: "The Covenant of Water",
      description: "A shimmering evocation of a bygone India and of the passage of time itself, The Covenant of Water is a hymn to progress in medicine and to human understanding, and a humbling testament to the difficulties undergone by past generations for the sake of those alive today. It is one of the most masterful literary novels published in recent years.",
      cover: "https://assets.lulu.com/cover_thumbs/d/y/dyr957d-ebook-shortedge-384.jpg"
    },
    {
      title: "First Lie",
      description: "The Wager is part of a five-warship squadron with a two-part mission in an imperial conflict between England and Spain called the War of Jenkins’ Ear. First, the fleet is to pick off Spanish ships along the coast of South America in order to weaken the Spanish Empire’s colonial holdings in the area.",
      cover: "https://images4.penguinrandomhouse.com/cover/9780593492918"
    },
    {
      title: "Age of Vice: A GMA Book Club Pick",
      description: "Equal parts crime thriller and family saga, transporting readers from the dusty villages of Uttar Pradesh to the urban energy of New Delhi, Age of Vice is an intoxicating novel of gangsters and lovers, false friendships, forbidden romance, and the consequences of corruption.It is binge-worthy entertainment at its literary best.",
      cover: "https://assets.lulu.com/cover_thumbs/j/e/je5kry7-ebook-shortedge-384.jpg"
    },
    {
      title: "Headshot",
      description: "Each of the eight teenage girl boxers in this blistering debut novel has her own reasons for the sacrifices she has made to come to Reno, Nevada, to compete to be named the best in the country. Through a series of face-offs that are raw, ecstatic, and punctuated by flashes of humor and tenderness, prizewinning writer Rita Bullwinkel animates the competitors’ pasts and futures as they summon the emotion, imagination, and force of will required to win. ",
      cover: "https://images1.penguinrandomhouse.com/cover/9780593654101"
    },
    {
      title: "Weyward",
      description: "Weaving together the stories of three extraordinary women across five centuries, Emilia Hart's Weyward is an enthralling novel of female resilience and the transformative power of the natural world.",
      cover: "https://assets.lulu.com/cover_thumbs/p/6/p6drz9p-ebook-shortedge-384.jpg"
    },
    {
      title: "All the Sinners Bleed",
      description: "With the killer’s possible connections to a local church and the town’s harrowing history weighing on him, Titus projects confidence about closing the case while concealing a painful secret from his own past. At the same time, he also has to contend with a far-right group that wants to hold a parade in celebration of the town’s Confederate history.Charon is Titus’s home and his heart. But where faith and violence meet, there will be a reckoning.",
      cover: "https://assets.lulu.com/cover_thumbs/8/4/84zeg9q-ebook-shortedge-384.jpg"
    },
    {
      title: "Hello Beautiful",
      description: "An exquisite homage to Louisa May Alcott’s timeless classic, Little Women, Hello Beautiful is a profoundly moving portrait of what is possible when we choose to love someone not in spite of who they are, but because of it.",
      cover: "https://assets.lulu.com/cover_thumbs/y/v/yv7w4jp-ebook-shortedge-384.jpg"
    },
    {
      title: "The Deamon of Unrest",
      description: "Master storyteller Erik Larson offers a gripping account of the chaotic months between Lincoln’s election and the Confederacy’s shelling of Sumter—a period marked by tragic errors and miscommunications, enflamed egos and craven ambitions, personal tragedies and betrayals.",
      cover: "https://images1.penguinrandomhouse.com/cover/9780385348744"
    },
    {
      title: "Wandering Stars",
      description: "Extending his constellation of narratives into the past and future, Tommy Orange traces the legacies of the Sand Creek Massacre of 1864 and the Carlisle Indian Industrial School through three generations of a family in a story that is by turns shattering and wondrous.",
      cover: "https://images1.penguinrandomhouse.com/cover/9780593318256"
    },
    {
      title: "Lies and Weddings",
      description: " A forbidden affair erupts volcanically amid a decadent tropical wedding in this outrageous comedy of manners and thrillingly plotted story of love, money, murder - and the lies we tell about them all.",
      cover: "https://images1.penguinrandomhouse.com/cover/9780385546294"
    },
    {
      title: "The Hunter",
      description: "It’s a blazing summer when two men arrive in a small village in the West of Ireland. One of them is coming home. Both of them are coming to get rich. One of them is coming to die. From the writer who is “in a class by herself” (The New York Times), a nuanced, atmospheric tale that explores what we’ll do for our loved ones, what we’ll do for revenge, and what we sacrifice when the two collide.",
      cover: "https://images2.penguinrandomhouse.com/cover/9780593493458"
    },
    {
      title: "All The Colours of the Drak",
      description: " Beginning with a boy's abduction in a small town and the obsession for justice it ignites in him and his best friend, this sprawling crime novel transcends its genre to become something epic in scope, haunting and ultimately deeply moving.",
      cover: "https://images4.penguinrandomhouse.com/cover/9780593798874"
    },
    {
      title: "Victim",
      description: "There’s a fine line between bending the truth and telling bold-faced lies, and Javier Perez is willing to cross it. Named a BBC Best Book of 2024, Victim is a fearless satire about a hustler from the Bronx who sees through the veneer of diversity initiatives and decides to cash in on the odd currency of identity.",
      cover: "https://images2.penguinrandomhouse.com/cover/9780385549974"
    },
    {
      title: "Theres Always This Year",
      description: "A “powerful” (The Guardian) reflection on basketball, life, and home — from the author of the National Book Award finalist A Little Devil in America. Named a Must-Read and Best Book of the Year by Barnes & Noble and Time.",
      cover: "https://images1.penguinrandomhouse.com/cover/9780593448793"
    },
    {
      title: "Good Material",
      description: "From the bestselling author of Ghosts and Everything I Know About Love: A story of heartbreak and friendship and how to survive both. In this sharply funny and exquisitely relatable story of romantic disaster and friendship, Dolly Alderton offers up a love story with two endings, demonstrating once again why she is one of the most exciting writers today, and the true voice of a generation.",
      cover: "https://images2.penguinrandomhouse.com/cover/9780593801307"
    },
    {
      title: "Martyr",
      description: "A newly sober, orphaned son of Iranian immigrants, guided by the voice of artists, poets, and kings, embarks on a remarkable search for a family secret that leads him to a terminally ill painter living out her final days in the Brooklyn Museum. Electrifying, funny, and wholly original, Martyr! heralds the arrival of an essential new voice in contemporary fiction. Named a Best and Must-Read of the Year for 2024 by The New York Times, Time, and Amazon Editors.",
      cover: "https://images2.penguinrandomhouse.com/cover/9780593685778"
    },
    {
      title: "All Fours",
      description: "A semi-famous artist announces her plan to drive cross-country, from LA to NY. Thirty minutes after leaving her husband and child at home, she spontaneously exits the freeway, checks into a nondescript motel, and immerses herself in an entirely different journey. The New York Times bestselling author returns with an irreverently sexy, tender, hilarious, and surprising novel about a woman upending her life.",
      cover: "https://images1.penguinrandomhouse.com/cover/9780593190265"
    },
    {
      title: "Everyone Who is Gone is Here",
      description: "An epic, heartbreaking, and deeply reported history of the disastrous humanitarian crisis at the southern border told through the lives of the migrants forced to risk everything and the policymakers who determine their fate, by New Yorker staff writer Jonathan Blitzer.",
      cover: "https://images2.penguinrandomhouse.com/cover/9781984880802"
    },
    {
      title: "Good Energy",
      description: "'Good Energy' illuminates the connection between our lifestyle choices and our energy levels. It offers actionable strategies to enhance wellness, increase vitality, and achieve a balanced, energized life through mindful living. What’s in it for me? A guide to unlocking daily vitality",
      cover: "https://images1.penguinrandomhouse.com/cover/9780593712641"
    }
  ];
  
    res.status(200).json({ books });
});

app.post('/api/books',(req, res)=>{
    console.log(req.body.title);
    res.send("Book Added!");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});