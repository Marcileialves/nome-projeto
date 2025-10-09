"use client";
import { useState } from "react";
import styles from './page.module.css'

const questions = [
  {
    question: "Quem é considerado o pai do computador?",
    options: ["Bill Gates", "Charles Babbage", "Steve Jobs", "Alan Turing"],
    answer: "Charles Babbage",
  },
  {
    question: "Qual foi o primeiro navegador web popular?",
    options: ["Firefox", "Internet Explorer", "Mosaic", "Chrome"],
    answer: "Mosaic",
  },
  {
    question: "Qual empresa criou o primeiro smartphone comercial?",
    options: ["Apple", "IBM", "Nokia", "Samsung"],
    answer: "IBM",
  },
  {
    question: "O que significa a sigla 'HTML'?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Markup Language", "Home Tool Markup Language"],
    answer: "HyperText Markup Language",
  },
  {
    question: "Quem inventou o Linux?",
    options: ["Linus Torvalds", "Richard Stallman", "Steve Wozniak", "Mark Zuckerberg"],
    answer: "Linus Torvalds",
  },
  {
    question: "Qual empresa desenvolveu o primeiro microprocessador?",
    options: ["Intel", "AMD", "IBM", "Motorola"],
    answer: "Intel",
  },
  {
    question: "Qual foi o primeiro sistema operacional da Microsoft?",
    options: ["Windows 1.0", "MS-DOS", "Windows 95", "OS/2"],
    answer: "MS-DOS",
  },
  {
    question: "O que é a inteligência artificial (IA)?",
    options: ["Programas que aprendem sozinhos", "Computadores que fazem cálculos rápidos", "Redes de computadores", "Sistemas de armazenamento"],
    answer: "Programas que aprendem sozinhos",
  },
  {
    question: "Qual foi o primeiro site da história?",
    options: ["Google.com", "CERN.ch", "Yahoo.com", "IBM.com"],
    answer: "CERN.ch",
  },
  {
    question: "O que significa 'URL'?",
    options: ["Uniform Resource Locator", "Universal Resource Link", "Unique Reference Link", "Uniform Reference Locator"],
    answer: "Uniform Resource Locator",
  },
  {
    question: "Quem criou o primeiro computador eletrônico digital?",
    options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Konrad Zuse"],
    answer: "Konrad Zuse",
  },
  {
    question: "Qual é a função de um 'router' na rede?",
    options: ["Armazenar arquivos", "Encaminhar pacotes de dados", "Proteger contra vírus", "Aumentar a memória do computador"],
    answer: "Encaminhar pacotes de dados",
  },
  {
    question: "Qual é a empresa por trás do sistema operacional Android?",
    options: ["Apple", "Google", "Microsoft", "Samsung"],
    answer: "Google",
  },
  {
    question: "O que é 'cloud computing'?",
    options: ["Computação em servidores remotos via internet", "Computação local em um PC", "Redes de computadores em casa", "Hardware especializado"],
    answer: "Computação em servidores remotos via internet",
  },
  {
    question: "Qual tecnologia permite criptomoedas como o Bitcoin?",
    options: ["Blockchain", "Cloud", "AI", "VR"],
    answer: "Blockchain",
  },
  {
    question: "Qual é a função do 'CPU' no computador?",
    options: ["Armazenar dados", "Processar instruções", "Gerenciar a memória RAM", "Controlar a internet"],
    answer: "Processar instruções",
  },
  {
    question: "O que significa 'IoT'?",
    options: ["Internet of Things", "Interface of Technology", "Internet of Tools", "Input Output Technology"],
    answer: "Internet of Things",
  },
  {
    question: "Qual é o principal objetivo da realidade virtual (VR)?",
    options: ["Simular ambientes digitais imersivos", "Aumentar a velocidade do computador", "Proteger dados pessoais", "Armazenar vídeos"],
    answer: "Simular ambientes digitais imersivos",
  },
  {
    question: "O que significa 'API'?",
    options: ["Application Programming Interface", "Automated Process Input", "Advanced Programming Integration", "Application Process Interaction"],
    answer: "Application Programming Interface",
  },
  {
    question: "Qual é a principal linguagem usada no desenvolvimento de páginas web?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };


    return (
      <div className={styles.quizcontainer}>
        <section className={styles.quizcard}>
          {showScore ? (
            <div className={styles.quizscore}>
              <h2 className={styles.quiztitle}>Quiz Finalizado!</h2>
              <p className={styles.quiztitle}>Você acertou {score} de {questions.length} perguntas.</p>
            </div>
          ) : (
            <div className={styles.quiztitle}>
              <h2 className={styles.quizprogress}>
                Pergunta {currentQuestion + 1}/{questions.length}
              </h2>
              <p className={styles.quizprogress}>{questions[currentQuestion].question}</p>
              <div className={styles.quizoptions}>
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={styles.quizoptionbutton}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
  
       </div>
    );
  }
  

