const sourcesEN = [
  { title: "Department of Health Abu Dhabi", url: "https://www.doh.gov.ae" },
  { title: "Abu Dhabi Department of Economic Development", url: "https://www.added.gov.ae" },
  { title: "TAMM Abu Dhabi", url: "https://www.tamm.abudhabi" },
  { title: "Khalifa Fund for Enterprise Development", url: "https://www.khalifafund.ae" },
  { title: "UAE Government Portal", url: "https://u.ae" }
];

const sourcesAR = [
  { title: "دائرة الصحة — أبوظبي", url: "https://www.doh.gov.ae" },
  { title: "دائرة التنمية الاقتصادية — أبوظبي", url: "https://www.added.gov.ae" },
  { title: "تم — أبوظبي", url: "https://www.tamm.abudhabi" },
  { title: "صندوق خليفة لتطوير المشاريع", url: "https://www.khalifafund.ae" },
  { title: "البوابة الرسمية لحكومة الإمارات", url: "https://u.ae" }
];

const disclaimerEN =
  "This roadmap is for guidance only. All licensing, legal, funding, cost, and healthcare requirements must be verified directly with official UAE authorities before taking action. FirstStep Health does not provide legal, medical, or financial advice.";

const disclaimerAR =
  "هذه خارطة طريق إرشادية فقط. يجب التحقق من جميع متطلبات الترخيص، والقانون، والتمويل، والتكاليف، والرعاية الصحية مباشرة مع الجهات الرسمية في الإمارات قبل اتخاذ أي خطوة. FirstStep Health لا يقدم استشارة قانونية أو طبية أو مالية.";

function getType(service = "") {
  const s = service.toLowerCase();

  if (
    s.includes("pharmacy") ||
    s.includes("medicine") ||
    s.includes("medication") ||
    s.includes("صيدلية") ||
    s.includes("أدوية")
  ) {
    return "pharmacy";
  }

  if (
    s.includes("first aid") ||
    s.includes("training") ||
    s.includes("cpr") ||
    s.includes("إسعاف") ||
    s.includes("تدريب")
  ) {
    return "firstAid";
  }

  if (
    s.includes("nursing") ||
    s.includes("home care") ||
    s.includes("elderly") ||
    s.includes("رعاية") ||
    s.includes("تمريض") ||
    s.includes("كبار السن")
  ) {
    return "homeCare";
  }

  if (
    s.includes("nutrition") ||
    s.includes("diet") ||
    s.includes("weight") ||
    s.includes("تغذية") ||
    s.includes("حمية")
  ) {
    return "nutrition";
  }

  if (
    s.includes("screen") ||
    s.includes("blood pressure") ||
    s.includes("diabetes") ||
    s.includes("check") ||
    s.includes("health") ||
    s.includes("فحص") ||
    s.includes("ضغط") ||
    s.includes("سكر")
  ) {
    return "screening";
  }

  return "general";
}

function getPersonalNotesEN(formData) {
  const notes = [];

  if (formData.background) {
    notes.push(`Because your background is "${formData.background}", your first step is to confirm whether this qualification is accepted for the service you want to offer.`);
  }

  if (formData.budget) {
    notes.push(`Your selected budget is ${formData.budget} AED, so the roadmap should begin with verification and low-cost planning before spending money.`);
  }

  if (formData.space === "Home") {
    notes.push("Because you selected home-based operation, you must verify whether the activity is allowed from a residence before buying equipment or advertising services.");
  }

  if (formData.space === "Separate Space") {
    notes.push("Because you selected a separate space, you should verify premises, inspection, fit-out, and business activity requirements before signing any lease.");
  }

  return notes;
}

function getPersonalNotesAR(formData) {
  const notes = [];

  if (formData.background) {
    notes.push(`بما أن خلفيتك هي "${formData.background}"، أول خطوة هي التأكد هل هذا المؤهل مقبول للخدمة التي تريد تقديمها.`);
  }

  if (formData.budget) {
    notes.push(`ميزانيتك المختارة هي ${formData.budget}، لذلك من الأفضل البدء بالتحقق والتخطيط قبل صرف أي مبلغ.`);
  }

  if (formData.space === "Home") {
    notes.push("بما أنك اخترت العمل من المنزل، يجب التأكد هل النشاط مسموح من المنزل قبل شراء المعدات أو الإعلان عن الخدمة.");
  }

  if (formData.space === "Separate Space") {
    notes.push("بما أنك اخترت مكانًا مستقلًا، يجب التحقق من متطلبات الموقع، التفتيش، التجهيز، والنشاط التجاري قبل توقيع أي عقد إيجار.");
  }

  return notes;
}

const templatesEN = {
  screening: {
    service: "Home Health Screening",
    summary:
      "You want to explore offering basic health screening services in Al Qua'a. This roadmap focuses on turning that idea into a safe, legal, and verified community service.",
    licensePath:
      "Possible approval pathway to verify: start with ADDED/TAMM for business activity guidance, then verify with Department of Health Abu Dhabi whether the service requires preliminary healthcare facility approval, professional licensing, home care approval, or another permitted pathway. Person 3's research notes show DOH facility licensing can involve preliminary approval and permanent licensing stages, so this must be confirmed before launch.",
    requiredDocuments: [
      "Proof of identity",
      "Healthcare qualification or training documents",
      "Clear description of screening services",
      "Proposed location details",
      "List of equipment such as blood pressure monitor, glucose monitor, thermometer, or pulse oximeter",
      "Questions for DOH about whether home-based screening is permitted"
    ],
    fundingOptions: [
      "Khalifa Fund may be relevant for eligible Abu Dhabi entrepreneurs, but eligibility must be verified directly",
      "MBRIF or UAE SME support may be relevant if the service has an innovative or scalable model",
      "Do not assume funding approval; prepare a simple business plan, cost list, and service explanation first"
    ],
    estimatedCost:
      "Estimated costs may include basic screening equipment, training verification, business registration, healthcare approval, insurance, and space preparation. Person 3's research notes include basic diagnostic equipment as an estimated AED 500–2,000 range, but all costs must be verified with suppliers and authorities.",
    timeline: [
      "Week 1 — Define the exact screening services and confirm what your qualification allows",
      "Week 2 — Check ADDED/TAMM business activity options and prepare identity, qualification, location, and equipment details",
      "Week 3 — Contact DOH to verify the correct approval pathway before buying equipment or advertising",
      "Week 4 — Prepare the application plan, cost plan, funding notes, and launch checklist"
    ],
    tomorrowMorning: [
      "Write the exact services you want to offer, such as blood pressure checks or glucose checks",
      "List your qualification, budget, available space, and equipment",
      "Open DOH, ADDED/TAMM, and Khalifa Fund official websites and write down the questions you need verified"
    ]
  },

  pharmacy: {
    service: "Small Pharmacy",
    summary:
      "You want to explore starting a pharmacy or medicine-related service in Al Qua'a. This roadmap helps you identify what must be verified before investing money, choosing a location, or purchasing stock.",
    licensePath:
      "Possible approval pathway to verify: pharmacy-related businesses are regulated healthcare activities. You should verify business registration requirements with ADDED/TAMM and healthcare/pharmacy requirements with DOH. Requirements may involve professional pharmacist licensing, facility approval, medicine handling rules, location approval, storage standards, and business registration.",
    requiredDocuments: [
      "Proof of identity",
      "Pharmacy or healthcare qualification documents",
      "Business activity description",
      "Proposed shop or facility location details",
      "Questions about pharmacist supervision, medicine storage, and approval requirements",
      "Initial cost plan covering rent, stock, fit-out, and approvals"
    ],
    fundingOptions: [
      "Khalifa Fund may support eligible Abu Dhabi entrepreneurs, but pharmacy eligibility and funding amount must be verified",
      "SME programmes may help with planning, training, or business support",
      "Prepare a business plan before applying for any funding"
    ],
    estimatedCost:
      "A pharmacy may require higher startup costs than a home-based service because of premises, fit-out, stock, medicine storage, licensing, and professional requirements. Person 3's research notes show Abu Dhabi trade licensing can vary widely and Tajer may not be enough for healthcare activities, so verify before spending.",
    timeline: [
      "Week 1 — Confirm whether your qualification allows you to operate, manage, or partner in a pharmacy",
      "Week 2 — Verify ADDED/TAMM business activity and DOH pharmacy-related requirements",
      "Week 3 — Prepare a cost plan covering rent, fit-out, stock, equipment, staff, and approvals",
      "Week 4 — Contact official authorities before submitting any application or signing a lease"
    ],
    tomorrowMorning: [
      "Decide whether you want a full pharmacy, medicine delivery support, or health product retail",
      "List your pharmacy-related qualifications or required partners",
      "Check DOH and ADDED/TAMM websites before spending money on rent, stock, or branding"
    ]
  },

  firstAid: {
    service: "First Aid Training",
    summary:
      "You want to explore offering first aid training in Al Qua'a. This roadmap focuses on making the service structured, credible, and ready for official verification.",
    licensePath:
      "Possible approval pathway to verify: first aid training may involve business registration, training activity approval, or healthcare-related approval depending on whether it is awareness-only, paid training, workplace training, or certificate-based. Verify the correct pathway with ADDED/TAMM and the relevant health or training authority.",
    requiredDocuments: [
      "Proof of identity",
      "First aid or training certification",
      "Training programme outline",
      "Proposed audience and location",
      "Training materials and safety plan",
      "Questions about whether certification or training approval is required"
    ],
    fundingOptions: [
      "Entrepreneurship programmes may be relevant for community training services",
      "Partnerships with schools, community groups, or local businesses may reduce startup cost",
      "Verify funding and partnership eligibility from official sources"
    ],
    estimatedCost:
      "Estimated costs may include training materials, venue, certification, first aid kits, marketing, and approval fees if required. Costs should remain ranges unless verified from official sources or suppliers.",
    timeline: [
      "Week 1 — Define whether the training is awareness-only or certificate-based",
      "Week 2 — Prepare a course outline and verify whether approval is required",
      "Week 3 — Identify venue, audience, equipment, and safety requirements",
      "Week 4 — Prepare a pilot session plan, cost plan, and official verification questions"
    ],
    tomorrowMorning: [
      "Decide whether your training will be awareness-based or certificate-based",
      "Prepare a one-page outline of the first aid topics you want to teach",
      "Check which authority, school, employer, or community partner should verify the training requirements"
    ]
  },

  homeCare: {
    service: "Home Care or Home Nursing Support",
    summary:
      "You want to explore a home care or home nursing support service in Al Qua'a. This roadmap helps you verify whether the service can be offered legally and what approvals may be needed.",
    licensePath:
      "Possible approval pathway to verify: DOH has healthcare facility and professional licensing requirements, and Person 3's research notes mention Home Care as a distinct facility type. Verify with DOH whether your proposed home care activity requires home care provider approval, professional licensing, facility nomination, or another pathway.",
    requiredDocuments: [
      "Proof of identity",
      "Nursing or healthcare qualification documents",
      "Professional license or eligibility documents if applicable",
      "Description of services and patient safety boundaries",
      "Proposed operating model and location details",
      "Questions for DOH about home care provider requirements"
    ],
    fundingOptions: [
      "Khalifa Fund may be relevant if the founder meets eligibility conditions",
      "SME support may help with business planning, training, or equipment",
      "Funding should only be presented as possible support, not guaranteed approval"
    ],
    estimatedCost:
      "Costs may include licensing, insurance, professional verification, equipment, transport, and staff requirements. Exact costs depend heavily on service scope and must be verified.",
    timeline: [
      "Week 1 — Define the exact home care service and confirm what your qualification allows",
      "Week 2 — Verify whether DOH professional licensing or home care facility approval is required",
      "Week 3 — Prepare safety boundaries, document checklist, and cost plan",
      "Week 4 — Contact DOH before advertising or accepting clients"
    ],
    tomorrowMorning: [
      "Write the exact care service you want to provide",
      "List your professional qualifications and any license status",
      "Prepare questions for DOH about home care provider requirements"
    ]
  },

  nutrition: {
    service: "Nutrition or Wellness Guidance",
    summary:
      "You want to explore a nutrition or wellness guidance service in Al Qua'a. This roadmap helps you separate general wellness education from regulated clinical nutrition or medical advice.",
    licensePath:
      "Possible approval pathway to verify: general wellness education may differ from regulated clinical nutrition or dietetic services. Verify with DOH and ADDED/TAMM whether your service requires a healthcare professional license, business activity approval, or training/service registration.",
    requiredDocuments: [
      "Proof of identity",
      "Nutrition, wellness, or healthcare qualification documents",
      "Clear service description showing whether it is education or clinical advice",
      "Proposed audience and location",
      "Questions about whether professional licensing is required"
    ],
    fundingOptions: [
      "SME or entrepreneurship support may be relevant if the service is structured as a legal business",
      "Partnerships with schools, gyms, or community groups may reduce startup costs",
      "Funding and partnership eligibility must be verified"
    ],
    estimatedCost:
      "Costs may include business registration, professional verification, marketing, venue, digital tools, and materials. Avoid giving medical diet plans unless properly licensed and verified.",
    timeline: [
      "Week 1 — Define whether the service is wellness education or clinical nutrition",
      "Week 2 — Verify professional and business activity requirements",
      "Week 3 — Prepare a safe service description, cost plan, and source-backed materials",
      "Week 4 — Contact relevant authorities or partners before launching"
    ],
    tomorrowMorning: [
      "Write whether your service is general wellness education or clinical nutrition",
      "List your qualifications and what you are not allowed to advise on",
      "Verify the correct authority pathway before offering paid services"
    ]
  },

  general: {
    service: "Healthcare Microservice",
    summary:
      "You want to explore starting a healthcare-related microservice in Al Qua'a. This roadmap gives a safe starting point and shows what must be verified before taking action.",
    licensePath:
      "Possible approval pathway to verify: start by identifying the business activity through ADDED/TAMM, then verify healthcare-specific requirements with DOH if the service involves health screening, patient care, medicine, clinical advice, or regulated healthcare activity.",
    requiredDocuments: [
      "Proof of identity",
      "Qualification or training documents",
      "Description of the proposed service",
      "Operating location details",
      "Basic cost plan",
      "Questions to confirm with DOH, ADDED/TAMM, or the relevant authority"
    ],
    fundingOptions: [
      "Check official UAE SME support programmes for eligibility",
      "Review Khalifa Fund and MBRIF if the idea is eligible",
      "Verify any funding amount, criteria, and application steps directly from official sources"
    ],
    estimatedCost:
      "Estimated costs vary based on licensing path, equipment, space, inspection requirements, and business model. Person 3's research notes show some published fees exist, but most costs must be verified directly.",
    timeline: [
      "Week 1 — Define the exact service and verify which authority applies",
      "Week 2 — Gather identity, qualification, business activity, and location details",
      "Week 3 — Contact DOH or ADDED/TAMM to confirm the correct pathway",
      "Week 4 — Prepare the application, funding notes, and launch checklist"
    ],
    tomorrowMorning: [
      "Write down the exact healthcare service you want to offer",
      "List your qualifications, training, budget, and available space",
      "Visit DOH, ADDED/TAMM, and UAE business support websites and prepare questions for verification"
    ]
  }
};

const templatesAR = {
  screening: {
    service: "فحص صحي منزلي",
    summary:
      "تريد استكشاف تقديم خدمات فحص صحي أساسية في القعا. هذه الخارطة تساعدك على تحويل الفكرة إلى خدمة مجتمعية آمنة وقابلة للتحقق مع الجهات الرسمية.",
    licensePath:
      "مسار الموافقة المحتمل للتحقق: ابدأ بمراجعة ADDED/TAMM لمعرفة النشاط التجاري المناسب، ثم تحقق مع دائرة الصحة أبوظبي هل تحتاج الخدمة إلى موافقة منشأة صحية، أو ترخيص مهني، أو موافقة رعاية منزلية، أو مسار آخر مسموح. يجب تأكيد كل ذلك قبل الإطلاق.",
    requiredDocuments: [
      "إثبات الهوية",
      "وثائق المؤهل أو التدريب الصحي",
      "وصف واضح لخدمات الفحص",
      "تفاصيل موقع التشغيل المقترح",
      "قائمة بالمعدات مثل جهاز قياس الضغط أو السكر أو الحرارة",
      "أسئلة لدائرة الصحة حول إمكانية تقديم الخدمة من المنزل"
    ],
    fundingOptions: [
      "قد يكون صندوق خليفة مناسبًا لبعض رواد الأعمال المؤهلين في أبوظبي، لكن يجب التحقق من الأهلية مباشرة",
      "راجع برامج دعم المشاريع الصغيرة والمتوسطة لتكاليف المعدات والتجهيز",
      "لا تفترض قبول التمويل؛ حضّر خطة خدمة وتكلفة أولًا"
    ],
    estimatedCost:
      "قد تشمل التكاليف معدات الفحص، التحقق من التدريب، التسجيل التجاري، الموافقات الصحية، التأمين، وتجهيز المكان. تشير ملاحظات البحث إلى أن معدات الفحص الأساسية قد تبدأ تقريبًا من AED 500–2,000، لكن يجب التحقق من كل التكاليف.",
    timeline: [
      "الأسبوع 1 — حدد خدمات الفحص بدقة وتأكد مما يسمح به مؤهلك",
      "الأسبوع 2 — تحقق من خيارات النشاط التجاري عبر ADDED/TAMM واجمع بيانات الهوية والمؤهل والموقع والمعدات",
      "الأسبوع 3 — تواصل مع دائرة الصحة لتأكيد مسار الموافقة الصحيح قبل شراء المعدات أو الإعلان",
      "الأسبوع 4 — جهز خطة الطلب، خطة التكلفة، وملاحظات التمويل"
    ],
    tomorrowMorning: [
      "اكتب الخدمات الدقيقة التي تريد تقديمها مثل قياس الضغط أو السكر",
      "سجّل مؤهلاتك وميزانيتك والمكان والمعدات المتوفرة",
      "افتح مواقع DOH وADDED/TAMM وصندوق خليفة واكتب الأسئلة التي تحتاج تأكيدًا"
    ]
  },

  pharmacy: {
    service: "صيدلية صغيرة",
    summary:
      "تريد استكشاف بدء صيدلية أو خدمة مرتبطة بالأدوية في القعا. هذه الخارطة تساعدك على معرفة ما يجب التحقق منه قبل الاستثمار أو اختيار الموقع أو شراء المخزون.",
    licensePath:
      "مسار الموافقة المحتمل للتحقق: الأنشطة المتعلقة بالصيدليات والأدوية تعد أنشطة صحية منظمة. تحقق من التسجيل التجاري عبر ADDED/TAMM ومن المتطلبات الصحية أو الصيدلانية عبر DOH. قد تشمل المتطلبات ترخيص الصيدلي، موافقة المنشأة، حفظ الأدوية، موافقة الموقع، والتسجيل التجاري.",
    requiredDocuments: [
      "إثبات الهوية",
      "وثائق المؤهل الصيدلي أو الصحي",
      "وصف النشاط التجاري",
      "تفاصيل موقع المحل أو المنشأة",
      "أسئلة حول إشراف الصيدلي وتخزين الأدوية ومتطلبات الموافقة",
      "خطة تكلفة أولية تشمل الإيجار والمخزون والتجهيزات والموافقات"
    ],
    fundingOptions: [
      "قد يكون صندوق خليفة مناسبًا لبعض رواد الأعمال المؤهلين في أبوظبي، لكن يجب التحقق من أهلية نشاط الصيدلية",
      "قد تساعد برامج المشاريع الصغيرة في التخطيط أو التدريب أو الدعم التجاري",
      "حضّر خطة عمل قبل التقديم لأي تمويل"
    ],
    estimatedCost:
      "قد تحتاج الصيدلية إلى تكاليف أعلى من الخدمة المنزلية بسبب المكان، التجهيز، التخزين، الترخيص، المخزون، والمتطلبات المهنية. يجب التحقق من التكاليف الدقيقة قبل التخطيط.",
    timeline: [
      "الأسبوع 1 — تأكد هل مؤهلك يسمح لك بتشغيل أو إدارة صيدلية أو تحتاج شريكًا مؤهلًا",
      "الأسبوع 2 — تحقق من نشاط ADDED/TAMM ومتطلبات DOH المتعلقة بالصيدلية",
      "الأسبوع 3 — جهّز خطة تكلفة تشمل الإيجار والتجهيز والمخزون والموظفين والموافقات",
      "الأسبوع 4 — تواصل مع الجهات الرسمية قبل تقديم أي طلب أو توقيع عقد إيجار"
    ],
    tomorrowMorning: [
      "حدد هل تريد صيدلية كاملة، دعم توصيل أدوية، أو بيع منتجات صحية",
      "سجّل مؤهلاتك الصيدلية أو الشركاء المطلوبين",
      "راجع مواقع DOH وADDED/TAMM قبل صرف أي مبلغ على الإيجار أو المخزون"
    ]
  },

  firstAid: {
    service: "تدريب إسعافات أولية",
    summary:
      "تريد استكشاف تقديم تدريب إسعافات أولية في القعا. هذه الخارطة تساعدك على جعل الخدمة منظمة، موثوقة، وجاهزة للتحقق الرسمي.",
    licensePath:
      "مسار الموافقة المحتمل للتحقق: تدريب الإسعافات الأولية قد يحتاج تسجيل نشاط تجاري أو موافقة تدريبية أو صحية حسب نوع التدريب. تحقق من ADDED/TAMM والجهة الصحية أو التدريبية المناسبة.",
    requiredDocuments: [
      "إثبات الهوية",
      "شهادة إسعافات أولية أو تدريب",
      "مخطط البرنامج التدريبي",
      "الفئة المستهدفة والموقع المقترح",
      "مواد التدريب وخطة السلامة",
      "أسئلة حول متطلبات اعتماد التدريب أو الشهادة"
    ],
    fundingOptions: [
      "قد تكون برامج ريادة الأعمال مناسبة للخدمات التدريبية المجتمعية",
      "الشراكات مع المدارس أو المجموعات المجتمعية أو الشركات المحلية قد تقلل التكلفة",
      "يجب التحقق من أهلية التمويل أو الشراكة من المصادر الرسمية"
    ],
    estimatedCost:
      "قد تشمل التكاليف مواد التدريب، المكان، الشهادات، حقائب الإسعاف الأولي، التسويق، ورسوم الموافقة إذا كانت مطلوبة. يجب إبقاء التكاليف كتقديرات حتى يتم التحقق منها.",
    timeline: [
      "الأسبوع 1 — حدد هل التدريب توعوي فقط أم بشهادة",
      "الأسبوع 2 — جهّز مخطط الدورة وتحقق هل تحتاج موافقة",
      "الأسبوع 3 — حدد المكان، الجمهور، المعدات، ومتطلبات السلامة",
      "الأسبوع 4 — جهّز خطة جلسة تجريبية وخطة تكلفة وأسئلة للجهات الرسمية"
    ],
    tomorrowMorning: [
      "قرر هل سيكون التدريب توعويًا أم بشهادة",
      "حضّر صفحة واحدة تشرح مواضيع الإسعافات الأولية التي ستدرّسها",
      "تحقق من الجهة أو الشريك المناسب لتأكيد متطلبات التدريب"
    ]
  },

  homeCare: {
    service: "رعاية منزلية أو دعم تمريضي",
    summary:
      "تريد استكشاف خدمة رعاية منزلية أو دعم تمريضي في القعا. هذه الخارطة تساعدك على معرفة ما إذا كانت الخدمة يمكن تقديمها بشكل قانوني وما الموافقات المطلوبة.",
    licensePath:
      "مسار الموافقة المحتمل للتحقق: ملاحظات البحث تشير إلى أن Home Care نوع منشأة مذكور ضمن مسارات DOH. تحقق مع دائرة الصحة هل تحتاج الخدمة إلى موافقة مقدم رعاية منزلية، أو ترخيص مهني، أو ترشيح منشأة، أو مسار آخر.",
    requiredDocuments: [
      "إثبات الهوية",
      "وثائق مؤهل التمريض أو الرعاية الصحية",
      "رخصة مهنية أو مستندات أهلية إن وجدت",
      "وصف الخدمة وحدود السلامة",
      "تفاصيل نموذج التشغيل والموقع",
      "أسئلة لدائرة الصحة حول متطلبات الرعاية المنزلية"
    ],
    fundingOptions: [
      "قد يكون صندوق خليفة مناسبًا إذا توفرت شروط الأهلية",
      "قد تساعد برامج دعم المشاريع الصغيرة في التخطيط أو المعدات",
      "يجب تقديم التمويل كدعم محتمل وليس كقبول مضمون"
    ],
    estimatedCost:
      "قد تشمل التكاليف الترخيص، التأمين، التحقق المهني، المعدات، النقل، ومتطلبات الموظفين. تعتمد التكاليف على نطاق الخدمة ويجب التحقق منها.",
    timeline: [
      "الأسبوع 1 — حدد خدمة الرعاية المنزلية بدقة وتأكد مما يسمح به مؤهلك",
      "الأسبوع 2 — تحقق هل تحتاج إلى ترخيص مهني أو موافقة منشأة رعاية منزلية",
      "الأسبوع 3 — جهّز حدود السلامة وقائمة المستندات وخطة التكلفة",
      "الأسبوع 4 — تواصل مع دائرة الصحة قبل الإعلان أو استقبال العملاء"
    ],
    tomorrowMorning: [
      "اكتب خدمة الرعاية التي تريد تقديمها بدقة",
      "سجّل مؤهلاتك المهنية وحالة الترخيص إن وجدت",
      "حضّر أسئلة لدائرة الصحة حول متطلبات مقدم الرعاية المنزلية"
    ]
  },

  nutrition: {
    service: "تغذية أو إرشاد صحي",
    summary:
      "تريد استكشاف خدمة تغذية أو إرشاد صحي في القعا. هذه الخارطة تساعدك على التمييز بين التوعية العامة والخدمات السريرية المنظمة.",
    licensePath:
      "مسار الموافقة المحتمل للتحقق: التوعية الصحية العامة قد تختلف عن التغذية السريرية أو الاستشارات الطبية. تحقق مع DOH وADDED/TAMM هل تحتاج الخدمة إلى ترخيص مهني أو موافقة نشاط تجاري أو تسجيل تدريبي.",
    requiredDocuments: [
      "إثبات الهوية",
      "وثائق مؤهل التغذية أو الصحة أو العافية",
      "وصف واضح هل الخدمة توعوية أم سريرية",
      "الفئة المستهدفة والموقع المقترح",
      "أسئلة حول الحاجة إلى ترخيص مهني"
    ],
    fundingOptions: [
      "قد تكون برامج دعم المشاريع الصغيرة مناسبة إذا كانت الخدمة مشروعًا قانونيًا",
      "الشراكات مع المدارس أو النوادي أو المجتمع قد تقلل التكلفة",
      "يجب التحقق من أهلية التمويل والشراكات"
    ],
    estimatedCost:
      "قد تشمل التكاليف التسجيل التجاري، التحقق المهني، التسويق، المكان، الأدوات الرقمية، والمواد. لا تقدم خططًا علاجية أو طبية إلا إذا كان ذلك مرخصًا ومؤكدًا.",
    timeline: [
      "الأسبوع 1 — حدد هل الخدمة توعية عامة أم تغذية سريرية",
      "الأسبوع 2 — تحقق من المتطلبات المهنية ومتطلبات النشاط التجاري",
      "الأسبوع 3 — جهّز وصف خدمة آمن وخطة تكلفة ومواد مبنية على مصادر",
      "الأسبوع 4 — تواصل مع الجهات أو الشركاء المناسبين قبل الإطلاق"
    ],
    tomorrowMorning: [
      "اكتب هل خدمتك توعية صحية عامة أم تغذية سريرية",
      "سجّل مؤهلاتك وما لا يجب عليك تقديمه بدون ترخيص",
      "تحقق من المسار الصحيح قبل تقديم خدمات مدفوعة"
    ]
  },

  general: {
    service: "خدمة صحية صغيرة",
    summary:
      "تريد استكشاف بدء خدمة صحية صغيرة في القعا. هذه الخارطة تعطيك نقطة بداية آمنة وتوضح ما يجب التحقق منه قبل اتخاذ أي خطوة.",
    licensePath:
      "مسار الموافقة المحتمل للتحقق: ابدأ بتحديد النشاط التجاري عبر ADDED/TAMM، ثم تحقق من المتطلبات الصحية مع DOH إذا كانت الخدمة تشمل فحصًا صحيًا، رعاية مرضى، أدوية، نصيحة سريرية، أو نشاطًا صحيًا منظمًا.",
    requiredDocuments: [
      "إثبات الهوية",
      "وثائق المؤهل أو التدريب",
      "وصف الخدمة المقترحة",
      "تفاصيل موقع التشغيل",
      "خطة تكلفة بسيطة",
      "أسئلة للتأكد من DOH أو ADDED/TAMM أو الجهة المختصة"
    ],
    fundingOptions: [
      "تحقق من برامج دعم المشاريع الصغيرة والمتوسطة الرسمية في الإمارات",
      "راجع صندوق خليفة وMBRIF إذا كانت الفكرة مؤهلة",
      "تحقق من مبالغ التمويل والشروط وخطوات التقديم من المصادر الرسمية"
    ],
    estimatedCost:
      "التكاليف تختلف حسب مسار الترخيص، المعدات، المكان، التفتيش، ونموذج العمل. توجد بعض الرسوم المنشورة، لكن أغلب التكاليف يجب التحقق منها مباشرة.",
    timeline: [
      "الأسبوع 1 — حدد الخدمة بدقة وتحقق أي جهة تنطبق عليها",
      "الأسبوع 2 — اجمع بيانات الهوية والمؤهل والنشاط التجاري والموقع",
      "الأسبوع 3 — تواصل مع DOH أو ADDED/TAMM لتأكيد المسار الصحيح",
      "الأسبوع 4 — حضّر الطلب وملاحظات التمويل وقائمة الإطلاق"
    ],
    tomorrowMorning: [
      "اكتب الخدمة الصحية التي تريد تقديمها بدقة",
      "سجّل مؤهلاتك، تدريبك، ميزانيتك، والمساحة المتاحة",
      "زر مواقع DOH وADDED/TAMM ودعم الأعمال واكتب أسئلتك للتحقق"
    ]
  }
};

export async function generateRoadmap(formData, lang = "en") {
  const serviceInput = formData.service || "";
  const type = getType(serviceInput);
  const templates = lang === "ar" ? templatesAR : templatesEN;
  const sources = lang === "ar" ? sourcesAR : sourcesEN;
  const disclaimer = lang === "ar" ? disclaimerAR : disclaimerEN;
  const personalNotes = lang === "ar" ? getPersonalNotesAR(formData) : getPersonalNotesEN(formData);

  const base = templates[type];
  const service = serviceInput || base.service;

  const readinessItems = [
  serviceInput ? "Service idea provided" : "Service idea missing",
  formData.background ? "Qualification/background provided" : "Qualification/background missing",
  formData.budget ? "Budget selected" : "Budget missing",
  formData.space ? "Operating space selected" : "Operating space missing",
  formData.location ? "Location provided" : "Location missing"
];

let businessReadiness = 40;
if (serviceInput) businessReadiness += 20;
if (formData.background) businessReadiness += 20;
if (formData.budget) businessReadiness += 10;
if (formData.space) businessReadiness += 5;
if (formData.location) businessReadiness += 5;

const confidence =
  businessReadiness >= 90 ? "High" :
  businessReadiness >= 70 ? "Medium" :
  "Low";

const isArabic = lang === "ar";

const recommendationReasons = isArabic
  ? [
      `نوع الخدمة: ${service}`,
      formData.background ? `الخلفية أو المؤهل: ${formData.background}` : "الخلفية أو المؤهل غير مذكور",
      formData.budget ? `الميزانية: ${formData.budget}` : "الميزانية غير مذكورة",
      formData.space === "Home" ? "طريقة التشغيل: من المنزل" : "طريقة التشغيل: مكان مستقل",
      "الموقع: القعا، العين، أبوظبي"
    ]
  : [
      `Service selected: ${service}`,
      formData.background ? `Background/qualification: ${formData.background}` : "Background/qualification not provided",
      formData.budget ? `Budget selected: ${formData.budget}` : "Budget not provided",
      formData.space === "Home" ? "Operation model: Home-based" : "Operation model: Separate space",
      "Location: Al Qua'a, Al Ain, Abu Dhabi"
    ];

const thingsToVerify = isArabic
  ? [
      "تأكيد الجهة المسؤولة عن الموافقة أو الترخيص",
      "تأكيد ما إذا كان التشغيل من المنزل مسموحًا",
      "تأكيد الرسوم والتكاليف الحالية",
      "تأكيد متطلبات التأمين أو التفتيش إن وجدت"
    ]
  : [
      "Confirm the correct approval or licensing authority",
      "Confirm whether home-based operation is permitted",
      "Confirm current fees and cost requirements",
      "Confirm insurance or inspection requirements if applicable"
    ];

const firstStep = isArabic
  ? {
      title: "خطوتك الأولى",
      action: "تحقق من الجهة الرسمية المناسبة قبل صرف أي مبلغ.",
      effort: "20–30 دقيقة",
      priority: "عالية"
    }
  : {
      title: "Your First Step",
      action: "Verify the correct official authority before spending money.",
      effort: "20–30 minutes",
      priority: "High"
    };

return {
  ...base,
  service,
  summary: `${base.summary}${personalNotes.length ? " " + personalNotes.join(" ") : ""}`,
  businessReadiness,
  confidence,
  readinessItems,
  recommendationReasons,
  thingsToVerify,
  firstStep,
  officialSources: sources,
  disclaimer
};
}