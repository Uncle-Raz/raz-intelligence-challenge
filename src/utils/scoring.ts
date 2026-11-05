import { Question, UserAnswerRecord, TestResult, CategoryScoreSummary, Category } from '../types';

export function calculateTestResult(
  questions: Question[],
  answers: UserAnswerRecord,
  timeSpentSeconds: number
): TestResult {
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  // Breakdown accumulator
  const categoryStats: Record<string, { total: number; correct: number }> = {};

  questions.forEach((q) => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { total: 0, correct: 0 };
    }
    categoryStats[q.category].total += 1;

    const userAns = answers[q.id];
    if (!userAns) {
      unansweredCount += 1;
    } else if (userAns === q.correctAnswer) {
      correctCount += 1;
      categoryStats[q.category].correct += 1;
    } else {
      wrongCount += 1;
    }
  });

  const rawScore = Math.round((correctCount / questions.length) * 100);

  // IQ conversion based on 30 items
  // 0 items: ~75, 15 items: ~100, 30 items: ~145
  const iqEstimate = Math.round(75 + (correctCount / questions.length) * 70);

  // Tier Title
  let tierTitle = 'Rata-rata';
  if (rawScore === 100) {
    tierTitle = 'Jenius Sempurna (Perfect 100)';
  } else if (rawScore >= 80) {
    tierTitle = 'Sangat Superior & Berwawasan Luas';
  } else if (rawScore >= 51) {
    tierTitle = 'Cerdas di Atas Rata-rata';
  } else if (rawScore >= 21) {
    tierTitle = 'Perlu Asah Otak';
  } else {
    tierTitle = 'Mode Hemat Baterai 😭';
  }

  // Critique based on exact specification
  let critique = '';
  if (rawScore <= 20) {
    critique =
      'Raz, otak lu lagi mode hemat baterai apa gimana dah? 😭 Belajar lagi, jangan bodo-bodo amat. Masa soal beginian aja bikin otak lu buffering?';
  } else if (rawScore <= 50) {
    critique =
      'Waduh Raz... Ini tadi ngerjainnya sambil merem atau ketiduran? 😭 Nilai segini bikin kalkulator nangis di pojokan. Ayo dong bangun, asah lagi otaknya biar nggak nge-lag!';
  } else if (rawScore <= 79) {
    critique =
      'Not bad Raz! Otak kamu sebenernya encer dan punya potensi gede, cuma kayaknya butuh lebih fokus dan jangan gampang terkecoh jebakan soal. Sedikit polesan lagi pasti tembus 90+!';
  } else if (rawScore <= 99) {
    critique =
      'Gokil banget Raz! Otak lu emang encer parah dan wawasannya luas! Soal-soal rumit kayak gini dibabat abis. Tinggal selangkah lagi menuju tier Einstein!';
  } else {
    critique =
      'PERFECT SCORE! 👑 Raz, ini sih kebangetan pinter! Otak jenius tingkat dewa tanpa cela. Selamat, kamu resmi jadi Juara Tak Tertandingi di R.A.Z Challenge!';
  }

  // Category breakdown list
  const categoryBreakdown: CategoryScoreSummary[] = Object.entries(categoryStats).map(
    ([cat, stat]) => ({
      category: cat as Category,
      total: stat.total,
      correct: stat.correct,
      percentage: Math.round((stat.correct / stat.total) * 100),
    })
  );

  // Find weakest categories
  const sortedByPerf = [...categoryBreakdown].sort((a, b) => a.percentage - b.percentage);
  const weakest = sortedByPerf[0];

  // Learning tips
  const learningTips: string[] = [
    'Tingkatkan latihan soal penalaran deduktif & silogisme untuk mempertajam kecepatan berpikir analitis.',
    'Kuasai rumus praktis persentase, margin laba, dan perhitungan bunga majemuk sehari-hari.',
    'Perbanyak membaca literatur sains populer mengenai fenomena fisika dan reaksi kimia di sekitar kita.',
  ];

  if (weakest && weakest.percentage < 60) {
    learningTips.unshift(
      `Fokus perkuat pemahaman di bidang ${weakest.category} karena akurasimu di sini masih ${weakest.percentage}%.`
    );
  }

  return {
    rawScore,
    correctCount,
    wrongCount,
    unansweredCount,
    iqEstimate,
    tierTitle,
    critique,
    learningTips,
    categoryBreakdown,
    timeSpentSeconds,
  };
}
