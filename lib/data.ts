import { Thermometer, Scissors, Sparkles, Stethoscope, House, Wrench, Car, Dumbbell, Compass, GraduationCap, SprayCan, Scale, Calculator, Briefcase, Megaphone, Globe, PhoneCall, KanbanSquare, Workflow, Star, Magnet, MousePointerClick, ClipboardCheck, HeartHandshake, MessageSquare, MessageCircle, Mail, ThumbsUp, Camera, AtSign, type LucideIcon } from "lucide-react";

export type Industry = {
  slug: string; name: string; group: string; headline: string; sub: string;
  image: string; keyword: string; icon: LucideIcon;
  problems: { title: string; example: string; consequence: string }[];
  solutions: string[];
  pipeline: string[];
  before: string; after: string;
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "hvac", icon: Thermometer, name: "HVAC", group: "Home & Trades", headline: "Turn More Emergency Calls Into Booked HVAC Jobs.", sub: "For heating, cooling, AC repair, furnace and heat pump businesses in the USA. Every call answered, every estimate followed up, every maintenance customer remembered.",
    image: "/images/industries/hvac.jpg", keyword: "HVAC marketing agency USA",
    problems: [
      { title: "Missed emergency calls", example: "A homeowner's AC fails at 9pm. Your phone rings, no one answers.", consequence: "They call the next company on Google. That job is gone." },
      { title: "Unanswered quotations", example: "You send an estimate for a new system. No one follows up for a week.", consequence: "The customer forgets you and signs with a competitor." },
      { title: "Forgotten maintenance customers", example: "Last year's tune-up customers never hear from you again.", consequence: "Seasonal work dries up and the diary swings from full to empty." },
    ],
    solutions: ["AI voice receptionist that answers every call in your business name", "Missed-call text-back with a booking link", "Emergency inquiry routing to the right technician", "Automated estimate follow-up", "Seasonal maintenance reminders", "Review requests after every completed job"],
    pipeline: ["New Inquiry", "Qualified", "Visit Scheduled", "Estimate Sent", "Approved", "Job Completed", "Follow-Up"],
    before: "Calls go to voicemail after hours. Estimates sit unanswered. Maintenance customers drift away.",
    after: "Every call is answered. Estimates are followed up automatically. Maintenance customers get a reminder before the season starts.",
    faqs: [
      { q: "Can the AI agent handle emergency calls?", a: "Yes. It answers in your business name, takes the details, and routes urgent calls by the rules you set. A human on your team can take over at any time." },
      { q: "Do I need to replace my current booking system?", a: "No. We connect to the tools you already use, or build the booking flow inside your AZEDOR system — whichever fits your business." },
      { q: "What happens during the free audit?", a: "We check your ads, your reply speed, your booking page and your reviews, then show you in writing where leads are leaking." },
    ],
  },
  {
    slug: "salons-spas", icon: Scissors, name: "Salons & Spas", group: "Beauty & Wellness", headline: "Fill Empty Appointment Slots and Bring More Clients Back.", sub: "For hair, nail, lash, brow, med spa, day spa and massage businesses. Bookings that fill themselves, reminders that cut no-shows, and clients who come back.",
    image: "/images/industries/salons-spas.jpg", keyword: "salon marketing agency",
    problems: [
      { title: "Appointment gaps", example: "Tuesday afternoon is empty, but your Instagram is full of likes.", consequence: "Likes do not pay rent. Empty chairs cost you every hour." },
      { title: "Delayed Instagram replies", example: "A client asks for a price in DMs. You reply the next day.", consequence: "She has already booked somewhere else." },
      { title: "One-time customers", example: "A new client visits once and never hears from you again.", consequence: "You keep paying for new clients instead of keeping the ones you have." },
    ],
    solutions: ["Social media inquiry handling on Instagram and Facebook", "Booking automation with instant confirmation", "Appointment reminders that cut no-shows", "Waitlist management for cancelled slots", "Rebooking campaigns at 30, 60 and 90 days", "Client reactivation for lapsed clients"],
    pipeline: ["New Inquiry", "Appointment Requested", "Confirmed", "Attended", "Rebooking", "Loyal Client"],
    before: "DMs pile up unanswered. No-shows leave empty chairs. Clients visit once and disappear.",
    after: "Every inquiry gets a fast reply and a booking link. Reminders go out automatically. Past clients are invited back before they drift away.",
    faqs: [
      { q: "Will it work with my booking system?", a: "Yes. We work with the booking tools salons already use, or build booking into your AZEDOR system." },
      { q: "Can it reply on Instagram?", a: "Yes. The AI agent handles common Instagram and Facebook inquiries, qualifies them and sends a booking link." },
      { q: "How do rebooking campaigns work?", a: "After a visit, clients get a reminder to rebook at the right interval for their service — and a nudge if they do not." },
    ],
  },
  {
    slug: "beauty-aesthetics", icon: Sparkles, name: "Beauty & Aesthetics", group: "Beauty & Wellness", headline: "Fill Your Clinic's Calendar with High-Paying Clients.", sub: "For medical aesthetics, laser, skin, hair and scalp clinics. Premium clients, booked consultations, and follow-up that respects the decision they are making.",
    image: "/images/industries/beauty-aesthetics.jpg", keyword: "beauty clinic marketing agency",
    problems: [
      { title: "Consultation inquiries go cold", example: "Someone asks about a treatment. The reply comes two days later.", consequence: "They book a consultation with a clinic that answered first." },
      { title: "Price shoppers, no qualification", example: "Your team spends hours answering people who were never a fit.", consequence: "Your diary fills with the wrong consultations." },
      { title: "No follow-up after consultation", example: "A client leaves undecided. No one checks in.", consequence: "A high-value treatment is lost to silence." },
    ],
    solutions: ["AI qualification before the consultation is booked", "Consultation booking with reminders", "Treatment follow-up and aftercare messages", "Review requests after treatment", "Rebooking for maintenance treatments"],
    pipeline: ["New Inquiry", "Qualified", "Consultation Booked", "Consultation Done", "Treatment Booked", "Treatment Done", "Review & Rebook"],
    before: "Inquiries wait days for a reply. Consultations are booked with unqualified leads. Clients leave undecided and unheard from.",
    after: "Inquiries are answered fast and qualified first. Consultations are booked with the right people, and follow-up happens after every visit.",
    faqs: [
      { q: "Does the AI agent give medical advice?", a: "No. It answers general questions, books consultations and hands over to your team for anything clinical." },
      { q: "Can you help with high-value treatments?", a: "Yes. The system is built around consultation quality, not volume — fewer, better consultations." },
      { q: "What happens during the free audit?", a: "We check your ads, reply speed, booking page and reviews, and show you where consultations are leaking." },
    ],
  },
  {
    slug: "dental-healthcare", icon: Stethoscope, name: "Dental & Healthcare", group: "Health", headline: "Connect Patient Inquiries With Better Appointment Management.", sub: "For private dentists, orthodontists, physiotherapists and private clinics. Fewer missed calls, fewer no-shows, and less admin work for your front desk.",
    image: "/images/industries/dental-healthcare.jpg", keyword: "dental marketing agency",
    problems: [
      { title: "Missed patient calls", example: "The front desk is with a patient. The phone rings and rings.", consequence: "A new patient books with the practice down the road." },
      { title: "Appointment no-shows", example: "A patient forgets. The chair sits empty for an hour.", consequence: "Lost revenue that no reminder system would have saved — if one existed." },
      { title: "Admin workload", example: "Your team spends the day chasing confirmations and paperwork.", consequence: "Less time for patients, more stress for staff." },
    ],
    solutions: ["Administrative inquiry assistance, never medical diagnosis", "Appointment reminders and confirmations", "Scheduling support with human handover", "Patient reactivation where appropriate", "Review requests after appointments"],
    pipeline: ["New Inquiry", "Qualified", "Appointment Booked", "Confirmed", "Attended", "Follow-Up", "Review"],
    before: "Calls are missed while the desk is busy. No-shows leave empty chairs. Admin eats the day.",
    after: "Inquiries are answered and appointments confirmed automatically. The front desk handles patients, not phone tag.",
    faqs: [
      { q: "Does the AI agent give medical advice?", a: "No. It never provides diagnosis or medical advice, and it never collects sensitive medical information through unsecured systems. It handles admin, booking and handover to your team." },
      { q: "Can it hand over to a human?", a: "Yes. At any point the conversation can be handed to a member of your team." },
      { q: "Do you claim healthcare compliance?", a: "No. We make no compliance claims without verification, and we build in privacy and human-review safeguards." },
    ],
  },
  {
    slug: "real-estate", icon: House, name: "Real Estate", group: "Property", headline: "Convert More Property Inquiries Into Qualified Opportunities.", sub: "For estate agents, lettings agencies and mortgage brokers. Qualified buyers and sellers, viewings booked, and follow-up that never lets a lead go cold.",
    image: "/images/industries/real-estate.jpg", keyword: "real estate marketing agency",
    problems: [
      { title: "Unqualified leads", example: "Fifty inquiries arrive. Forty were never buyers.", consequence: "Agents waste their week on people who cannot buy." },
      { title: "Delayed agent response", example: "A buyer asks about a listing at 8pm. The reply comes Monday.", consequence: "They have already viewed with another agent." },
      { title: "Missed viewings", example: "A viewing is booked, then forgotten.", consequence: "An empty property and an unhappy seller." },
    ],
    solutions: ["Buyer and seller AI qualification", "Agent assignment by area and availability", "Viewing appointment requests and reminders", "Property inquiry automation", "Long-term lead nurturing for not-yet-ready buyers"],
    pipeline: ["New Lead", "Qualified", "Agent Assigned", "Viewing", "Negotiation", "Closed"],
    before: "Agents chase unqualified inquiries. Viewings are missed. Follow-up stops after the first call.",
    after: "Leads are qualified before an agent's time is spent. Viewings are booked and reminded. Long-term buyers are nurtured until they are ready.",
    faqs: [
      { q: "Can it qualify buyers before an agent calls?", a: "Yes. The AI agent asks budget, timeline, location and financing questions, then routes qualified leads to the right agent." },
      { q: "Does it work for lettings too?", a: "Yes. The same qualification and viewing flow works for rentals." },
      { q: "What happens during the free audit?", a: "We check your ads, listings, reply speed and follow-up, and show you where inquiries are leaking." },
    ],
  },
  {
    slug: "home-services", icon: Wrench, name: "Home Services & Contractors", group: "Home & Trades", headline: "Stop Chasing Leads. Start Closing Jobs.", sub: "For plumbing, heating, electrical, roofing, landscaping and building businesses. Estimates followed up, jobs scheduled, and repeat work that comes back to you.",
    image: "/images/industries/home-services.jpg", keyword: "home services marketing agency",
    problems: [
      { title: "Missed inquiries", example: "You are on a job. The phone rings. No one answers.", consequence: "The homeowner calls the next contractor." },
      { title: "Forgotten quotations", example: "You quote a job and never hear back — because you never followed up.", consequence: "Work you already won on price is lost to silence." },
      { title: "No repeat work", example: "A one-off job ends. The customer never hears from you again.", consequence: "You pay for new customers instead of repeat ones." },
    ],
    solutions: ["Automated inquiry responses", "Quotation follow-up sequences", "Job scheduling assistance", "CRM management for every job", "Service reminders", "Reputation management after each job"],
    pipeline: ["New Inquiry", "Qualified", "Estimate Sent", "Followed Up", "Job Scheduled", "Job Completed", "Review & Repeat"],
    before: "Quotes go out and are forgotten. Jobs are scheduled by memory. Customers are one-and-done.",
    after: "Every inquiry is answered, every quote followed up, every job scheduled — and past customers are reminded when the next service is due.",
    faqs: [
      { q: "Can it follow up on quotes automatically?", a: "Yes. Quotes get a timed follow-up sequence, and your team sees exactly who replied and who needs a call." },
      { q: "Do you work with seasonal trades?", a: "Yes. Reminders and campaigns are timed to your season, so the diary does not swing empty." },
      { q: "What happens during the free audit?", a: "We check your ads, reply speed, quote follow-up and reviews, and show you the leaks in writing." },
    ],
  },
  {
    slug: "automotive", icon: Car, name: "Automotive Services", group: "Vehicles", headline: "Keep Your Service Bays Fully Booked.", sub: "For independent garages, MOT centres, specialist repairers and detailers. Service bookings, maintenance reminders and customers who come back on time.",
    image: "/images/industries/automotive.jpg", keyword: "automotive marketing agency",
    problems: [
      { title: "Empty service bays", example: "Mid-week is quiet, but no one is chasing bookings.", consequence: "Technicians stand idle while the phone stays quiet." },
      { title: "Missed maintenance reminders", example: "A customer's service is due. No one tells them.", consequence: "They go to a chain that did remind them." },
      { title: "Slow quotation responses", example: "A repair quote is requested. The reply comes the next day.", consequence: "The customer has already approved the work elsewhere." },
    ],
    solutions: ["Service booking with instant confirmation", "Maintenance and MOT reminders", "Estimate follow-up", "Customer reactivation campaigns", "Review requests after service"],
    pipeline: ["New Inquiry", "Qualified", "Service Booked", "Confirmed", "Service Done", "Review", "Next Service Reminder"],
    before: "Bays sit empty mid-week. Services are due and no one is told. Quotes arrive late.",
    after: "Bookings come in with reminders attached. Due services trigger a message before the customer goes elsewhere.",
    faqs: [
      { q: "Can it remind customers about MOTs and services?", a: "Yes. Reminders are sent before the due date, with a booking link." },
      { q: "Does it work for specialist garages?", a: "Yes. The system is built around your services, your bays and your diary." },
      { q: "What happens during the free audit?", a: "We check your ads, reply speed, booking page and reviews, and show you where bookings leak." },
    ],
  },
  {
    slug: "gyms-fitness", icon: Dumbbell, name: "Gyms & Fitness", group: "Health & Fitness", headline: "Pack Your Classes. Automate Your Growth.", sub: "For independent gyms, boutique studios, CrossFit boxes and personal trainers. Trial bookings, member follow-up and reactivations that run on their own.",
    image: "/images/industries/gyms-fitness.jpg", keyword: "gym marketing agency",
    problems: [
      { title: "Unconverted trial inquiries", example: "Someone asks about a trial. No one follows up.", consequence: "They join the gym that answered first." },
      { title: "Membership cancellations", example: "A member stops coming. No one notices until they cancel.", consequence: "Churn you could have prevented with one message." },
      { title: "Inactive members", example: "Half the membership list has not visited in a month.", consequence: "Quiet cancellations, month after month." },
    ],
    solutions: ["Trial booking with instant confirmation", "Membership follow-up and onboarding", "Class reminders", "Member engagement sequences", "Reactivation campaigns for inactive members"],
    pipeline: ["New Inquiry", "Trial Booked", "Trial Attended", "Member", "Engaged", "At Risk", "Reactivated"],
    before: "Trial inquiries go unanswered. Members drift away unnoticed. The list shrinks quietly.",
    after: "Trials are booked and followed up. At-risk members get a nudge before they cancel.",
    faqs: [
      { q: "Can it book trials automatically?", a: "Yes. Trials are booked from ads, your website and social messages, with reminders attached." },
      { q: "How does reactivation work?", a: "Members who stop attending get a timed sequence — a check-in, an offer to return, and a reason to come back." },
      { q: "What happens during the free audit?", a: "We check your ads, reply speed, trial booking and follow-up, and show you the leaks." },
    ],
  },
  {
    slug: "coaches-consultants", icon: Compass, name: "Coaches & Consultants", group: "Professional", headline: "Fill Your Calendar with Qualified Prospects.", sub: "For business, life and executive coaches and financial advisors. Qualified discovery calls, fewer no-shows, and onboarding that happens on its own.",
    image: "/images/industries/coaches-consultants.jpg", keyword: "coach marketing agency",
    problems: [
      { title: "Unqualified discovery calls", example: "Your diary is full of calls with people who cannot afford you.", consequence: "Hours spent selling to the wrong people." },
      { title: "High no-show rates", example: "A prospect books, then does not show.", consequence: "An hour you cannot get back." },
      { title: "Manual prospect follow-up", example: "You write every follow-up yourself, late at night.", consequence: "Good prospects go cold while you are busy coaching." },
    ],
    solutions: ["Qualification funnels before the call is booked", "Appointment reminders that cut no-shows", "Automated prospect nurturing", "CRM pipelines for every prospect", "Automated onboarding for new clients"],
    pipeline: ["New Inquiry", "Qualified", "Discovery Call Booked", "Call Done", "Proposal Sent", "Client", "Onboarded"],
    before: "Discovery calls are booked with anyone. No-shows waste hours. Follow-up is manual and late.",
    after: "Prospects are qualified before they reach your diary. Reminders cut no-shows. Onboarding runs itself.",
    faqs: [
      { q: "Can it qualify prospects before a call?", a: "Yes. A short funnel asks budget, goal and timeline, so only qualified prospects reach your calendar." },
      { q: "How do you reduce no-shows?", a: "Reminders, a confirmation step and a reschedule link — before the call, not after." },
      { q: "What happens during the free audit?", a: "We check your ads, funnel, reply speed and follow-up, and show you the leaks in writing." },
    ],
  },
  {
    slug: "education-training", icon: GraduationCap, name: "Education & Training", group: "Learning", headline: "Fill Your Courses. Automate Enrolment.", sub: "For vocational training, e-learning, certification courses and masterclasses. Enrolment funnels, student follow-up and admin that does not eat your week.",
    image: "/images/industries/education-training.jpg", keyword: "education marketing agency",
    problems: [
      { title: "Low course enrolment", example: "People visit the course page and leave without enrolling.", consequence: "Seats stay empty while ad spend keeps running." },
      { title: "Manual admissions", example: "Every application is handled by email and spreadsheets.", consequence: "Slow replies, lost applicants, stressed staff." },
      { title: "Unanswered student inquiries", example: "A student asks about fees. The reply comes days later.", consequence: "They enrol with the provider that answered first." },
    ],
    solutions: ["Enrolment funnels for each course", "Student CRM with full history", "Admission follow-up sequences", "Payment reminders", "Student portals and online learning platforms"],
    pipeline: ["New Inquiry", "Qualified", "Application Started", "Application Done", "Enrolled", "Course Started", "Completed"],
    before: "Course pages get visits and no enrolments. Admissions run on email and memory.",
    after: "Enquiries are answered fast and followed up. Applications move through one pipeline, and students get reminders on time.",
    faqs: [
      { q: "Can you build a student portal?", a: "Yes. Portals with hosted lectures, quizzes, materials and a student dashboard are part of the system." },
      { q: "Does it handle payment reminders?", a: "Yes. Payment reminders are automated, with human review before anything sensitive is sent." },
      { q: "What happens during the free audit?", a: "We check your ads, course pages, reply speed and enrolment follow-up, and show you the leaks." },
    ],
  },
  {
    slug: "cleaning", icon: SprayCan, name: "Cleaning Businesses", group: "Home & Trades", headline: "Book More Cleans. Keep More Clients.", sub: "For residential and commercial cleaning businesses. Quotes answered fast, recurring cleans booked, and clients who stay.",
    image: "/images/industries/cleaning.jpg", keyword: "cleaning business marketing agency",
    problems: [
      { title: "Slow quote replies", example: "A homeowner asks for a quote. You reply tomorrow.", consequence: "They booked the cleaner who replied in minutes." },
      { title: "One-off jobs, no repeats", example: "A deep clean ends. No recurring booking is offered.", consequence: "You keep finding new customers instead of keeping old ones." },
      { title: "No-shows and reschedules", example: "A clean is booked, then missed, then forgotten.", consequence: "An empty slot and a client who drifts away." },
    ],
    solutions: ["Instant quote handling and booking", "Recurring clean scheduling", "Reminders and reschedule links", "Review requests after each clean", "Reactivation for lapsed clients"],
    pipeline: ["New Inquiry", "Quote Sent", "Booked", "Clean Done", "Review", "Recurring Client"],
    before: "Quotes arrive late. Cleans are one-off. Clients disappear after the first visit.",
    after: "Quotes are answered fast, recurring cleans are offered at the right moment, and reminders keep the diary full.",
    faqs: [
      { q: "Can it offer recurring cleans automatically?", a: "Yes. After a first clean, clients are offered a recurring slot with one click." },
      { q: "Does it handle commercial cleaning too?", a: "Yes. The same quote and follow-up flow works for offices and commercial sites." },
      { q: "What happens during the free audit?", a: "We check your ads, reply speed, quote follow-up and reviews, and show you the leaks." },
    ],
  },
  {
    slug: "legal", icon: Scale, name: "Legal & Professional Services", group: "Professional", headline: "Turn Inquiries Into Consultations — Without the Admin.", sub: "For law firms and professional service firms. Qualified consultations, careful follow-up, and admin that respects confidentiality.",
    image: "/images/industries/legal.jpg", keyword: "law firm marketing agency",
    problems: [
      { title: "Unqualified inquiries", example: "Your team fields calls that were never your area of law.", consequence: "Hours lost on the wrong matters." },
      { title: "Slow consultation booking", example: "A potential client waits days for a callback.", consequence: "They instruct the firm that called back first." },
      { title: "Manual intake", example: "Intake forms, emails and phone notes live in three places.", consequence: "Details are missed and follow-up is inconsistent." },
    ],
    solutions: ["Careful inquiry qualification with human review", "Consultation booking and reminders", "Structured intake and CRM records", "Follow-up sequences with human oversight", "Review and referral requests where appropriate"],
    pipeline: ["New Inquiry", "Qualified", "Consultation Booked", "Consultation Done", "Engaged", "Matter Open", "Follow-Up"],
    before: "Inquiries are unqualified and slow. Intake is scattered. Follow-up depends on memory.",
    after: "Inquiries are qualified first, consultations are booked with reminders, and intake lives in one place — with a human in control.",
    faqs: [
      { q: "Does the AI agent give legal advice?", a: "No. It handles general inquiries, books consultations and hands over to your team. It never gives legal advice." },
      { q: "Is client information kept private?", a: "Yes. We build in privacy safeguards and human review before any sensitive information is handled." },
      { q: "What happens during the free audit?", a: "We check your ads, reply speed, intake flow and follow-up, and show you the leaks in writing." },
    ],
  },
  {
    slug: "accounting", icon: Calculator, name: "Accounting & Professional Services", group: "Professional", headline: "Win Better Clients. Automate the Follow-Up.", sub: "For accountants, bookkeepers and professional service firms. Qualified inquiries, onboarding that runs itself, and clients who stay year after year.",
    image: "/images/industries/accounting.jpg", keyword: "accounting firm marketing agency",
    problems: [
      { title: "Seasonal rush, quiet months", example: "Tax season is chaos. Summer is quiet.", consequence: "Revenue swings because no system keeps the pipeline warm." },
      { title: "Manual onboarding", example: "Every new client means the same forms, emails and chasing.", consequence: "Hours of admin for every new engagement." },
      { title: "No follow-up after a quote", example: "A quote is sent. No one follows up.", consequence: "The prospect signs with the firm that did." },
    ],
    solutions: ["Inquiry qualification and routing", "Automated onboarding and document collection", "Quote follow-up sequences", "Seasonal campaigns and reminders", "Client retention and referral requests"],
    pipeline: ["New Inquiry", "Qualified", "Consultation Booked", "Proposal Sent", "Engaged", "Onboarded", "Retained"],
    before: "Onboarding is manual every time. Quotes go unanswered. The pipeline dries up between seasons.",
    after: "Inquiries are qualified, onboarding runs itself, and seasonal campaigns keep the pipeline warm all year.",
    faqs: [
      { q: "Can it automate onboarding?", a: "Yes. Forms, document requests and welcome sequences run automatically, with your team in control." },
      { q: "Does it work for small firms?", a: "Yes. The system is built around your services and your capacity — not a template for a big firm." },
      { q: "What happens during the free audit?", a: "We check your ads, reply speed, onboarding flow and follow-up, and show you the leaks." },
    ],
  },
  {
    slug: "other", icon: Briefcase, name: "Other Service Businesses", group: "All Services", headline: "If You Serve Customers, This System Fits Your Business.", sub: "For any appointment-based or service business not listed above. The system is built around how your business actually works — not a generic template.",
    image: "/images/industries/other.jpg", keyword: "service business marketing agency",
    problems: [
      { title: "Leads arrive, then disappear", example: "Inquiries come from ads, social and referrals — and land in different places.", consequence: "No one knows who was replied to and who was forgotten." },
      { title: "Booking takes too long", example: "A customer has to call, wait, and call again to book.", consequence: "They book with the business that made it easy." },
      { title: "No repeat business system", example: "Happy customers leave and are never invited back.", consequence: "You keep paying to find new customers." },
    ],
    solutions: ["Lead capture from every channel into one CRM", "AI answering and qualification", "Booking with reminders", "Automated follow-up and rebooking", "Review requests after every job"],
    pipeline: ["New Inquiry", "Qualified", "Booked", "Delivered", "Follow-Up", "Review", "Repeat"],
    before: "Leads are scattered. Booking is slow. Repeat business is left to chance.",
    after: "Every lead lands in one place, is answered fast, is booked with reminders, and is invited back.",
    faqs: [
      { q: "My business is not listed. Can you still help?", a: "Yes. Tell us how your business works on the free audit, and we design the system around it." },
      { q: "Do I need all six services?", a: "No. We build the combination your business needs — nothing more." },
      { q: "What happens during the free audit?", a: "We check your ads, reply speed, booking and follow-up, and show you where leads leak." },
    ],
  },
];

export type Solution = {
  slug: string; name: string; headline: string; sub: string; icon: LucideIcon;
  problem: string; what: string; how: string[];
  industries: string[]; uses: string[]; integrations: string[];
  faqs: { q: string; a: string }[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "paid-advertising", icon: Megaphone, name: "Paid Advertising", headline: "Ads That Bring Enquiries, Not Just Clicks.", sub: "Meta Ads and Google Ads, aimed at people in your city who need you now — connected to a landing page and follow-up, so the click becomes a customer.",
    problem: "You pay for clicks. No one replies fast. The lead goes to the next business.",
    what: "Service-specific campaigns on Meta and Google, with local targeting, a dedicated landing page, and lead tracking from click to booking.",
    how: ["We find the audience that needs your service now", "We build the campaign and the landing page together", "Every lead lands in your CRM with its source tagged", "Follow-up starts in minutes, not days"],
    industries: ["HVAC", "Salons & Spas", "Dental & Healthcare", "Real Estate", "Home Services", "Automotive"],
    uses: ["Emergency HVAC calls in a heatwave", "Salon bookings before a holiday weekend", "Dental check-up campaigns in a new area"],
    integrations: ["Meta Ads", "Google Ads", "Landing pages", "CRM", "Call tracking"],
    faqs: [
      { q: "Do you run ads without follow-up?", a: "No. We never run ads alone. Every campaign is connected to a landing page, an AI answer and follow-up." },
      { q: "How do I know what the ads brought in?", a: "Every lead is tagged by source in your CRM, so you see which campaign booked the job." },
      { q: "What happens during the free audit?", a: "We review your current ads, if any, and show you where the spend is leaking." },
    ],
  },
  {
    slug: "websites-funnels", icon: Globe, name: "Websites & Sales Funnels", headline: "A Fast Website That Turns Clicks into Bookings.", sub: "Business websites, landing pages and lead capture funnels — mobile-first, fast, and built to book, not just to look good.",
    problem: "Slow website, no clear booking button, visitor leaves in seconds.",
    what: "A fast website with a clear headline, one booking form, and pages built for Google and for people who are ready to book.",
    how: ["We map the journey from ad click to booking", "We build the pages around that journey", "Forms connect to your CRM automatically", "We test on mobile first, then desktop"],
    industries: ["HVAC", "Salons & Spas", "Real Estate", "Gyms & Fitness", "Education", "Coaches & Consultants"],
    uses: ["A booking page for a salon's busiest service", "A landing page for an HVAC emergency offer", "A course enrolment funnel"],
    integrations: ["Next.js", "CRM", "Booking systems", "Google Business Profile", "Analytics"],
    faqs: [
      { q: "Can I keep my existing website?", a: "Yes. We can work with it, or rebuild the pages that lose leads. The audit shows which is better." },
      { q: "Will my site rank on Google?", a: "We build SEO foundations into every page — fast load, clear headings, local keywords — and the audit shows your current gaps." },
      { q: "How long does a website take?", a: "It depends on scope. The free audit gives you a written plan and timeline before any build starts." },
    ],
  },
  {
    slug: "conversation-ai-agent", icon: MessageCircle, name: "Conversation AI Agent", headline: "An AI Agent That Answers Every Message. 24/7.", sub: "A chat agent that answers messages, qualifies leads and books appointments — on your website, WhatsApp, SMS, email, Facebook, Instagram and Threads — and hands over to your team whenever it should.",
    problem: "A lead messages at 9pm. No one is there. The lead books with someone else.",
    what: "One AI agent on your website, WhatsApp, SMS, email, Facebook, Instagram and Threads that answers, qualifies and books — in your business name, with a full log of every conversation.",
    how: ["We train it on your services, prices and FAQs", "It answers, qualifies and books the appointment", "It hands over to a human when the question needs one", "Every chat and message is logged in your CRM"],
    industries: ["HVAC", "Dental & Healthcare", "Salons & Spas", "Real Estate", "Home Services", "Legal"],
    uses: ["Booking a salon appointment from Instagram DMs", "Qualifying a property buyer over WhatsApp", "Answering service questions on your website chat"],
    integrations: ["Website chat", "WhatsApp", "SMS", "Email", "Facebook", "Instagram", "Threads", "CRM", "Calendar"],
    faqs: [
      { q: "Will customers know it is AI?", a: "Yes. It introduces itself as your business's AI assistant. It never pretends to be a person." },
      { q: "Can it hand over to my team?", a: "Yes. At any point it can hand the conversation to a human, with the full history attached." },
      { q: "Do you guarantee response times?", a: "No. We do not guarantee performance that has not been tested. We measure it after launch and show you the real numbers." },
    ],
  },
  {
    slug: "calling-ai-agent", icon: PhoneCall, name: "Calling AI Agent", headline: "An AI Voice Receptionist That Answers Every Call. 24/7.", sub: "A voice agent that answers phone calls in your business name, talks to the caller, asks the right questions, qualifies them and books the appointment — day or night, and hands over to your team whenever it should.",
    problem: "The phone rings while your team is busy, after hours, or on a job. No one answers. The caller tries the next business.",
    what: "An AI voice receptionist on your business phone line that answers every call, takes the details, checks if it is urgent, qualifies the caller and books the appointment — with a full log of every call.",
    how: ["We train it on your services, prices and FAQs", "It answers in your business name and takes the caller's details", "It asks if it is urgent and qualifies the caller", "It books the appointment and logs the call in your CRM"],
    industries: ["HVAC", "Dental & Healthcare", "Salons & Spas", "Real Estate", "Home Services", "Legal"],
    uses: ["Answering an emergency HVAC call at night", "Taking a booking call while the team is on a job", "Qualifying a new patient before the front desk calls back"],
    integrations: ["Phone", "Calendar", "CRM", "SMS reminders"],
    faqs: [
      { q: "Will callers know it is AI?", a: "Yes. It introduces itself as your business's AI assistant. It never pretends to be a person." },
      { q: "What if it is a real emergency?", a: "It asks if the call is urgent and follows the rules you set — including handing over or routing urgent calls to your team." },
      { q: "Can it hand over to my team?", a: "Yes. At any point it can hand the call to a human, with the details it has already taken." },
    ],
  },
  {
    slug: "crm-sales-automation", icon: KanbanSquare, name: "CRM & Sales Automation", headline: "Every Lead in One Place. Nothing Lost.", sub: "A CRM built around how your business actually sells — pipelines, contact records, assignment, tasks and reporting, without manual entry.",
    problem: "Leads live in your phone, email, Instagram and paper. No one knows who replied.",
    what: "One pipeline for your whole sales process. Every lead, every reply, every booking — in one place, moving itself.",
    how: ["We map your real sales process", "We build the pipeline around it", "Leads are assigned and followed up automatically", "You see what is booked, what is lost, and why"],
    industries: ["HVAC", "Real Estate", "Coaches & Consultants", "Education", "Home Services", "Legal"],
    uses: ["An HVAC pipeline from inquiry to completed job", "A real estate pipeline from lead to closed sale", "A coaching pipeline from inquiry to onboarded client"],
    integrations: ["Forms", "Ads", "Calendar", "Email", "Phone", "Reporting dashboards"],
    faqs: [
      { q: "Do I need to learn new software?", a: "No. We build it around your process and show your team how to use it. To your clients, it is simply AZEDOR's system." },
      { q: "Can it work with my existing CRM?", a: "Yes. We can integrate with what you have, or move you to a cleaner setup — the audit shows which fits." },
      { q: "What do I see in the reports?", a: "Leads by source, reply speed, bookings, no-shows and where leads are lost — not vanity numbers." },
    ],
  },
  {
    slug: "business-process-automation", icon: Workflow, name: "Business Process Automation", headline: "Follow-Up That Happens on Its Own.", sub: "Automated onboarding, task routing, email and SMS workflows, integrations and data sync — the repetitive admin work, done without a person touching it.",
    problem: "You meant to follow up. The day ran away. The lead went cold.",
    what: "Workflows that move work forward on their own: onboarding, reminders, no-show rescue, rebooking, reactivation and internal task routing.",
    how: ["We find the repetitive tasks in your business", "We automate them one at a time, with human review", "We connect the software you already pay for", "We test with you before anything goes live"],
    industries: ["HVAC", "Dental & Healthcare", "Education", "Gyms & Fitness", "Accounting", "Home Services"],
    uses: ["Onboarding a new coaching client automatically", "Reminding a dental patient before their appointment", "Reactivating gym members who stopped coming"],
    integrations: ["n8n", "CRM", "Email", "Calendar", "Payment tools", "Spreadsheets"],
    faqs: [
      { q: "Will automation replace my team?", a: "No. It removes repetitive admin so your team spends time on customers, not paperwork." },
      { q: "What if an automation breaks?", a: "We test before go-live, and we monitor and fix what we built." },
      { q: "Can it connect my existing software?", a: "Yes. Integrations are part of the design — we connect the tools you already use." },
    ],
  },
  {
    slug: "reputation-management", icon: Star, name: "Reputation Management", headline: "More 5-Star Reviews, Without Chasing Them.", sub: "Genuine review requests at the right moment, review monitoring and response help — never fake reviews, never review gating.",
    problem: "Happy client, no review. A new client checks Google and picks the business with 200 reviews.",
    what: "After the job, we ask for a review at the right time, with one easy link. We monitor reviews and help you respond.",
    how: ["We ask after a completed job, not before", "The request goes to every customer, not only happy ones", "Reviews are monitored in one place", "You get help replying, good or bad"],
    industries: ["Salons & Spas", "HVAC", "Dental & Healthcare", "Automotive", "Home Services", "Gyms & Fitness"],
    uses: ["Asking for a review after a completed HVAC job", "Review requests after a salon visit", "Follow-up after a gym trial"],
    integrations: ["Google Business Profile", "CRM", "Email", "SMS where the client consents"],
    faqs: [
      { q: "Do you only ask happy customers for reviews?", a: "No. We never do review gating or selective solicitation. Every customer gets the same request." },
      { q: "Do you write fake reviews?", a: "Never. Only genuine reviews from real customers." },
      { q: "What if we get a bad review?", a: "We help you respond professionally and fix the underlying issue, so the next review is better." },
    ],
  },
];

export type JourneyStep = { stage: string; purpose: string; solution: string; detail: string; color: string; text: string; leak: string; icon: string };

/** One colour per stage — the funnel and journey read as a coloured flow. */
export const JOURNEY: JourneyStep[] = [
  { stage: "Attract", icon: "Magnet", purpose: "Get found by people who need you", solution: "Paid Advertising", detail: "Meta and Google Ads aimed at your city and your service.", color: "#F59E0B", text: "#101211", leak: "Without it: nobody finds you." },
  { stage: "Capture", icon: "MousePointerClick", purpose: "Turn a click into a lead", solution: "Websites & Sales Funnels", detail: "A fast page with one clear form — no friction, no confusion.", color: "#0EA5E9", text: "#101211", leak: "Without it: the click leaves." },
  { stage: "Engage", icon: "PhoneCall", purpose: "Answer fast, qualify, build trust", solution: "Conversation & Calling AI Agents", detail: "AI agents answer calls and messages on your website, WhatsApp, SMS, email, Facebook, Instagram and Threads, 24/7, and hand over when needed.", color: "#14B8A6", text: "#101211", leak: "Without it: missed calls, slow replies." },
  { stage: "Convert", icon: "ClipboardCheck", purpose: "Book the appointment", solution: "CRM & Sales Automation", detail: "The lead is qualified, assigned and booked — in one pipeline.", color: "#C3F75D", text: "#101211", leak: "Without it: quotes sent, never followed up." },
  { stage: "Deliver", icon: "Workflow", purpose: "Do the job, on time", solution: "Business Process Automation", detail: "Reminders, scheduling and admin run in the background.", color: "#8B7CF6", text: "#FFFFFF", leak: "Without it: no reminder, no repeat job." },
  { stage: "Retain", icon: "HeartHandshake", purpose: "Bring them back, get the review", solution: "Reputation Management", detail: "A review request after the job, and a rebooking invite at the right time.", color: "#FB7185", text: "#101211", leak: "Without it: customers drift away, no reviews." },
];

/** Every channel the AZEDOR AI agent answers on — one agent, one log, every message. */
export type AiChannel = { name: string; icon: LucideIcon; line: string };
export const AI_CHANNELS: AiChannel[] = [
  { name: "Website chat", icon: Globe, line: "Answers visitors on your website, qualifies them and books the appointment." },
  { name: "WhatsApp", icon: MessageCircle, line: "Replies to WhatsApp messages, answers questions and books the appointment." },
  { name: "SMS", icon: MessageSquare, line: "Replies to text messages, follows up and sends the booking link." },
  { name: "Email", icon: Mail, line: "Answers emails, qualifies the enquiry and books the appointment." },
  { name: "Facebook", icon: ThumbsUp, line: "Replies to Facebook messages, qualifies the enquiry and books the appointment." },
  { name: "Instagram", icon: Camera, line: "Replies to Instagram DMs, answers questions and books the appointment." },
  { name: "Threads", icon: AtSign, line: "Replies on Threads, answers questions and sends the booking link." },
];

/** One accent colour per industry group — used on cards, heroes and diagrams. */
export const GROUP_ACCENT: Record<string, { main: string; soft: string; dark: string }> = {
  "Home & Trades": { main: "#F59E0B", soft: "#FFF8E6", dark: "#B45309" },
  "Beauty & Wellness": { main: "#FB7185", soft: "#FFF0F3", dark: "#BE123C" },
  "Health": { main: "#14B8A6", soft: "#E6F7F4", dark: "#0F766E" },
  "Property": { main: "#8B7CF6", soft: "#EFEDFD", dark: "#5B21B6" },
  "Vehicles": { main: "#0EA5E9", soft: "#E8F4FD", dark: "#0369A1" },
  "Health & Fitness": { main: "#10B981", soft: "#E7F8F1", dark: "#047857" },
  "Professional": { main: "#7C6FF0", soft: "#EFEDFD", dark: "#4C1D95" },
  "Learning": { main: "#0EA5E9", soft: "#E8F4FD", dark: "#0369A1" },
  "All Services": { main: "#C3F75D", soft: "#F4FBEA", dark: "#3F6212" },
};

export const NAV_INDUSTRIES = [
  { group: "Home & Trades", items: [{ slug: "hvac", name: "HVAC" }, { slug: "home-services", name: "Home Services & Contractors" }, { slug: "cleaning", name: "Cleaning Businesses" }] },
  { group: "Beauty & Wellness", items: [{ slug: "salons-spas", name: "Salons & Spas" }, { slug: "beauty-aesthetics", name: "Beauty & Aesthetics" }, { slug: "gyms-fitness", name: "Gyms & Fitness" }] },
  { group: "Health & Property", items: [{ slug: "dental-healthcare", name: "Dental & Healthcare" }, { slug: "real-estate", name: "Real Estate" }, { slug: "automotive", name: "Automotive Services" }] },
  { group: "Professional & Learning", items: [{ slug: "coaches-consultants", name: "Coaches & Consultants" }, { slug: "education-training", name: "Education & Training" }, { slug: "legal", name: "Legal & Professional" }, { slug: "accounting", name: "Accounting & Professional" }, { slug: "other", name: "Other Service Businesses" }] },
];
