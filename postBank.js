const data = [
  { id: 1, upvotes: 257, title: "Fianto Duri, the complete tutorial", content: "Fianto Duri is a charm that was created to be combined with protective spells (Can be used with another person's shield spell)(When used on something else creates a explosion). As we already knows the (i.e.) Shield Charm needs the caster to stay focused on the spell in order to continue protecting him, so Fianto Duri allows the caster to keep a charm “alive” while he does some other work or casts some other spells.", name: "RubeusH", date: new Date(Date.now() - 15000000) },
  { id: 2, upvotes: 221, title: "Untransfiguration classes to become compulsory at Hogwarts", content: "Learning untransfiguration is going to be mandatory at Hogwarts School of Witchcraft and Wizardry from 2017 onward. Untransfiguration will be covered in beginner-level spellbooks such as A Beginner's Guide to Transfiguration. Failure to at least attempt to untranfigure a wrongly-done transfiguration will be considered irresponsible.", name: "Baddock", date: new Date(Date.now() - 90000000) },
  { id: 3, upvotes: 198, title: "Cracking the Aurologist Interview", content: "Now in the 5th edition, Cracking the Aurologist Interview gives you the interview preparation you need to get the top aura study jobs. The book is over 500 pages and includes 150 aurologist interview questions and answers, as well as other advice.", name: "Hetty", date: new Date(Date.now() - 900000) },
  { id: 4, upvotes: 171, title: "ASK WN: What do you use to digitalize your scrolls?", content: "Some scrolls need conservation treatment before they can be safely transported, handled, and digitized.  After these questions are answered, Preservation and Information Technology Specialists assess the project requirements and create the digitilized version.", name: "Alphard", date: new Date(Date.now() - 5000) },
  { id: 5, upvotes: 166, title: "The Pragmatic Dragon Feeder", content: "In The Pragmatic Dragon Feeder, the author Baruffio tell us how to give food to dragons in a way that we can follow. How did they get so smart? Aren't they just as focused on details as other dragon feeders? The answer is that they paid attention to what they were doing while they were doing it.", name: "Baruffio", date: new Date(Date.now() - 10000000) },
  { id: 6, upvotes: 145, title: "The complete quidditch statistics", content: "This is the Complete source for quidditch history including complete player, team, and league stats, awards, records, leaders, rookies and scores.", name: "Hbeery", date: new Date(Date.now() - 5000000) },
  { id: 7, upvotes: 126, title: "Ordinary Wizarding Levels study guide", content: "The Ordinary Wizarding Level (O.W.L.) is, as you know, going to determine whether or not you will be allowed to continue taking that subject in subsequent school years, and whether they might be successful in obtaining a particular job. This guide help direct you to the most important information you need to know to ace the test", name: "Alatar", date: new Date(Date.now() - 600000) },
  { id: 8, upvotes: 114, title: "Is muggle-baiting ever acceptable?", content: "Muggle-baiting can be a manifestation of anti-Muggle sentiments and is not acceptable according to the International Statute of Wizarding Secrecy - But, are there any circumstances under which it could be acceptable?", name: "Falco", date: new Date(Date.now() - 60000000) },
  { id: 9, upvotes: 102, title: "Conserving waterplants cheatsheet.", content: "This Cheat Sheet is dedicated to providing wizards the information they want in an approachable, entertaining way.", name: "Otto", date: new Date(Date.now() - 3000000) },
  { id: 10, upvotes: 59, title: "Could wizards prevent WW3?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fermentum enim. Pellentesque sodales ut risus eu porta. Duis dictum rhoncus semper. Proin accumsan mollis ligula, eget elementum nibh dignissim quis. Proin augue risus, mollis non neque in, molestie rutrum purus. Morbi pretium nisl a commodo.", name: "Cuthbert", date: new Date(Date.now() - 6000000) },
  { id: 11, upvotes: 46, title: "Show WN: Wand-Extinguishing Protection", content: "This spell extinguishes the wand the caster is holding, a counter-charm to Lumos.", name: "Humphrey22", date: new Date(Date.now() - 50000) },
  { id: 12, upvotes: 30, title: "Do you still use Alarte Ascendare?", content: "You've got levicorpus and Ascendio and wingardium leviosa, so is anyone still using Alarte Ascendare, too? (That is, unless you find wingardium leviosa too difficult to pronounce.)", name: "Bellatrix1", date: new Date(Date.now() - 6000000) },
  { id: 13, upvotes: 21, title: "Mailing lists WN readers ought to know about?", content: "I love to subscribe to information feeds through mailing list subscription. What do you subscribe to that you think others would benefit by if they were to as well?", name: "Dracod", date: new Date(Date.now() - 60000) },
  { id: 14, upvotes: 10, title: "How to tell which spell used on a bug?", content: "Question: Are ther any non-jinx incantations available to detect which spell used on a bug?", name: "Lupin", date: new Date() }
];

const list = () => {
  return [...data] 
}; 


const find = (id) => {
  const post = data.find(post => post.id === Number(id));
  return {...post}; 
}

module.exports = { list: list, find: find };



