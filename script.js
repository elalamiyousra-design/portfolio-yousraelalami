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


    // 1. Typed.js Effect
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer','Backend Developer','design graphique','business management'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true
    });
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
    nav_contact: "Contact"
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
    nav_contact: "Contact"
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
    nav_contact: "اتصل"
  }
};

function changeLang(lang) {
    // 1. Votre logique de traduction existante
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 2. Gestion de la direction RTL
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // 3. Mise à jour du texte dans le bouton dropdown
    const langDisplay = { 'fr': 'Fr', 'en': 'En', 'ar': 'Ar' };
    document.getElementById("current-lang").innerText = langDisplay[lang];
}
// Initialisation par défaut
changeLang("fr");


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
    }, 1000);
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
