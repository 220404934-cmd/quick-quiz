// React kütüphanesinden gerekli fonksiyonları içe aktarıyoruz
// استيراد الدوال اللازمة من React
import React, { useState } from "react";

// Bileşenleri içe aktarıyoruz
// استيراد المكونات (Components)
import QuestionCard from "./components/QuestionCard";
import ResultsScreen from "./components/ResultsScreen";

// Soru verilerini içe aktarıyoruz
// استيراد الأسئلة من ملف البيانات
import QUESTIONS from "./data/questions";

function App() {
  // Şu anki sorunun indexini tutuyoruz (0'dan başlar)
  // نحتفظ برقم السؤال الحالي (يبدأ من 0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Kullanıcının doğru cevap sayısını tutuyoruz
  // نحتفظ بعدد الإجابات الصحيحة للمستخدم
  const [score, setScore] = useState(0);

  // Kullanıcının cevaba tıkladığında yapılacak işlemleri tanımlıyoruz
  // دالة تُنفذ عند الضغط على الإجابة
  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];

    // Eğer doğru cevap seçilmişse puanı artır
    // إذا كانت الإجابة صحيحة → أضف نقطة
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Sonraki soruya geç
    // انتقل للسؤال التالي
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Quiz'i yeniden başlatmak için fonksiyon
  // دالة لإعادة تشغيل الكويز من البداية
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  // Ekranda gösterilecek kısmı render ediyoruz
  // الجزء الذي يُعرض على الشاشة
  return (
    <div className="container">
      <h1>Quick Quiz</h1>

      {/* Eğer tüm sorular bittiyse sonucu göster */}
      {/* إذا انتهت جميع الأسئلة، أظهر النتيجة */}
      {currentQuestionIndex >= QUESTIONS.length ? (
        <ResultsScreen
          score={score}
          totalQuestions={QUESTIONS.length}
          onRestart={restartQuiz}
        />
      ) : (
        // Eğer sorular bitmediyse sıradaki soruyu göster
        // إذا لم تنتهِ الأسئلة، اعرض السؤال الحالي
        <QuestionCard
          question={QUESTIONS[currentQuestionIndex]}
          onAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;