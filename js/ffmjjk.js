const collegesByCity = {
  delhi: ["NSUT", "GB Pant", "NIT Delhi", "GTBIT", "TBD"],
  mumbai: ["SIES", "ICT Manzar", "LS Raheja", "Pillai", "Bharati Vidyapeeth"]
};

// Backend API URL - Update this with your deployed backend URL
const BACKEND_API = "http://localhost:3000"; // Change to your deployed URL in production

function updateColleges() {
  const city = document.getElementById("city").value;
  const collegeDropdown = document.getElementById("college");

  collegeDropdown.innerHTML = '<option value="">Select College</option>';

  if (collegesByCity[city]) {
    collegesByCity[city].forEach(college => {
      const option = document.createElement("option");
      option.value = college;
      option.text = college;
      collegeDropdown.add(option);
    });
  }
}


document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  console.log("Form submission started");

  const team_name = document.getElementById("team_name").value;
  const contact_person = document.getElementById("contact_person").value;
  const contact_number = document.getElementById("contact_number").value;
  const contact_email = document.getElementById("contact_email").value;
  const city = document.getElementById("city").value;
  const college = document.getElementById("college").value;
  const p1_name = document.getElementById("p1_name").value;
  const p1_email = document.getElementById("p1_email").value;
  const p1_contact = document.getElementById("p1_contact").value;
  const p1_uid = document.getElementById("p1_uid").value;
  const p2_name = document.getElementById("p2_name").value;
  const p2_email = document.getElementById("p2_email").value;
  const p2_contact = document.getElementById("p2_contact").value;
  const p2_uid = document.getElementById("p2_uid").value;
  const p3_name = document.getElementById("p3_name").value;
  const p3_email = document.getElementById("p3_email").value;
  const p3_contact = document.getElementById("p3_contact").value;
  const p3_uid = document.getElementById("p3_uid").value;
  const p4_name = document.getElementById("p4_name").value;
  const p4_email = document.getElementById("p4_email").value;
  const p4_contact = document.getElementById("p4_contact").value;
  const p4_uid = document.getElementById("p4_uid").value;
  let sub_name = document.getElementById("sub_name").value || "none";
  let sub_email = document.getElementById("sub_email").value || "none";
  let sub_contact = document.getElementById("sub_contact").value || "none";
  let sub_uid = document.getElementById("sub_uid").value || "none";

  if (!city || !college) {
    document.getElementById("message").innerHTML = '<div class="alert alert-danger">Please select city and college</div>';
    return;
  }

  // Show loading message
  document.getElementById("message").innerHTML = '<div class="alert alert-info">Submitting form...</div>';

  // Prepare data for backend
  const formData = {
    team_name: team_name,
    contact_person: contact_person,
    contact_number: contact_number,
    contact_email: contact_email,
    city: city,
    college: college,
    p1_name: p1_name,
    p1_email: p1_email,
    p1_contact: p1_contact,
    p1_uid: p1_uid,
    p2_name: p2_name,
    p2_email: p2_email,
    p2_contact: p2_contact,
    p2_uid: p2_uid,
    p3_name: p3_name,
    p3_email: p3_email,
    p3_contact: p3_contact,
    p3_uid: p3_uid,
    p4_name: p4_name,
    p4_email: p4_email,
    p4_contact: p4_contact,
    p4_uid: p4_uid,
    sub_name: sub_name,
    sub_email: sub_email,
    sub_contact: sub_contact,
    sub_uid: sub_uid
  };

  // Send to backend
  fetch(`${BACKEND_API}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log("Form submitted successfully");
      document.getElementById("message").innerHTML = '<div class="alert alert-success">Registration successful! Thank you for registering.</div>';
      document.getElementById("regForm").reset();
    } else {
      throw new Error("Failed to save data");
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("message").innerHTML = '<div class="alert alert-danger">Failed to submit form. Please try again.</div>';
  });
});