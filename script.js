const modal=document.getElementById("modal"),modalBody=document.getElementById("modalBody");
document.getElementById("year").textContent=new Date().getFullYear();

const doctors={
padmini:{k:"01 / DERMATOLOGY",n:"Dr. Chityala Padmini",q:"MBBS, D.D. · Dermatologist",p:"The supplied Ravi Madhav hospital brochure identifies Dr. Chityala Padmini with dermatology / skin-hospital care.",l:["Dermatology-focused consultation","Skin-related medical concerns","Call to confirm current consultation availability"]},
surendra:{k:"02 / PULMONOLOGY & INTENSIVE CARE",n:"Dr. Chityala Surendra Kumar",q:"MD · Pulmonologist & Intensivist",p:"Supplied hospital material identifies Dr. Chityala Surendra Kumar with pulmonary medicine and also identifies him as Professor of Pulmonary Medicine, ASRAM, Eluru.",l:["Pulmonary / respiratory medicine","Respiratory-focused consultation","Call to confirm current consultation availability"]}
};
const depts={
general:["01 / GENERAL MEDICINE","General Medicine","General medical consultation and continuing care.",["Medical consultation","Continuing care","Call to confirm availability"]],
dermatology:["02 / DERMATOLOGY","Dermatology","Skin and dermatology-focused consultation and care.",["Dermatology consultation","Skin-related medical concerns","Call to confirm availability"]],
pulmonology:["03 / PULMONOLOGY","Pulmonology","Pulmonary medicine and respiratory-focused care.",["Respiratory consultation","Pulmonary medicine","Call to confirm availability"]],
emergency:["04 / EMERGENCY CARE","Emergency Care","For urgent medical situations, contact the hospital directly.",["Direct hospital phone contact","Urgent medical enquiry","Call +91 88182 20086"]],
dental:["05 / DENTAL WING","Dental Wing","The supplied hospital information references Sri Ravi Madhav Dental Hospital / dental care.",["Dental consultation enquiry","Ask about current dental services","Call to confirm"]],
inpatient:["06 / INPATIENT CARE","Inpatient Care","Supplied photographs show general ward and patient-room areas. Current admission details should be confirmed directly.",["Patient room / ward information","Admission enquiry","Call before visiting"]]
};
const services={
consultation:["01 / SERVICE","Medical Consultation","General medical consultation and assessment."],
skin:["02 / SERVICE","Skin & Dermatology Care","Dermatology-focused consultation and skin-related care."],
respiratory:["03 / SERVICE","Respiratory Care","Pulmonary and respiratory-focused care."],
emergency:["04 / SERVICE","Emergency Medical Support","For urgent medical situations, contact the hospital directly."],
inpatient:["05 / SERVICE","Inpatient / Patient Care","Patient rooms and ward areas are shown in the supplied photographs."],
diagnostics:["06 / SERVICE","Diagnostic & Monitoring Support","Historical supplied material references medical equipment and monitoring facilities. Confirm current availability directly."]
};
function show(html){modalBody.innerHTML=html;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function hide(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.addEventListener("click",e=>{
 if(e.target.closest("[data-close]")){hide();return}
 const doctor=e.target.closest("[data-doctor]");
 if(doctor){const d=doctors[doctor.dataset.doctor];show(`<div class="modal-kicker">${d.k}</div><h2>${d.n}</h2><p><strong>${d.q}</strong></p><p>${d.p}</p><ul class="modal-list">${d.l.map(x=>`<li>✓ ${x}</li>`).join("")}</ul><a class="modal-call" href="tel:+919581533399">Call Hospital</a>`);return}
 const dept=e.target.closest("[data-dept]");
 if(dept){const d=depts[dept.dataset.dept];show(`<div class="modal-kicker">${d[0]}</div><h2>${d[1]}</h2><p>${d[2]}</p><ul class="modal-list">${d[3].map(x=>`<li>✓ ${x}</li>`).join("")}</ul><a class="modal-call" href="tel:+919581533399">Call Hospital</a>`);return}
 const service=e.target.closest("[data-service]");
 if(service){const s=services[service.dataset.service];show(`<div class="modal-kicker">${s[0]}</div><h2>${s[1]}</h2><p>${s[2]}</p><ul class="modal-list"><li>✓ Call to confirm current details</li><li>✓ Send an enquiry through the appointment form</li></ul><a class="modal-call" href="tel:+919581533399">Call Hospital</a>`);return}
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")hide()});
const nav=document.getElementById("mainNav");
document.getElementById("menuBtn").addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll(".filters button").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");
 document.querySelectorAll(".gallery-grid figure").forEach(f=>f.classList.toggle("hide",b.dataset.filter!=="all"&&f.dataset.cat!==b.dataset.filter));
}));

document.querySelectorAll(".gallery-grid figure").forEach(f=>f.addEventListener("click",()=>{
 const img=f.querySelector("img");show(`<div class="modal-kicker">07 / GALLERY</div><h2>${f.querySelector("figcaption").textContent}</h2><img src="${img.src}" alt="${img.alt}" style="width:100%;height:55vh;object-fit:contain;background:#eee8d8;border-radius:10px">`);
}));

document.getElementById("enquiryForm").addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.getElementById("patientName").value.trim(),phone=document.getElementById("patientPhone").value.trim(),dept=document.getElementById("patientDepartment").value,timing=document.getElementById("patientTiming").value.trim(),message=document.getElementById("patientMessage").value.trim();
 const text=`Hello Ravi Madhav Nursing Home,

Name: ${name}
Phone: ${phone}
Department / Requirement: ${dept}
Preferred timing: ${timing||"Not specified"}

Message:
${message}

Please let me know the consultation / availability details.`;
 window.open("https://wa.me/919581533399?text="+encodeURIComponent(text),"_blank");
});
/* =========================================================
   DOCTOR PROFILE INFORMATION
   ========================================================= */

const doctorProfiles = {
  padmini: {
    title: "Dr. Chityala Padmini",
    qualification: "MBBS, D.D. · Dermatologist",
    description: "Dermatology-focused consultation with attention to skin, hair and nail-related medical concerns.",
    points: [
      "Dermatology-focused consultation",
      "Venereology",
      "Skin / Hair / Nails medical cases",
      "Skin-related medical concerns"
    ],
    note: "Call to confirm current consultation availability."
  },

  surendra: {
    title: "Dr. Chityala Surendra Kumar",
    qualification: "MD · Pulmonologist & Intensivist",
    description: "Supplied hospital material identifies Dr. Chityala Surendra Kumar with pulmonary medicine. He also treats General Medical cases, Diabetes / Diabetology and medical emergencies.",
    points: [
      "Respiratory-focused consultation",
      "General Medicine / Diabetology",
      "Diabetes / Diabetology",
      "Emergency Medical Services"
    ],
    note: "Call to confirm current consultation availability."
  }
};


/* =========================================================
   CONSULTATION TIMINGS
   ========================================================= */

const consultationTimings = `
  <div class="profile-timings">
    <h4>Consultation Timings</h4>

    <div class="timing-row">
      <span>Monday – Saturday</span>
      <strong>10:00 AM – 1:00 PM</strong>
    </div>

    <div class="timing-row">
      <span>Evening</span>
      <strong>6:00 PM – 8:00 PM</strong>
    </div>

    <div class="timing-row">
      <span>Sunday</span>
      <strong>10:00 AM – 1:00 PM</strong>
    </div>
  </div>
`;


/* =========================================================
   VIEW PROFILE BUTTONS
   ========================================================= */

document.querySelectorAll("[data-doctor]").forEach(button => {

  button.addEventListener("click", function () {

    const doctorId = this.dataset.doctor;
    const doctor = doctorProfiles[doctorId];

    if (!doctor) return;

    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
      <div class="doctor-profile-modal">

        <div class="profile-label">
          DOCTOR PROFILE
        </div>

        <h2>${doctor.title}</h2>

        <div class="profile-qualification">
          ${doctor.qualification}
        </div>

        <p class="profile-description">
          ${doctor.description}
        </p>

        <div class="profile-points">
          ${doctor.points.map(point => `
            <div class="profile-point">
              <span>✓</span>
              <p>${point}</p>
            </div>
          `).join("")}
        </div>

        ${consultationTimings}

        <div class="profile-note">
          ${doctor.note}
        </div>

        <a
          class="profile-call-button"
          href="tel:+919581533399"
        >
          Call Hospital
          <span>→</span>
        </a>

      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

  });

});


/* =========================================================
   CLOSE MODAL
   ========================================================= */

document.querySelectorAll("[data-close]").forEach(element => {

  element.addEventListener("click", function () {

    const modal = document.getElementById("modal");

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

  });

});


/* =========================================================
   ESC KEY CLOSE
   ========================================================= */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    const modal = document.getElementById("modal");

    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }

  }

});