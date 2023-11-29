console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((element) => {
  return element.answer.toLowerCase();
}); // ['as often as you like.', ...]
const questionsAndAnswersTogether = cards.map((element) => {
  return element.question + " - " + element.answer;
}); // ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = cards.map((element, index) => {
  const keys = Object.keys(cards[index]);
  console.log(keys[2]);
  return `${keys[2]}: '${element.question}', ${keys[3]}: '${element.answer}`;
}); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
