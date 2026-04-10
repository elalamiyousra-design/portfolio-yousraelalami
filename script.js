// 1. Force la page à commencer toujours du haut (Home) lors de l'actualisation
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};


let typed;

function loadTyped(lang) {

    if (typed) {
        typed.destroy(); // bach ma yb9ach y3awed
    }

    typed = new Typed('.multiple-text', {
        strings: translations[lang].typedTexts,
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadTyped("fr"); // langue par défaut

});


//traduction 
const translations = {
  fr: {
    hello: "Bonjour, je m'appelle",
    name: "Yousra !",
    job:"je suis",
    role: "<span>Développeuse Web</span>",
    intro: "Ingénieure d’État en Informatique Et La Gestion Des Entreprises , Passionnée par le développement web .",
    btn_fr: "Français",
    btn_en: "Anglais",
    btn_ar: "Arabe",
    btn_download: "Télécharger CV",
    nav_home: "Accueil",
    nav_APropose: "À Propos",
    nav_diplome: "Diplômes",
    nav_contact: "Contact",
àPropose: "À propos",
Diplômes: "Diplômes",
Attestations: "Attestations",
Compétences: "Compétences",
Portfolio: "Portfolio",
Contact: "Contact",
btn_download: "Télécharger CV",
presentation: "Présentation",
Langues1: "Langues",
skills: "Compétences personnelles",
passions: "Centres d’intérêt",

text1: "Je suis titulaire d’un diplôme d’Ingénieur d’État en Informatique et Gestion des Entreprises, avec une spécialisation en développement web et mobile. Ma passion pour l’apprentissage et ma curiosité guident mon parcours dans ce domaine. En tant que passionnée, j’aime participer activement aux activités en entreprise ainsi que créer des projets personnels afin de développer et renforcer mes compétences.",

arabe: "Arabe",
Français: "Français",
Anglais: "Anglais",
Allemand: "Allemand",

Voyage: "Voyage",
Sport: "Sport",
Dessin: "Dessin",


  typedTexts: [
      "Développeuse Frontend",
      "Développeuse Backend",
      "Design Graphique",
      "Gestion d'entreprise"
    ]
  },
  en: {
    hello: "Hello, My name is",
    name: "Yousra !",
    job:"And i'm a ",
    role: "<span>Web Developer</span>",
    intro: "State Engineer in Computer Science and Management, passionate APropose web development.",
    btn_fr: "French",
    btn_en: "English",
    btn_ar: "Arabic",
    btn_download: "Download CV",
    nav_home: "home",
    nav_APropose: "APropose",
    nav_diplome: "Diplomas",
    nav_contact: "Contact",
     àPropose:"About",
    Diplômes: "Diplomas",
    Attestations: "Certificates",
    Compétences: "Skills",
    Portfolio: "Portfolio",
    Contact: "Contact",
    btn_download: "Download CV",
    presentation: "Presentation",
    Langues1: "Languages",
    skills:"Soft Skills",
    passions:"Interests",
    text1:"I hold a State Engineering degree in Computer Science and Management, with a focus on specializing in web and mobile development. My passion for learning and curiosity guide my studies in this field. As an enthusiast, I enjoy actively participating in company activities as well as creating personal projects to enhance my skills.",
    arabe: "Arabic", 
    Français: "French",
    Anglais: "English",
    Allemand: "German",
    Voyage: "Traveling",
    Sport: "Sports",
    Dessin: "Drawing",

    
     typedTexts: [
      "Frontend Developer",
      "Backend Developer",
      "Graphic Designer",
      "Business Management"
    ]



  },
  ar: {
    hello: "مرحبا، اسمي",
    name: "يسرى !",
     job:" و أنا",
    role: " <span> مطورة ويب</span>",
    intro: ". مهندسة دولة في الإعلاميات والتسيير، شغوفة بتطوير الويب",
    btn_fr: "الفرنسية",
    btn_en: "الإنجليزية",
    btn_ar: "العربية",
    btn_download: "تحميل السيرة الذاتية",
    nav_home: "الرئيسية",
    nav_APropose: "حول",
    nav_diplome: "الشهادات",
    nav_contact: "اتصل",
    àPropose:"حول",
    Diplômes:"ديبلوم",
Attestations :"الشهادات",

    Compétences:"المهارات",
    Portfolio:"الاعمال",
    Contact:"للتواصل",
    btn_download:"تحميل السيرة الذاتية",
        à_Propose:"حول",
presentation:"مقدمة",
Langues1:"اللغات",
skills:"المهارات الشخصية",
passions:"الاهتمامات",
text1:"أحمل شهادة هندسة حكومية في علوم الحاسوب والإدارة، وأطمح للتخصص في تطوير تطبيقات الويب والهواتف المحمولة. ينبع شغفي بالتعلم وفضولي من رغبتي في الدراسة في هذا المجال. وبصفتي شخصًا شغوفًا، أستمتع بالمشاركة الفعّالة في أنشطة الشركة، بالإضافة إلى إنشاء مشاريع شخصية، بهدف تطوير مهاراتي.",
arabe:"العربية", 
Français:"الفرنسية",
Anglais:"الانجليزية",
Allemand:"الالمانية",
Voyage:"االسفر",
Sport:"الرياضة",
Dessin:" الرسم",
text2:"الذكاء العاطفي: أنا شخص متعاطف وودود ومتفائل دائماً",
text3:"الذكاء العلائقي: روح الفريق، والعمل الدائم على الحفاظ على التعاون الإيجابي",
text4:"الفضول: أستمتع دائماً بتعلم المزيد عن جميع المواضيع",
text5:"الالتزام بالمواعيد وإدارة الوقت بشكل جيد",
text6:"مهارات حل المشكلات: أحب إيجاد أبسط الحلول لتلبية الاحتياجات، سواء بمفردي أو ضمن فريق",

 Diplômess:"ديبلوم",
Diplômesh1:"شهادة هندسية معترف بها من الدولة (مستوى الماجستير)",
Diplômesp:"شهادة هندسية في علوم الحاسوب والإدارة",
Diplômesp11:"كلية الدراسات الهندسية العليا، وجدة",

 Diplômesh2:"دبلوم فني متخصص (شهادة جامعية لمدة سنتين بعد المرحلة الثانوية)",
  Diplômesp2:"دبلوم فني متخصص في تطوير الحاسوب",
   Diplômesp22:"معهد لازاريت للتكنولوجيا التطبيقية (ISTA)، وجدة",


  Diplômesh3:"السنة الأولى في كلية العلوم",
    Diplômesp3:"التخصصات: الفيزياء والكيمياء",
      Diplômesp33:"كلية العلوم بجامعة محمد الأول، وجدة",

        Diplômesh4:"شهادة البكالوريا العلمية",
     Diplômesp4:"شهادة البكالوريا في الفيزياء والكيمياء",
      Diplômesp44:"مدرسة زيتون الثانوية، العيون سيدي ملوك",

      Attestationss:"الشهادات",
      Attestationsp1:"شهادة تدريب Salesforce من المدرسة (EHEI)",
      Attestationsp1:"شهادة تدريب من جاليوس من شركة (GIANTLINK)",
      Attestationsp2:"شهادة تدريب في التصميم الجرافيكي",
      Attestationsp3:"شهادة تدريب SAP من المدرسة (EHEI)",


      Compétencess:"المهارات",
      perso:"الاعمال الشخصية",
      pro:"الاعمال المهنية",
 contacter:"اتصل بي",

     typedTexts: [
      "Frontend Developer",
      "Backend Developer",
      "Graphic Designer",
      "Business Management"
    ]
  },
 de:{

  hello: "Hallo, ich heiße",
name: "Yousra !",
job:" und ich bin",
role: "<span>Webentwicklerin</span>",
intro: "Staatlich geprüfte Ingenieurin für Informatik und Management, mit großer Leidenschaft für Webentwicklung.",
btn_fr: "Französisch",
btn_en: "Englisch",
btn_ar: "Arabisch",
btn_download: "Lebenslauf herunterladen",

nav_home: "Startseite",
nav_APropose: "Über mich",
nav_diplome: "Diplome",
nav_contact: "Kontakt",

àPropose:"Über mich",
Diplômes:"Diplome",
Attestations :"Zertifikate",

Compétences:"Fähigkeiten",
Portfolio:"Portfolio",
Contact:"Kontakt",
btn_download:"Lebenslauf herunterladen",

à_Propose:"Über mich",
presentation:"Präsentation",
Langues1:"Sprachen",
skills:"Persönliche Fähigkeiten",
passions:"Interessen",

text1:"Ich habe einen staatlich anerkannten Ingenieurabschluss in Informatik und Management und möchte mich auf die Entwicklung von Web- und mobilen Anwendungen spezialisieren. Meine Leidenschaft für das Lernen und meine Neugier motivieren mich, mich in diesem Bereich weiterzuentwickeln. Als engagierte Person beteilige ich mich gerne aktiv an Unternehmensaktivitäten und erstelle auch persönliche Projekte, um meine Fähigkeiten zu verbessern.",

arabe:"Arabisch", 
Français:"Französisch",
Anglais:"Englisch",
Allemand:"Deutsch",

Voyage:"Reisen",
Sport:"Sport",
Dessin:"Zeichnen",

text2:"Emotionale Intelligenz: Ich bin eine einfühlsame, freundliche und immer optimistische Person.",
text3:"Soziale Kompetenz: Teamgeist und ständiges Bemühen, eine positive Zusammenarbeit aufrechtzuerhalten.",
text4:"Neugier: Ich lerne immer gerne mehr über verschiedene Themen.",
text5:"Pünktlichkeit und gutes Zeitmanagement.",
text6:"Problemlösungsfähigkeiten: Ich finde gerne einfache Lösungen für Bedürfnisse, sowohl allein als auch im Team.",

Diplômess:"Diplome",

Diplômesh1:"Staatlich anerkannter Ingenieurabschluss (Master-Niveau)",
Diplômesp:"Ingenieurabschluss in Informatik und Management",
Diplômesp11:"Hochschule für Ingenieurwissenschaften, Oujda",

Diplômesh2:"Fachtechniker-Diplom (zweijähriger Hochschulabschluss nach dem Abitur)",
Diplômesp2:"Fachtechniker-Diplom in Informatikentwicklung",
Diplômesp22:"Institut für angewandte Technologie Lazaret (ISTA), Oujda",

Diplômesh3:"Erstes Jahr an der Fakultät für Wissenschaften",
Diplômesp3:"Fachrichtung: Physik und Chemie",
Diplômesp33:"Fakultät für Wissenschaften, Mohammed-I.-Universität, Oujda",

Diplômesh4:"Naturwissenschaftliches Abitur",
Diplômesp4:"Abitur in Physik und Chemie",
Diplômesp44:"Zitoun-Gymnasium, El Aioun Sidi Mellouk",

Attestationss:"Zertifikate",
Attestationsp1:"Salesforce-Zertifikat von der Schule (EHEI)",
Attestationsp1:"Praktikumszertifikat bei Galios von der Firma (GIANTLINK)",
Attestationsp2:"Zertifikat für Ausbildung im Grafikdesign",
Attestationsp3:"SAP-Zertifikat von der Schule (EHEI)",

Compétencess:"Fähigkeiten",
perso:"Persönliche Projekte",
pro:"Berufliche Projekte",
contacter:"Kontaktieren Sie mich",

Attestationsp1:"Salesforce-Zertifikat von der Schule (EHEI)",
Attestationsp2:"Praktikumszertifikat bei Galios von der Firma (GIANTLINK)",
Attestationsp3:"Zertifikat für Ausbildung im Grafikdesign",
Attestationsp4:"SAP-Zertifikat von der Schule (EHEI)",
 }














};
function changeLang(lang){

document.querySelectorAll("[data-i18n]").forEach(el=>{
const key = el.dataset.i18n;

if(translations[lang] && translations[lang][key]){
el.innerHTML = translations[lang][key];
}

});

if(lang==="ar"){
document.documentElement.setAttribute("dir","rtl");
document.body.style.textAlign="right";
}else{
document.documentElement.setAttribute("dir","ltr");
document.body.style.textAlign="left";
}

const langDisplay={
fr:"Fr",
en:"En",
ar:"Ar",
de:"De"
};

document.getElementById("current-lang").innerText=langDisplay[lang];

const cv=document.getElementById("cv-download");

if(!cv) return;

if(lang==="fr") cv.href="CV-fr.pdf";
if(lang==="en") cv.href="cv-en.pdf";
if(lang==="ar") cv.href="cv-ar.pdf";
if(lang==="de") cv.href="CV-allemg.pdf";

}


//la présentation à rester affichée, mais nous n'avons pas correctement lié les autres boutons à leurs contenus respectifs.
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // 1. Fonction pour masquer tout le monde et afficher un seul onglet
    function showTab(tabId) {
        // Cacher tous les contenus et retirer la classe active des boutons
        tabContents.forEach(content => {
            content.classList.remove("active");
            content.style.display = "none"; 
        });
        tabButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Afficher l'onglet cible
        const targetContent = document.getElementById(tabId);
        const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);

        if (targetContent && targetBtn) {
            targetContent.classList.add("active");
            targetContent.style.display = "block";
            targetBtn.classList.add("active");
        }
    }

    // 2. Affichage par défaut (Présentation) au chargement
    showTab('presentation');

    // 3. Écouteur de clic pour chaque bouton
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            showTab(tabId);
        });
    });

    // 4. Rendre la fonction accessible pour le menu "À Propos"
    window.resetTabs = () => {
        showTab('presentation');
    };
});


// Ce script dit à la barre de prendre la largeur définie dans le HTML au survol % deyale les competences
document.querySelectorAll('.skill-item').forEach(item => {
    const bar = item.querySelector('.progress-line span');
    const targetWidth = bar.style.width; // Lit le 90% ou 75%
    
    // On remet à 0 par défaut
    bar.style.width = '0%';
    
    item.addEventListener('mouseenter', () => {
        bar.style.width = targetWidth;
    });
    
    item.addEventListener('mouseleave', () => {
        bar.style.width = '0%';
    });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-item').forEach(item => {
    const bar = item.querySelector('.bar');
    const percent = item.querySelector('.skill-percent');
    const targetWidth = getComputedStyle(bar)
      .getPropertyValue('--target-width');

    bar.style.width = '0%';
    percent.style.opacity = '0';

    item.addEventListener('mouseenter', () => {
      bar.style.width = targetWidth;
      percent.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
      bar.style.width = '0%';
      percent.style.opacity = '0';
    });
  });
});

/*  carte*/
const buttons = document.querySelectorAll(".button-group .btn");
const cards = document.querySelectorAll(".testimonial-item");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Active button styling
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.getAttribute("data-target");

    cards.forEach(card => {
      if (card.getAttribute("data-target") === target) {
        card.style.display = "flex"; // Affiche la carte
      } else {
        card.style.display = "none"; // Cache les autres
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const activeBtn = document.querySelector(".button-group .btn.active");
  activeBtn.click();
});


/*logo*/ 
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // On attend 1 seconde pour l'effet visuel
    setTimeout(() => {
        preloader.classList.add('preloader-hidden');
    }, 300);
});


















// CONTACT FORM EMAILJS

  // 1️⃣ Initialisation
 // Initialisation EmailJS
  emailjs.init("F2k8_HChr8JoxzW-4"); // Ta clé publique EmailJS

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    emailjs.sendForm("service_ja4t3ng", "template_ngwmmeb", form)
      .then(function(response) {
        console.log("SUCCESS", response);
        alert("✅ Message envoyé avec succès ! Merci ");
        form.reset(); // Réinitialise le formulaire
      }, function(error) {
        console.error("FAILED", error);
        alert("❌ Erreur lors de l'envoi. Vérifie la console pour plus de détails.");
      });
  });

function startAutoScroll(vitesse = 4) {
    let scrollInterval = setInterval(() => {
        // 1. Kan-checkiw wach wselna l-akhir dyal l-page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            
            // 2. Fach n-wesslo l-teht, n-habso l-scroll automatique
            clearInterval(scrollInterval);

            // 3. n-tsennaw wahed chwiya (mitalan 500ms) bach l-user i-shouf l-footer
            setTimeout(() => {
                // 4. Terje3 l-section "APropose" (id="APropose" f l-HTML dyalk)
                const aproposeSection = document.getElementById('home');
                if (aproposeSection) {
                    aproposeSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);

        } else {
            // Ila baqi mawselnach l-teht, n-kemmlo l-scroll
            window.scrollBy(0, vitesse);
        }
    }, 10);

    // Stop automatique ila l-user qass l-ecran
    const stopScroll = () => clearInterval(scrollInterval);
    window.addEventListener("mousedown", stopScroll);
    window.addEventListener("wheel", stopScroll);
    window.addEventListener("touchstart", stopScroll);
}
// Tqdri t-lansiha ghir t-tssala l-animation dyal l-preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        startAutoScroll(4); // tqdri tbeddli 1.5 b l-vitesse lli bghiti
    }, 5000); // kat-tsenna 2 swaye3 mn b3d l-load
});
