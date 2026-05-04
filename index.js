// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(255,255,255,0.98)';
    nav.style.boxShadow = '0 15px 40px rgba(31,41,55,0.08)';
  } else {
    nav.style.background = 'rgba(255,255,255,0.98)';
    nav.style.boxShadow = '0 15px 40px rgba(31,41,55,0.08)';
  }

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTop');
  if (window.scrollY > 400) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

// Mobile menu
function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const slider = document.getElementById('heroSlider');
const slides = slider ? slider.querySelectorAll('.hero-slide') : [];
const dots = document.querySelectorAll('.slider-dot');
let heroSlideIndex = 0;
let heroSlideTimer;

function setHeroSlide(index) {
  if (!slides.length) return;
  slides.forEach((slide, idx) => slide.classList.toggle('active', idx === index));
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === index));
  heroSlideIndex = index;
}

function startHeroSlider() {
  heroSlideTimer = setInterval(() => {
    setHeroSlide((heroSlideIndex + 1) % slides.length);
  }, 4500);
}

function resetHeroSlider() {
  clearInterval(heroSlideTimer);
  startHeroSlider();
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.index, 10);
    setHeroSlide(index);
    resetHeroSlider();
  });
});

startHeroSlider();

// Counter animation
function animateCounters() {
  const stats = document.querySelectorAll('.stat-num');
  stats.forEach(stat => {
    stat.style.transition = 'transform 0.5s';
    stat.style.transform = 'scale(1.15)';
    setTimeout(() => stat.style.transform = 'scale(1)', 500);
  });
}

// Trigger counter on hero visible
const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) animateCounters();
}, { threshold: 0.5 });
heroObserver.observe(document.querySelector('.hero-stats'));

const translations = {
  bn: {
    nav_home: 'হোম',
    nav_about: 'আমাদের সম্পর্কে',
    nav_members: 'মেম্বার',
    nav_services: 'সেবাসমূহ',
    nav_gallery: 'গ্যালারি',
    nav_contact: 'যোগাযোগ',
    nav_emergency: 'জরুরি সেবা',
    nav_donate: 'সহযোগিতা করুন',
    org_name: 'তরুণ প্রয়াস',
    org_tagline: 'মানব কল্যাণ সংস্থা',
    hero_badge: '🌱 তরুণের হাতে পরিবর্তনের সূচনা',
    hero_title: 'তরুণ প্রয়াস',
    hero_subtitle: 'মানব কল্যাণ সংস্থা',
    hero_location: 'শিবনগর, বাঙালিপুর, কোটচাঁদপুর, ঝিনাইদাহ',
    hero_tagline: 'সেবা | সহায়তা | সহযোগিতা | পরিবর্তন<br/><em>"তরুণের শক্তিতে সমাজ বদলাবে"</em>',
    hero_cta_services: 'আমাদের সেবা দেখুন',
    hero_cta_about: 'আরও জানুন',
    stat_families: 'উপকারভোগী পরিবার',
    stat_services: 'সেবা কার্যক্রম',
    stat_volunteers: 'স্বেচ্ছাসেবক',
    about_label: 'আমাদের সম্পর্কে',
    about_title: 'মানবতার জন্য <span>একসাথে</span>',
    about_desc_1: 'তরুণ প্রয়াস মানব কল্যাণ সংস্থা একটি অরাজনৈতিক ও স্বেচ্ছাসেবী মানবকল্যাণমূলক সংগঠন। আমরা সমাজের অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়াতে কাজ করে যাচ্ছি। আমাদের লক্ষ্য — মানবসেবা, শিক্ষা সহায়তা ও সমাজ উন্নয়ন।',
    about_desc_2: 'শিবনগর, বাঙালিপুর, কোটচাঁদপুর, ঝিনাইদাহ থেকে পরিচালিত এই সংগঠনটি তরুণদের উদ্যোগে সমাজের উন্নয়ন ও মানব কল্যাণে নিবেদিত।',
    about_feature_service: 'মানব সেবা',
    about_feature_education: 'শিক্ষা সহায়তা',
    about_feature_environment: 'পরিবেশ সংরক্ষণ',
    about_feature_disaster: 'দুর্যোগ সহায়তা',
    members_label: 'সদস্য',
    members_title: 'আমাদের <span>সদস্যপদ</span>',
    members_desc: 'তরুণ প্রয়াসের সদস্যরা সমাজসেবায় সক্রিয়ভাবে অংশগ্রহণ করেন, সময় দান করেন এবং কমিউনিটি উদ্যোগে নেতৃত্ব দেন।',
    members_registration: 'সদস্য নিবন্ধন',
    members_participation: 'সক্রিয় অংশগ্রহণ',
    members_training: 'স্বেচ্ছাসেবী প্রশিক্ষণ',
    members_leadership: 'কমিউনিটি নেতৃত্ব',
    members_card_registration_title: 'সদস্য নিবন্ধন',
    members_card_registration_desc: 'সহজ অনলাইন ফর্ম পূরণ করে তুমি আমাদের সদস্য হয়ে সমাজে পরিবর্তনের অংশ হতে পারো।',
    members_card_leadership_title: 'কমিউনিটি নেতৃত্ব',
    members_card_leadership_desc: 'তোমার উদ্যোগ নিয়ে স্থানীয় প্রকল্প চালাও, কমিউনিটি নেতৃত্বে তোমার শক্তি প্রকাশ করো।',
    emergency_label: 'জরুরি সেবা',
    emergency_title: 'আমাদের <span>জরুরি সেবা</span>',
    emergency_desc: 'যে কোনো প্রাকৃতিক দুর্যোগ বা জরুরি মানুষের সহায়তায় তরুণ প্রয়াস দ্রুত সহায়তা পৌঁছে দেয়।',
    emergency_relief: 'দুর্যোগ ত্রাণ',
    emergency_health: 'ত্রাণ ও স্বাস্থ্য সহায়তা',
    emergency_food: 'খাদ্য বিতরণ',
    emergency_call: 'জরুরি কল সাপোর্ট',
    services_label: 'সেবাসমূহ',
    services_title: 'আমরা যে সেবা <span>প্রদান করি</span>',
    services_desc: 'সমাজের প্রতিটি স্তরে পৌঁছে দিচ্ছি আমাদের সেবার হাত।',
    service_human: 'মানব সেবা',
    service_human_desc: 'অসহায় ও দুস্থ মানুষদের সরাসরি সহায়তা প্রদান এবং মানবিক সংকটে পাশে থাকা।',
    service_education: 'শিক্ষা সহায়তা',
    service_education_desc: 'মেধাবী কিন্তু অসচ্ছল শিক্ষার্থীদের বৃত্তি, শিক্ষা উপকরণ ও পড়াশোনায় সহযোগিতা।',
    service_environment: 'পরিবেশ সংরক্ষণ',
    service_environment_desc: 'বৃক্ষরোপণ, পরিচ্ছন্নতা অভিযান ও পরিবেশ সচেতনতা কার্যক্রম পরিচালনা।',
    service_blood: 'রক্তদান কর্মসূচি',
    service_blood_desc: 'জরুরি রক্তের প্রয়োজনে দ্রুত সাড়া দেওয়া এবং নিয়মিত রক্তদান ক্যাম্প আয়োজন।',
    service_disaster: 'দুর্যোগ সহায়তা',
    service_disaster_desc: 'বন্যা, ঝড়সহ যেকোনো প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্তদের পাশে তাৎক্ষণিকভাবে দাঁড়ানো।',
    service_food: 'খাদ্য সহায়তা',
    service_food_desc: 'অসহায় পরিবারগুলোতে নিয়মিত খাদ্যসামগ্রী বিতরণ এবং ঈদ-উৎসবে বিশেষ সহায়তা।',
    mission_label: 'আমাদের অঙ্গীকার',
    mission_title: 'আমাদের <span style="color:var(--gold-light)">লক্ষ্য ও উদ্দেশ্য</span>',
    mission_desc: 'তরুণদের সক্রিয় অংশগ্রহণের মাধ্যমে একটি সুন্দর, সুষম ও মানবিক সমাজ গড়ে তোলাই আমাদের মূল লক্ষ্য।',
    mission_quote: '"তরুণের শক্তিতে সমাজ বদলাবে"',
    mission_value_service: 'সেবা',
    mission_value_support: 'সহায়তা',
    mission_value_cooperation: 'সহযোগিতা',
    mission_value_change: 'পরিবর্তন',
    gallery_label: 'গ্যালারি',
    gallery_title: 'আমাদের <span>কার্যক্রমের মুহূর্তসমূহ</span>',
    gallery_relief: 'ত্রাণ বিতরণ কার্যক্রম',
    gallery_tree: 'বৃক্ষরোপণ অভিযান',
    gallery_education: 'শিক্ষা সহায়তা কার্যক্রম',
    gallery_volunteer: 'স্বেচ্ছাসেবক দল',
    gallery_blood: 'রক্তদান কর্মসূচি',
    contact_label: 'যোগাযোগ',
    contact_title: 'আমাদের সাথে <span>যোগাযোগ করুন</span>',
    contact_address_label: 'ঠিকানা',
    contact_address_text: 'শিবনগর, বাঙালিপুর, কোটচাঁদপুর, ঝিনাইদাহ (<a href="https://maps.app.goo.gl/NgXJiAhzKcJTaBTy9" target="_blank">Google Map</a>)',
    contact_map_link: 'Google Map',
    contact_facebook_label: 'ফেসবুক পেজ',
    contact_facebook_name: 'তরুণ প্রয়াস মানব কল্যাণ সংস্থা',
    contact_hours_label: 'কার্যক্রমের সময়',
    contact_hours_text: 'প্রতিদিন সকাল ৯টা – রাত ৯টা',
    contact_registration_label: 'রেজিস্ট্রেশনের জন্য ফর্ম পূরণ করুন?',
    contact_registration_link: 'ফর্ম পূরণ করুন, আমরা যোগাযোগ করব।',
    form_title: '📨 বার্তা পাঠান বা স্বেচ্ছাসেবক হিসেবে যোগ দিন',
    form_name_label: 'আপনার নাম *',
    form_name_placeholder: 'আপনার পূর্ণ নাম লিখুন',
    form_phone_label: 'ফোন নম্বর *',
    form_phone_placeholder: '০১XXXXXXXXX',
    form_subject_label: 'উদ্দেশ্য',
    form_option_volunteer: 'স্বেচ্ছাসেবক হতে চাই',
    form_option_help: 'সহায়তার আবেদন',
    form_option_blood: 'রক্তদান সংক্রান্ত',
    form_option_general: 'সাধারণ যোগাযোগ',
    form_option_donate: 'অনুদান দিতে চাই',
    form_message_label: 'বার্তা',
    form_message_placeholder: 'আপনার বার্তা লিখুন...',
    form_submit: 'বার্তা পাঠান ✉️',
    footer_org_name: 'তরুণ প্রয়াস<br/>মানব কল্যাণ সংস্থা',
    footer_about: 'একটি অরাজনৈতিক ও স্বেচ্ছাসেবী মানবকল্যাণমূলক সংগঠন। তরুণের শক্তিতে সমাজ পরিবর্তনে নিবেদিত।',
    footer_links_label: 'দ্রুত লিংক',
    footer_link_home: '▸ হোম',
    footer_link_about: '▸ আমাদের সম্পর্কে',
    footer_link_services: '▸ সেবাসমূহ',
    footer_link_gallery: '▸ গ্যালারি',
    footer_link_contact: '▸ যোগাযোগ',
    footer_services_label: 'আমাদের সেবা',
    footer_service_human: '▸ মানব সেবা',
    footer_service_education: '▸ শিক্ষা সহায়তা',
    footer_service_environment: '▸ পরিবেশ সংরক্ষণ',
    footer_service_blood: '▸ রক্তদান কর্মসূচি',
    footer_service_disaster: '▸ দুর্যোগ সহায়তা',
    footer_service_food: '▸ খাদ্য সহায়তা',
    footer_copyright: '© ২০২৬ তরুণ প্রয়াস মানব কল্যাণ সংস্থা। সর্বস্বত্ব সংরক্ষিত।',
    footer_address: '📍 শিবনগর, বাঙালিপুর, কোটচাঁদপুর, ঝিনাইদাহ',
    footer_credit: '💻 Developed By Sabbir Ahmed'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_members: 'Members',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_emergency: 'Emergency',
    nav_donate: 'Support Us',
    org_name: 'Tarun Proyash',
    org_tagline: 'Human Welfare Organization',
    hero_badge: '🌱 Change begins with youth',
    hero_title: 'Tarun Proyash',
    hero_subtitle: 'Human Welfare Organization',
    hero_location: 'Shibnagar, Bangalipur, Kotchandpur, Jhenaidah',
    hero_tagline: 'Service | Support | Cooperation | Change<br/><em>"Youth power will change society"</em>',
    hero_cta_services: 'View Our Services',
    hero_cta_about: 'Learn More',
    stat_families: 'Beneficiary Families',
    stat_services: 'Programs',
    stat_volunteers: 'Volunteers',
    about_label: 'About Us',
    about_title: 'Together for <span>humanity</span>',
    about_desc_1: 'Tarun Proyash is a non-political volunteer-based welfare organization. We work to support the helpless and underprivileged, with a focus on human service, education, and community development.',
    about_desc_2: 'Based in Shibnagar, Bangalipur, Kotchandpur, Jhenaidah, our organization is devoted to social progress and welfare through youth-led initiatives.',
    about_feature_service: 'Human Service',
    about_feature_education: 'Education Support',
    about_feature_environment: 'Environmental Protection',
    about_feature_disaster: 'Disaster Relief',
    members_label: 'Members',
    members_title: 'Our <span>Membership</span>',
    members_desc: 'Members of Tarun Proyash actively participate in social service, donate their time, and lead community initiatives.',
    members_registration: 'Membership Registration',
    members_participation: 'Active Participation',
    members_training: 'Volunteer Training',
    members_leadership: 'Community Leadership',
    members_card_registration_title: 'Membership Registration',
    members_card_registration_desc: 'Fill the simple online form to join us and become part of positive change in your community.',
    members_card_leadership_title: 'Community Leadership',
    members_card_leadership_desc: 'Lead local projects with your initiative and help shape stronger community action.',
    emergency_label: 'Emergency Service',
    emergency_title: 'Our <span>Emergency Services</span>',
    emergency_desc: 'Tarun Proyash quickly delivers assistance during natural disasters and urgent human needs.',
    emergency_relief: 'Disaster Relief',
    emergency_health: 'Relief and Health Support',
    emergency_food: 'Food Distribution',
    emergency_call: 'Emergency Call Support',
    services_label: 'Services',
    services_title: 'What <span>we provide</span>',
    services_desc: 'We reach every layer of society with a helping hand.',
    service_human: 'Human Service',
    service_human_desc: 'Providing direct support to vulnerable people and standing by them in humanitarian crises.',
    service_education: 'Education Support',
    service_education_desc: 'Supporting talented but underprivileged students with scholarships, materials, and study assistance.',
    service_environment: 'Environmental Protection',
    service_environment_desc: 'Organizing tree planting, clean-up drives, and awareness campaigns.',
    service_blood: 'Blood Donation Campaign',
    service_blood_desc: 'Responding quickly to urgent blood needs and organizing regular donation camps.',
    service_disaster: 'Disaster Assistance',
    service_disaster_desc: 'Standing by those affected by floods, storms, and other natural disasters.',
    service_food: 'Food Assistance',
    service_food_desc: 'Delivering regular food supplies to needy families and special support during festivals.',
    mission_label: 'Our Commitment',
    mission_title: 'Our <span style="color:var(--gold-light)">Goals and Purpose</span>',
    mission_desc: 'Our main goal is to build a beautiful, balanced, and humane society through active youth participation.',
    mission_quote: '"Youth power will change society"',
    mission_value_service: 'Service',
    mission_value_support: 'Support',
    mission_value_cooperation: 'Cooperation',
    mission_value_change: 'Change',
    gallery_label: 'Gallery',
    gallery_title: 'Our <span>activity moments</span>',
    gallery_relief: 'Relief distribution activity',
    gallery_tree: 'Tree planting campaign',
    gallery_education: 'Education support activities',
    gallery_volunteer: 'Volunteer team',
    gallery_blood: 'Blood donation campaign',
    contact_label: 'Contact',
    contact_title: 'Get in <span>touch with us</span>',
    contact_address_label: 'Address',
    contact_address_text: 'Shibnagar, Bangalipur, Kotchandpur, Jhenaidah (<a href="https://maps.app.goo.gl/NgXJiAhzKcJTaBTy9" target="_blank">Google Map</a>)',
    contact_map_link: 'Google Map',
    contact_facebook_label: 'Facebook Page',
    contact_facebook_name: 'Tarun Proyash Human Welfare Organization',
    contact_hours_label: 'Working Hours',
    contact_hours_text: 'Daily 9:00 AM – 9:00 PM',
    contact_registration_label: 'Fill the form for registration?',
    contact_registration_link: 'Fill the form and we will contact you.',
    form_title: '📨 Send a message or join as a volunteer',
    form_name_label: 'Your Name *',
    form_name_placeholder: 'Enter your full name',
    form_phone_label: 'Phone Number *',
    form_phone_placeholder: '01XXXXXXXXX',
    form_subject_label: 'Purpose',
    form_option_volunteer: 'I want to volunteer',
    form_option_help: 'Request help',
    form_option_blood: 'Blood donation related',
    form_option_general: 'General inquiry',
    form_option_donate: 'I want to donate',
    form_message_label: 'Message',
    form_message_placeholder: 'Write your message...',
    form_submit: 'Send Message ✉️',
    footer_org_name: 'Tarun Proyash<br/>Human Welfare Organization',
    footer_about: 'A non-political volunteer welfare organization devoted to social change through youth power.',
    footer_links_label: 'Quick Links',
    footer_link_home: '▸ Home',
    footer_link_about: '▸ About Us',
    footer_link_services: '▸ Services',
    footer_link_gallery: '▸ Gallery',
    footer_link_contact: '▸ Contact',
    footer_services_label: 'Our Services',
    footer_service_human: '▸ Human Service',
    footer_service_education: '▸ Education Support',
    footer_service_environment: '▸ Environmental Protection',
    footer_service_blood: '▸ Blood Donation Campaign',
    footer_service_disaster: '▸ Disaster Assistance',
    footer_service_food: '▸ Food Assistance',
    footer_copyright: '© 2026 Tarun Proyash Human Welfare Organization. All rights reserved.',
    footer_address: '📍 Shibnagar, Bangalipur, Kotchandpur, Jhenaidah',
    footer_credit: '💻 Developed By Sabbir Ahmed'
  }
};

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.dataset.i18nAlt;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.alt = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
});

applyTranslations('bn');
