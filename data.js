// ---------------------------------------------------------------
// Study content for CS Executive — Group 2 (ICSI Syllabus 2022)
// Papers: Capital Market & Securities Laws (CMSL),
//         Economic, Commercial and Intellectual Property Laws (ECIPL),
//         Tax Laws & Practice (TLP)
//
// This is a starter bank, not a substitute for the ICSI study
// material — amendments happen often, especially in tax and SEBI
// rules. Add more items any time by following the same shape.
// ---------------------------------------------------------------

const SUBJECTS = [
  { id: "cmsl", name: "Capital Market & Securities Laws", short: "CMSL", color: "#8A6A2E" },
  { id: "ecipl", name: "Economic, Commercial & IP Laws", short: "ECIPL", color: "#6E2A33" },
  { id: "tlp", name: "Tax Laws & Practice", short: "TLP", color: "#3B5C4B" },
];

const QUESTIONS = [
  // ---------------- CMSL ----------------
  {
    subject: "cmsl",
    q: "Which regulator is primarily responsible for protecting investors and regulating the securities market in India?",
    options: ["Reserve Bank of India", "Securities and Exchange Board of India", "Ministry of Corporate Affairs", "Insurance Regulatory and Development Authority"],
    answer: 1,
    explain: "SEBI was set up to protect investor interests and to regulate and develop the securities market, under the SEBI Act, 1992.",
  },
  {
    subject: "cmsl",
    q: "In a stock market, the 'primary market' refers to:",
    options: ["Trading of already-issued shares between investors", "Issue of new securities directly by the company to investors", "Only government bond trading", "Trading in derivatives"],
    answer: 1,
    explain: "The primary market is where new securities (like IPOs) are issued for the first time; resale happens later in the secondary market.",
  },
  {
    subject: "cmsl",
    q: "A Depository in the Indian securities market mainly performs the function of:",
    options: ["Setting interest rates", "Holding securities in electronic (dematerialised) form", "Underwriting new issues", "Fixing share prices"],
    answer: 1,
    explain: "Depositories (NSDL and CDSL) hold securities in dematerialised (electronic) form and facilitate their transfer.",
  },
  {
    subject: "cmsl",
    q: "'Insider trading' is prohibited mainly because it involves:",
    options: ["Trading only in government securities", "Using unpublished price-sensitive information for personal gain", "Trading through a broker", "Buying shares in a rights issue"],
    answer: 1,
    explain: "Insider trading regulations bar persons connected to a company from trading based on unpublished price-sensitive information (UPSI).",
  },
  {
    subject: "cmsl",
    q: "A Qualified Institutional Placement (QIP) is a route used by listed companies to:",
    options: ["Buy back their own shares", "Raise capital quickly from institutional investors without a formal public offer", "Delist from stock exchanges", "Issue bonus shares"],
    answer: 1,
    explain: "QIP lets a listed company raise funds from qualified institutional buyers without the lengthier public issue process.",
  },
  {
    subject: "cmsl",
    q: "Which of these is NOT typically classified as a 'hybrid' security?",
    options: ["Convertible debentures", "Preference shares convertible into equity", "Equity shares", "Warrants attached to bonds"],
    answer: 2,
    explain: "Hybrid securities combine features of debt and equity (e.g., convertibles); plain equity shares are not hybrid.",
  },
  {
    subject: "cmsl",
    q: "A 'green shoe option' in an IPO is used to:",
    options: ["Guarantee a minimum dividend", "Stabilise the post-listing price of shares", "Reduce the face value of shares", "Convert debt into equity"],
    answer: 1,
    explain: "The green shoe (over-allotment) option allows additional share allotment to help stabilise price after listing.",
  },
  {
    subject: "cmsl",
    q: "Mutual funds in India are primarily regulated under:",
    options: ["Companies Act, 2013", "SEBI (Mutual Funds) Regulations", "Banking Regulation Act, 1949", "Insurance Act, 1938"],
    answer: 1,
    explain: "Mutual funds are set up as trusts and regulated by SEBI under the SEBI (Mutual Funds) Regulations.",
  },
  {
    subject: "cmsl",
    q: "A stock exchange's 'circuit breaker' mechanism is designed to:",
    options: ["Fix the opening price of an IPO", "Temporarily halt trading during extreme price volatility", "Determine dividend payouts", "Approve new listings"],
    answer: 1,
    explain: "Circuit breakers pause trading market-wide or in a scrip when price moves exceed a set percentage, to curb panic and volatility.",
  },
  {
    subject: "cmsl",
    q: "'Buy-back of shares' by a company results in:",
    options: ["An increase in the number of outstanding shares", "A reduction in the number of outstanding shares", "Automatic delisting of the company", "Issue of new debentures"],
    answer: 1,
    explain: "Buy-back extinguishes the repurchased shares, reducing the total shares outstanding and typically improving per-share metrics.",
  },

  // ---------------- ECIPL ----------------
  {
    subject: "ecipl",
    q: "The Competition Act, 2002 primarily aims to:",
    options: ["Regulate foreign exchange transactions", "Prevent practices having an adverse effect on competition", "Register trademarks", "Fix prices of essential commodities"],
    answer: 1,
    explain: "The Competition Act prohibits anti-competitive agreements, abuse of dominance, and regulates combinations (mergers/acquisitions).",
  },
  {
    subject: "ecipl",
    q: "Under FEMA, 1999, a transaction that alters the assets or liabilities outside India of a person resident in India is called:",
    options: ["A current account transaction", "A capital account transaction", "A restricted transaction", "A prohibited transaction"],
    answer: 1,
    explain: "Capital account transactions change the assets/liabilities (including contingent liabilities) of residents outside India or non-residents in India.",
  },
  {
    subject: "ecipl",
    q: "A trademark primarily protects:",
    options: ["A new invention or process", "A distinctive sign identifying goods or services of a business", "Literary and artistic works", "A geographical indication only"],
    answer: 1,
    explain: "Trademarks protect brand identifiers (words, logos, etc.) that distinguish one trader's goods/services from another's.",
  },
  {
    subject: "ecipl",
    q: "Under the Patents Act, 1970, the general term of a patent in India is:",
    options: ["10 years", "14 years", "20 years from the date of filing", "Perpetual"],
    answer: 2,
    explain: "A patent in India is generally granted protection for 20 years from the date of filing the application.",
  },
  {
    subject: "ecipl",
    q: "A 'Geographical Indication' (GI) tag, like for Darjeeling Tea, primarily indicates:",
    options: ["The inventor's name", "That a product's qualities are essentially linked to its place of origin", "A copyright owner", "A company's trademark"],
    answer: 1,
    explain: "GI tags identify goods originating from a specific place, where a given quality or reputation is essentially attributable to that origin.",
  },
  {
    subject: "ecipl",
    q: "The Consumer Protection Act, 2019 introduced which of these new concepts?",
    options: ["Central Consumer Protection Authority (CCPA)", "Reserve Bank of India", "Insolvency and Bankruptcy Board", "Registrar of Companies"],
    answer: 0,
    explain: "The 2019 Act created the CCPA to promote, protect and enforce consumer rights, including against misleading advertisements.",
  },
  {
    subject: "ecipl",
    q: "'Abuse of dominant position' under competition law refers to:",
    options: ["Any large company operating in a market", "A dominant enterprise using its position to limit competition unfairly", "Merging with a competitor", "Setting up a new business"],
    answer: 1,
    explain: "Abuse of dominance includes practices like unfair pricing or limiting production/markets by an enterprise with a dominant market position.",
  },
  {
    subject: "ecipl",
    q: "Copyright typically protects:",
    options: ["An idea itself", "The original expression of an idea, such as a written work or software code", "A business's trade secret only", "A product's shape alone"],
    answer: 1,
    explain: "Copyright protects the original expression (literary, artistic, musical, software, etc.), not the underlying idea itself.",
  },
  {
    subject: "ecipl",
    q: "The Essential Commodities Act empowers the government to:",
    options: ["Fix stock exchange listing fees", "Control production, supply and distribution of specified essential goods", "Register patents", "Regulate mutual funds"],
    answer: 1,
    explain: "The Act allows the government to regulate or control the production, supply, and distribution of commodities declared 'essential'.",
  },
  {
    subject: "ecipl",
    q: "A 'combination' under competition law usually refers to:",
    options: ["A partnership deed", "Mergers, amalgamations or acquisitions crossing certain thresholds", "A joint venture agreement below any threshold", "A single company's internal restructuring"],
    answer: 1,
    explain: "Combinations (M&A crossing asset/turnover thresholds) require notification to the Competition Commission before being given effect.",
  },

  // ---------------- TLP ----------------
  {
    subject: "tlp",
    q: "Under the Income-tax Act, income is classified into how many heads?",
    options: ["Three", "Four", "Five", "Six"],
    answer: 2,
    explain: "The five heads are: Salaries, House Property, Business/Profession, Capital Gains, and Other Sources.",
  },
  {
    subject: "tlp",
    q: "'Previous Year' under the Income-tax Act generally refers to:",
    options: ["The year in which tax is paid", "The financial year in which income is earned", "The assessment year", "Any 12-month period chosen by the taxpayer"],
    answer: 1,
    explain: "The previous year is the financial year in which income is actually earned; it is taxed in the following 'assessment year'.",
  },
  {
    subject: "tlp",
    q: "GST in India is best described as a tax on:",
    options: ["Only manufacturing", "Only services", "Supply of goods and/or services", "Only imports"],
    answer: 2,
    explain: "GST is a destination-based tax levied on the supply of goods and/or services, replacing many earlier indirect taxes.",
  },
  {
    subject: "tlp",
    q: "'Tax evasion' differs from 'tax avoidance' mainly because tax evasion:",
    options: ["Is always legal", "Involves illegal means to reduce tax liability", "Only applies to companies", "Means paying more tax than required"],
    answer: 1,
    explain: "Tax evasion uses illegal means (concealment, fraud) to escape tax; tax avoidance uses legal means (though sometimes aggressive) to minimise tax.",
  },
  {
    subject: "tlp",
    q: "Input Tax Credit (ITC) under GST allows a registered person to:",
    options: ["Avoid filing returns", "Reduce output tax liability by the tax already paid on inputs", "Get a refund of income tax", "Claim depreciation on assets"],
    answer: 1,
    explain: "ITC lets a taxable person set off the GST paid on purchases (inputs) against the GST payable on sales (output), avoiding cascading tax.",
  },
  {
    subject: "tlp",
    q: "Under customs law, 'Basic Customs Duty' is levied on:",
    options: ["Goods manufactured within India for domestic sale", "Goods imported into India", "Only services rendered abroad", "Salary income of NRIs"],
    answer: 1,
    explain: "Basic Customs Duty is levied on goods imported into India under the Customs Act and Customs Tariff Act.",
  },
  {
    subject: "tlp",
    q: "A person's 'residential status' for income tax purposes mainly affects:",
    options: ["The heads of income applicable to them", "The scope of income taxable in India for them", "Only their GST registration", "The audit requirement alone"],
    answer: 1,
    explain: "Residential status (resident, RNOR, or non-resident) determines whether global income or only India-sourced income is taxable.",
  },
  {
    subject: "tlp",
    q: "Which of these is generally an example of a 'capital receipt' rather than a 'revenue receipt'?",
    options: ["Salary received monthly", "Sale proceeds of a long-held office building", "Rent received from a tenant", "Interest earned on a savings account"],
    answer: 1,
    explain: "Sale of a capital asset (like a building held long-term) is a capital receipt, generally taxed as capital gains, not as regular income.",
  },
  {
    subject: "tlp",
    q: "The composition scheme under GST is primarily meant for:",
    options: ["Large exporters", "Small taxpayers, to simplify compliance with a lower, fixed tax rate", "E-commerce operators only", "Only service exporters"],
    answer: 1,
    explain: "The composition scheme lets eligible small businesses pay tax at a fixed, lower rate with simplified compliance, instead of regular GST.",
  },
  {
    subject: "tlp",
    q: "Advance tax is best described as:",
    options: ["Tax paid after the assessment is completed", "Tax paid in instalments during the financial year, on estimated income", "A penalty for late filing", "A refund mechanism"],
    answer: 1,
    explain: "Advance tax requires taxpayers to pay tax in instalments during the year itself, based on estimated income, rather than in one lump sum later.",
  },
];

const FLASHCARDS = [
  // ---------------- CMSL ----------------
  { subject: "cmsl", front: "SEBI", back: "Securities and Exchange Board of India — the market regulator that protects investors and regulates/develops the securities market." },
  { subject: "cmsl", front: "Primary vs Secondary Market", back: "Primary: new securities issued to investors (e.g., IPO). Secondary: existing securities traded among investors (stock exchanges)." },
  { subject: "cmsl", front: "Dematerialisation", back: "Converting physical share certificates into electronic form, held with a depository (NSDL/CDSL)." },
  { subject: "cmsl", front: "UPSI", back: "Unpublished Price Sensitive Information — information not public yet, which could materially affect share price; trading on it is 'insider trading'." },
  { subject: "cmsl", front: "QIP", back: "Qualified Institutional Placement — a fast route for a listed company to raise funds from institutional investors without a full public offer." },
  { subject: "cmsl", front: "Green Shoe Option", back: "An over-allotment option in an IPO used to help stabilise the share price after listing." },
  { subject: "cmsl", front: "Depository Participant (DP)", back: "An agent of the depository (like a bank or broker) through which investors hold and transact in demat securities." },
  { subject: "cmsl", front: "Circuit Breaker", back: "A trading halt triggered automatically when price moves exceed a set limit, to curb extreme volatility." },
  { subject: "cmsl", front: "Buy-back of Shares", back: "A company repurchasing its own shares, reducing shares outstanding — often used to return surplus cash to shareholders." },
  { subject: "cmsl", front: "Debenture", back: "A debt instrument acknowledging a company's borrowing, usually carrying a fixed interest rate, which may or may not be convertible into equity." },

  // ---------------- ECIPL ----------------
  { subject: "ecipl", front: "Competition Act, 2002", back: "Prohibits anti-competitive agreements, abuse of dominant position, and regulates combinations (mergers/acquisitions) above set thresholds." },
  { subject: "ecipl", front: "FEMA, 1999", back: "Foreign Exchange Management Act — governs foreign exchange transactions, current and capital account dealings, in India." },
  { subject: "ecipl", front: "Trademark", back: "A distinctive sign (word, logo, etc.) that identifies and distinguishes the goods/services of one business from another." },
  { subject: "ecipl", front: "Patent Term", back: "Generally 20 years from the date of filing the patent application in India." },
  { subject: "ecipl", front: "Geographical Indication (GI)", back: "A tag identifying goods as originating from a place, where a quality or reputation is essentially due to that origin (e.g., Darjeeling Tea)." },
  { subject: "ecipl", front: "CCPA", back: "Central Consumer Protection Authority — created under the Consumer Protection Act, 2019, to promote and enforce consumer rights." },
  { subject: "ecipl", front: "Abuse of Dominance", back: "When an enterprise with a dominant market position uses it unfairly — e.g., predatory pricing or limiting supply — to harm competition." },
  { subject: "ecipl", front: "Copyright", back: "Protects the original expression of an idea (books, software, music, art), not the idea itself." },
  { subject: "ecipl", front: "Essential Commodities Act", back: "Allows the government to regulate production, supply, and distribution of commodities declared essential, to ensure fair access and prices." },
  { subject: "ecipl", front: "Combination (Competition Law)", back: "Mergers, amalgamations, or acquisitions crossing prescribed asset/turnover thresholds, which must be notified to the Competition Commission." },

  // ---------------- TLP ----------------
  { subject: "tlp", front: "Five Heads of Income", back: "Salaries; Income from House Property; Profits and Gains of Business or Profession; Capital Gains; Income from Other Sources." },
  { subject: "tlp", front: "Previous Year vs Assessment Year", back: "Previous Year: when income is earned. Assessment Year: the following year, when that income is assessed and taxed." },
  { subject: "tlp", front: "GST", back: "A destination-based tax on the supply of goods and/or services, replacing many earlier central and state indirect taxes." },
  { subject: "tlp", front: "Tax Evasion vs Avoidance", back: "Evasion: illegal means to escape tax (concealment, fraud). Avoidance: reducing tax legally, though sometimes through aggressive planning." },
  { subject: "tlp", front: "Input Tax Credit (ITC)", back: "Credit for GST already paid on purchases, which can be set off against GST payable on sales — avoids double taxation (cascading)." },
  { subject: "tlp", front: "Basic Customs Duty", back: "Duty levied on goods imported into India, under the Customs Act, 1962 and the Customs Tariff Act." },
  { subject: "tlp", front: "Residential Status", back: "Classification (Resident/RNOR/Non-Resident) that determines how much of a person's global income is taxable in India." },
  { subject: "tlp", front: "Capital Receipt vs Revenue Receipt", back: "Capital: from sale of a capital asset (e.g., property) — often taxed as capital gains. Revenue: regular income like salary or rent." },
  { subject: "tlp", front: "Composition Scheme (GST)", back: "A simplified GST option for small taxpayers to pay tax at a lower, fixed rate with reduced compliance burden." },
  { subject: "tlp", front: "Advance Tax", back: "Tax paid in instalments during the financial year itself, based on estimated income, rather than as one payment later." },
];
