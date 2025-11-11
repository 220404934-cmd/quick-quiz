// React kütüphanesinden useState fonksiyonunu içe aktarıyoruz
// نضيف useState من مكتبة React حتى نقدر نحفظ حالة السؤال والنتيجة
import React, { useState } from "react";

// (İleride eklenecek olan soru verilerini import edeceğiz)
// لاحقاً سنضيف ملف الأسئلة (QUESTIONS)

function App() {
  // 1️⃣ Kullanıcının şu anda hangi soruda olduğunu saklamak için state oluşturuyoruz
  // نستخدم state لحفظ رقم السؤال الحالي الذي يظهر الآن
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // 2️⃣ Kullanıcının toplam puanını (doğru cevap sayısı) tutuyoruz
  // نستخدم state لحفظ عدد النقاط (الإجابات الصحيحة)
  const [score, setScore] = useState(0);

  // 3️⃣ Cevap tıklandığında çalışacak olan fonksiyon
  // هذه الدالة تُستدعى عند ضغط المستخدم على أحد الخيارات
  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex]; // şu anki soruyu alıyoruz
    // نأخذ السؤال الحالي من قائمة الأسئلة

    // Eğer seçilen cevap doğruysa puanı artır
    // إذا كانت الإجابة المختارة صحيحة نزيد النقاط
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Sonraki soruya geç (bir artır)
    // ننتقل للسؤال التالي
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // (Uygulamanın görüntüleneceği kısım burada olacak - daha sonra eklenecek)
  // هنا رح نضيف عرض الأسئلة لاحقاً (رح نربطه مع QuestionCard)
  return (
    <div>
      <h1>Quick Quiz</h1>
      <p>Şu anki soru: {currentQuestionIndex + 1}</p>
      <p>Puan: {score}</p>
    </div>
  );
}

export default App;