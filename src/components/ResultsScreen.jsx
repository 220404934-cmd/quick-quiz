import React from "react";

// Bu bileşen quiz bittiğinde sonucu gösterir
// هذا المكون يظهر النتيجة بعد انتهاء الكويز
function ResultsScreen({ score, totalQuestions, onRestart }) {
  return (
    <div className="card">
      <h2>Quiz Bitti!</h2>
      <p>
        Toplam {totalQuestions} sorudan {score} tanesini doğru cevapladınız.
      </p>

      {/* Quiz'i tekrar başlatmak için buton */}
      {/* زر لإعادة تشغيل الكويز */}
      <button className="primaryBtn" onClick={onRestart}>
        Quiz'i Yeniden Başlat
      </button>
    </div>
  );
}

export default ResultsScreen;