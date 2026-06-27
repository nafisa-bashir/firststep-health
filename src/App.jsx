import { useState } from "react";
import { generateRoadmap } from "./generateRoadmap";

const content = {
  en: {
    dir: "ltr",
    langLabel: "العربية",
    hero: "Turn your healthcare skill into a legal business",
    sub: "Built for rural communities in the UAE — Al Qua'a, Al Ain",
    desc: "Answer a few questions and get a personalised roadmap: approval paths, documents, funding options, costs, and your very first action tomorrow morning.",
    labels: {
      service: "What health service do you want to offer?",
      servicePH: "e.g. Home health screening, First aid training",
      background: "What is your professional background or qualification?",
      backgroundPH: "e.g. Nurse, pharmacist, first aid certified",
      budget: "Approximate budget (AED)",
      space: "Will you operate from home or a separate space?",
      home: "Home",
      separate: "Separate Space",
      location: "Target location",
      submit: "Generate My Roadmap",
      loading: "Generating your roadmap...",
    },
    sections: {
      pathway: "Possible Approval Pathway",
      documents: "Documents to Prepare",
      funding: "Funding & Support Options",
      cost: "Estimated Cost",
      timeline: "Your Timeline",
      tomorrow: "Tomorrow Morning — Start Here",
      sources: "Official Sources",
      disclaimer: "Important Disclaimer",
      back: "Back to form",
      restart: "Generate Another Roadmap",
      why: "Why this roadmap?",
      verify: "Things to Verify",
      firstStep: "Your First Step",
      effort: "Estimated effort",
      priority: "Priority",
    },
    budgetOptions: ["Under 10,000", "10,000 - 30,000", "30,000 - 50,000", "Above 50,000"],
  },
  ar: {
    dir: "rtl",
    langLabel: "English",
    hero: "حوّل مهارتك الصحية إلى مشروع قانوني",
    sub: "مبني لأبناء المجتمعات الريفية في الإمارات — القعا، العين",
    desc: "جاوب على أسئلة بسيطة وتحصل على خارطة طريق شخصية: مسارات الترخيص، الوثائق، خيارات التمويل، التكاليف، وأول خطوة تسويها بكرة الصبح.",
    labels: {
      service: "وش الخدمة الصحية اللي تبي تقدمها؟",
      servicePH: "مثلاً: فحص صحي منزلي، تدريب إسعافات أولية",
      background: "وش خلفيتك المهنية أو مؤهلاتك؟",
      backgroundPH: "مثلاً: ممرض، صيدلاني، حاصل على شهادة إسعاف",
      budget: "ميزانيتك التقريبية (درهم)",
      space: "رح تشتغل من البيت ولا من مكان ثاني؟",
      home: "من البيت",
      separate: "مكان مستقل",
      location: "الموقع المستهدف",
      submit: "طلع لي خارطة الطريق",
      loading: "يتم تجهيز خارطة طريقك...",
    },
    sections: {
      pathway: "مسار الموافقة المحتمل",
      documents: "الوثائق اللي تحتاجها",
      funding: "خيارات التمويل والدعم",
      cost: "التكلفة التقريبية",
      timeline: "الجدول الزمني",
      tomorrow: "بكرة الصبح — ابدأ من هنا",
      sources: "المصادر الرسمية",
      disclaimer: "تنبيه مهم",
      back: "رجوع للنموذج",
      restart: "إنشاء خارطة طريق أخرى",
      why: "لماذا هذه الخارطة؟",
      verify: "أشياء يجب التحقق منها",
      firstStep: "خطوتك الأولى",
      effort: "الوقت المتوقع",
      priority: "الأولوية",
    },
    budgetOptions: ["أقل من ١٠,٠٠٠", "١٠,٠٠٠ - ٣٠,٠٠٠", "٣٠,٠٠٠ - ٥٠,٠٠٠", "أكثر من ٥٠,٠٠٠"],
  },
};

export default function App() {
  const [lang, setLang] = useState(null);
  const [formData, setFormData] = useState({
    service: "",
    background: "",
    budget: "",
    space: "Home",
    location: "Al Qua'a, Al Ain",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const t = lang ? content[lang] : content.en;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await generateRoadmap(formData, lang);
      setResult(data);
    } catch {
      setError(lang === "ar" ? "صار خطأ. حاول مرة ثانية." : "Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  if (!lang) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 p-4">
        <div className="text-center">
          <div className="text-6xl mb-6">🏥</div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">FirstStep Health</h1>
          <p className="text-teal-200 mb-12 text-lg">Healthcare business guidance for rural UAE communities</p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["DOH", "TAMM", "ADDED", "Khalifa Fund", "u.ae"].map((item) => (
              <span key={item} className="text-xs bg-white/15 text-teal-50 px-3 py-1 rounded-full border border-white/20">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setLang("en");
                setFormData((f) => ({ ...f, budget: "Under 10,000", space: "Home", location: "Al Qua'a, Al Ain" }));
              }}
              className="bg-white text-teal-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-teal-50 transition-all shadow-xl hover:-translate-y-1"
            >
              English
              <div className="text-sm font-normal text-teal-600 mt-1">Continue in English</div>
            </button>

            <button
              onClick={() => {
                setLang("ar");
                setFormData((f) => ({ ...f, budget: "أقل من ١٠,٠٠٠", space: "Home", location: "القعا، العين" }));
              }}
              className="bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-teal-500 transition-all shadow-xl hover:-translate-y-1 border-2 border-teal-400"
            >
              العربية
              <div className="text-sm font-normal text-teal-100 mt-1">تكملة بالعربي</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="min-h-screen bg-slate-50" dir={t.dir}>
        <div className="bg-gradient-to-r from-teal-800 to-emerald-700 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-lg">
          <button onClick={() => setResult(null)} className="text-teal-100 hover:text-white font-medium transition">
            {t.sections.back}
          </button>
          <span className="font-bold text-lg">FirstStep Health</span>
          <button onClick={() => setLang(null)} className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition">
            {t.langLabel}
          </button>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8 space-y-5">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="text-4xl mb-3">🏥</div>
            <h1 className="text-2xl font-bold text-teal-900 mb-2">{result.service}</h1>
            <p className="text-slate-600 leading-relaxed">{result.summary}</p>
          </div>

          {result.firstStep && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-sm">
              <h2 className="font-bold text-lg text-emerald-900 mb-3">✅ {t.sections.firstStep}</h2>
              <p className="text-emerald-800 font-medium mb-3">{result.firstStep.action}</p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white rounded-xl p-3 border border-emerald-100">
                  <span className="block text-slate-500">{t.sections.effort}</span>
                  <span className="font-bold text-emerald-800">{result.firstStep.effort}</span>
                </div>

                <div className="bg-white rounded-xl p-3 border border-emerald-100">
                  <span className="block text-slate-500">{t.sections.priority}</span>
                  <span className="font-bold text-emerald-800">{result.firstStep.priority}</span>
                </div>
              </div>
            </div>
          )}

          {result.recommendationReasons && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="font-bold text-lg text-slate-800 mb-4">💡 {t.sections.why}</h2>
              <ul className="space-y-2">
                {result.recommendationReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.thingsToVerify && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 shadow-sm">
              <h2 className="font-bold text-lg text-yellow-900 mb-4">⚠️ {t.sections.verify}</h2>
              <ul className="space-y-2">
                {result.thingsToVerify.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-yellow-800">
                    <span className="font-bold">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-teal-700 text-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="bg-white/20 rounded-lg px-2 py-1 text-sm">01</span>
              {t.sections.pathway}
            </h2>
            <p className="text-teal-100 leading-relaxed">{result.licensePath}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
              <span className="bg-teal-100 text-teal-700 rounded-lg px-2 py-1 text-sm">02</span>
              📋 {t.sections.documents}
            </h2>
            <ul className="space-y-3">
              {result.requiredDocuments.map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-slate-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
              <span className="bg-teal-100 text-teal-700 rounded-lg px-2 py-1 text-sm">03</span>
              💰 {t.sections.funding}
            </h2>
            <div className="space-y-2">
              {result.fundingOptions.map((opt, i) => (
                <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-800 text-sm leading-relaxed">
                  {opt}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-lg text-amber-900 mb-2 flex items-center gap-2">
              <span className="bg-amber-200 text-amber-800 rounded-lg px-2 py-1 text-sm">04</span>
              💵 {t.sections.cost}
            </h2>
            <p className="text-amber-800 leading-relaxed">{result.estimatedCost}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="font-bold text-lg text-slate-800 mb-5 flex items-center gap-2">
              <span className="bg-teal-100 text-teal-700 rounded-lg px-2 py-1 text-sm">05</span>
              📅 {t.sections.timeline}
            </h2>
            <div className="space-y-4">
              {result.timeline.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-teal-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < result.timeline.length - 1 && <div className="w-0.5 flex-1 bg-teal-200 mt-1 mb-1 min-h-4"></div>}
                  </div>
                  <p className="text-slate-700 pt-2 pb-2">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-700 to-emerald-600 text-white rounded-2xl p-6 shadow-md">
            <h2 className="font-bold text-lg mb-4">☀️ {t.sections.tomorrow}</h2>
            <ul className="space-y-3">
              {result.tomorrowMorning.map((action, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-teal-50 leading-relaxed">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="font-bold text-lg text-slate-800 mb-4">🌐 {t.sections.sources}</h2>
            <div className="space-y-2">
              {result.officialSources.map((source, i) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl p-4 transition group"
                >
                  <div>
                    <span className="block text-teal-700 font-medium group-hover:text-teal-800">{source.title}</span>
                    <span className="block text-xs text-slate-500 mt-1">
                      {lang === "ar" ? "مصدر رسمي للتحقق" : "Official source for verification"}
                    </span>
                  </div>
                  <span className="text-slate-400 group-hover:text-teal-500 text-lg">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
            <h3 className="font-bold text-red-800 mb-1 text-sm uppercase tracking-wide">⚠️ {t.sections.disclaimer}</h3>
            <p className="text-red-700 text-sm leading-relaxed">{result.disclaimer}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
            <p className="text-slate-600 mb-4">
              {lang === "ar"
                ? "أنت الآن أقرب لفهم خطوتك الأولى. تذكّر أن تتحقق من كل شيء مع الجهات الرسمية قبل الاستثمار أو الإطلاق."
                : "You are now closer to understanding your first step. Remember to verify everything with official authorities before investing or launching."}
            </p>

            <button
              onClick={() => setResult(null)}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white py-4 rounded-2xl font-bold text-lg transition shadow-md"
            >
              {t.sections.restart}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 flex flex-col" dir={t.dir}>
      <div className="bg-teal-900 text-white px-6 py-3 flex items-center justify-between">
        <span className="font-bold tracking-tight">FirstStep Health</span>
        <button
          onClick={() => setLang(null)}
          className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition font-medium"
        >
          {t.langLabel}
        </button>
      </div>

      <div className="bg-gradient-to-br from-teal-800 to-emerald-700 text-white px-6 pt-10 pb-16 text-center">
        <div className="text-5xl mb-4">🏥</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight max-w-lg mx-auto">{t.hero}</h1>
        <p className="text-teal-200 font-medium mb-3">{t.sub}</p>
        <p className="text-teal-100 text-sm max-w-md mx-auto leading-relaxed opacity-90">{t.desc}</p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {["DOH", "TAMM", "ADDED", "Khalifa Fund"].map((item) => (
            <span key={item} className="text-xs bg-white/15 text-teal-50 px-3 py-1 rounded-full border border-white/20">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-xl w-full mx-auto px-4 -mt-8 pb-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.labels.service}</label>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder={t.labels.servicePH}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.labels.background}</label>
              <input
                type="text"
                name="background"
                value={formData.background}
                onChange={handleChange}
                placeholder={t.labels.backgroundPH}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.labels.budget}</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-slate-50"
              >
                {t.budgetOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t.labels.space}</label>
              <div className="grid grid-cols-2 gap-3">
                {["Home", "Separate Space"].map((val, idx) => (
                  <label
                    key={val}
                    className={`flex items-center justify-center gap-2 cursor-pointer border-2 rounded-xl py-3 px-4 transition font-medium text-sm ${
                      formData.space === val
                        ? "border-teal-500 bg-teal-50 text-teal-800"
                        : "border-slate-200 text-slate-600 hover:border-teal-300"
                    }`}
                  >
                    <input type="radio" name="space" value={val} checked={formData.space === val} onChange={handleChange} className="sr-only" />
                    {idx === 0 ? "🏠" : "🏢"} {idx === 0 ? t.labels.home : t.labels.separate}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.labels.location}</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-slate-50"
              />
            </div>

            {error && <p className="text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3 border border-red-200">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-700 to-emerald-600 hover:from-teal-600 hover:to-emerald-500 text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? t.labels.loading : t.labels.submit}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}