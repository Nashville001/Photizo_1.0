const ICONS = {
  facebook: "./Asset/icons/face.png",
  twitter: "./Asset/icons/x.jpg",
  instagram: "./Asset/icons/2227.jpg",
  website: "./Asset/icons/web.jpg",
};
const LINKS = {
  facebook: "https://web.facebook.com/hgbcinfluencers",
  twitter: "https://x.com/hgbcinfluencers",
  youtube: "https://youtube.com/@hgbcinfluencers",
  instagram: "https://www.instagram.com/businessandinfluenc",
  website: "https://hgbcinfluencers.org/",
};
const share = "./Asset/icons/share.png";
const speakers = [
  {
    name: "Ajalenkoko Taiwo",
    image: "./Asset/images/hgnc.jpg",
    tag: "Lead Pastor HUBC",
    topic:
      "Tapping into the supernatural: Why the eagles fly and the lion roar",
    links: LINKS,
    icon: ICONS,
  },
  {
    name: "Ajalenkoko Taiwo",
    image: "./Asset/images/fadeyi.png",
    tag: "Lead Pastor HUBC",
    topic:
      "Tapping into the supernatural: Why the eagles fly and the lion roar",
    links: LINKS,
    icon: ICONS,
  },
  {
    name: "Ajalenkoko Taiwo",
    image: "./Asset/images/esther.png",
    tag: "Lead Pastor HUBC",
    topic:
      "Tapping into the supernatural: Why the eagles fly and the lion roar",
    links: LINKS,
    icon: ICONS,
  },
  {
    name: "Ajalenkoko Taiwo",
    image: "./Asset/images/gilf.jpg",
    tag: "Lead Pastor HUBC",
    topic:
      "Tapping into the supernatural: Why the eagles fly and the lion roar",
    links: LINKS,
    icon: ICONS,
  },
];
const events = [
  {
    Day: "15",
    Month: "February",
    Year: "2025",
    name: "Photizo, Embracing Change",
    location: "City of Refuge, Under G, Ogbomosho",
    time: "5pm-8pm",
  },
];

const speakerContainer = document.querySelector(".speaker-container");
speakers.forEach((speaker) => {
  const speakerDetail = document.createElement("div");
  speakerDetail.className = "speaker-card";

  speakerDetail.innerHTML = `
    <img src="${speaker.image}" alt="${speaker.name}"
    <div>
    <h2>${speaker.name}</h2>
    <p>${speaker.tag}</p>
    <p>${speaker.topic}</p>
    <div class="links-img">
        ${
          speaker.links.facebook
            ? `<a href="${speaker.links.facebook}" target="_blank"><img src="${speaker.icon.facebook}" alt="Facebook"></a>`
            : ""
        }
        ${
          speaker.links.twitter
            ? `<a href="${speaker.links.twitter}" target="_blank"><img src="${speaker.icon.twitter}" alt="Twitter"></a>`
            : ""
        }
        ${
          speaker.links.instagram
            ? `<a href="${speaker.links.instagram}" target="_blank"><img src="${speaker.icon.instagram}" alt="Instagram"></a>`
            : ""
        }
        ${
          speaker.links.website
            ? `<a href="${speaker.links.website}" target="_blank"><img src="${speaker.icon.website}" alt="Website"></a>`
            : ""
        }
    </div>
    </div>
    `;
  speakerContainer.appendChild(speakerDetail);
});

// const scheduleContainer = document.querySelector(".schedule-container");
// events.forEach((event) => {
//   const schedule = document.createElement("div");
//   schedule.className = "schedule-comp";

//   schedule.innerHTML = `
//             <div class="e-time">
//                 <div>${event.Day}</div>
//                 <div>${event.Month}
//                      ${event.Year}
//                 </div>
//             </div>
//             <div class="e-details">
//                 <div>${event.name}</div>
//                 <div>
//                     <div>${event.location}</div>
//                     <div>${event.time}</div>
//                 </div>
//             </div>
//     `;
//   scheduleContainer.appendChild(schedule);
// });
const teams = [
  {
    title: "Ayanfe Daniel",
    image: "./Asset/images/ayanf.png",
    position: "Digital Marketter, Bybit",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Amusan Samuel",
    image: "./Asset/images/mich.png",
    position: "Pastor, HGBC",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Bobby Fadeyi",
    image: "./Asset/images/fadeyi.png",
    position: "Realtor, Ace",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Hgbc Esther",
    image: "./Asset/images/esther.png",
    position: "HR Manager",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Thrive link",
    image: "./Asset/images/thrive.png",
    position: "Software Engineer, The Thrive",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Ayinla Tumilara",
    image: "./Asset/images/tumilara.png",
    position: "Public Speaker, Spotify",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Hgbc Deborah",
    image: "./Asset/images/team-5.png",
    position: "Content Curator",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Josh Loye",
    image: "./Asset/images/josh.png",
    position: "CEO, Loye's franchise",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
];

const teamContainer = document.querySelector(".team-container");
teams.forEach((team) => {
  const teamDetails = document.createElement("div");
  teamDetails.className = "team-card";

  teamDetails.innerHTML = `
     <img src="${team.image}" alt="${team.title}"
    <div>
    
        <div class="team-content">
             <div class="team-person">
                <h2>${team.title}</h2>
                <p>${team.position}</p>
            </div>
            <div class="social-links">
            <img src="${team.share}">
            <div class="links-icon">
            ${
              team.links.facebook
                ? `<a href="${team.links.facebook}" target="_blank"><img src="${team.icon.facebook}" alt="facebook"></a>`
                : ""
            }
            ${
              team.links.twitter
                ? `<a href="${team.links.twitter}" target="_blank"><img src="${team.icon.twitter}" alt"twitter"></a>`
                : ""
            }
            ${
              team.links.instagram
                ? `<a href="${team.links.instagram}" target="_blank"><img src="${team.icon.instagram}" alt="instagram"></a>`
                : ""
            }
            </div>
            </div>
        </div>
        <div>
    </div>
    </div>
    `;
  teamContainer.appendChild(teamDetails);
});
// console.log(teamDetails);

document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("map-container");

  const mapIframe = document.createElement("iframe");
  mapIframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3729671605174!2d4.263031288808417!3d8.165388951876619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370da637004d75%3A0xcba433a8c5a10ad5!2sHigher%20Ground%20Baptist%20Church!5e0!3m2!1sen!2sng!4v1733245322689!5m2!1sen!2sng";
  mapIframe.width = "300";
  mapIframe.height = "500";
  mapIframe.style.border = "0";
  mapIframe.allowFullscreen = "";
  mapIframe.loading = "lazy";
  mapIframe.referrerPolicy = "no-referrer-when-downgrade";

  // Append the iframe to the map container
  mapContainer.appendChild(mapIframe);
});
// JavaScript to add contact information dynamically
const register = document.querySelector(".btn-1");



const topButton = document.getElementById("backToTop");

// show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

// scroll smoothly to the top when the button is clicked
topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, 5000); // Change every 5 seconds
});

const modalForm = document.getElementById("formModal");
const closeButton = document.getElementById('closeModal')
const btnRegister = document.querySelector(".register-btn");




function openModal () {
  modalForm.style.display = 'block'
}

function closeModal() {
  modalForm.style.display = "none";
}

btnRegister.addEventListener("click",openModal)

register.addEventListener('click', openModal)


closeButton.addEventListener ('click', closeModal)

