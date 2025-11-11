const QUESTIONS = [
  {
    id: 1,
    question: "Bir React uygulamasının yapı taşı nedir?",
    options: ["Component", "Prop", "State", "Hook"],
    correctAnswer: "Component",
  },
  {
    id: 2,
    question: "Bir parent'tan child'a veri nasıl aktarılır?",
    options: ["State", "Props", "JSX", "Functions"],
    correctAnswer: "Props",
  },
  {
    id: 3,
    question: "Bir bileşenin kendi iç verisini tutan yapı nedir?",
    options: ["Hook", "State", "Effect", "Class"],
    correctAnswer: "State",
  },
  {
    id: 4,
    question: "Liste render etmek için en çok kullanılan yöntem nedir?",
    options: [".forEach()", ".map()", ".filter()", "JSON.stringify()"],
    correctAnswer: ".map()",
  },
];

export default QUESTIONS;