// Dark Mode Toggle with Local Storage
const toggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

// Load saved theme from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(savedTheme);
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Save theme preference
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
});

// Navigation Section
const navItems = document.querySelectorAll('.nav-item');
const content = document.getElementById('content');

const sections = {
  about: `
    <div class="section">
      <h2>About Me</h2>
      <p>This is the about section content. Update this paragraph with your personal info.</p>
      <h3>What I Do</h3>
      <div class="two-columns">
        <div class="card">
          <img src="web.jpg" alt="Web Front-end Development Example" onerror="this.src='fallback.jpg';">
          <div class="card-title">Web Front-end Development</div>
        </div>
        <div class="card">
          <img src="ui.jpg" alt="UI/UX Design Example" onerror="this.src='fallback.jpg';">
          <div class="card-title">UI/UX Designing</div>
        </div>
        <div class="card">
          <img src="back.jpg" alt="Back-End Development Example" onerror="this.src='fallback.jpg';">
          <div class="card-title">Back-End Development</div>
        </div>
        <div class="card">
          <img src="flutter.jpg" alt="Flutter App Development Example" onerror="this.src='fallback.jpg';">
          <div class="card-title">Flutter App Development</div>
        </div>
      </div>
    </div>
  `,
  experience: `
    <div class="section">
      <h2>Education</h2>
      <div class="card">Currently taking BSIT</div>
      <div class="card">Add more details about your education here</div>
      <h2>Experience</h2>
      <div class="card">Internship at [Company Name]</div>
      <div class="card">Freelance Web Development</div>
      <div class="card">Other relevant experience</div>
    </div>
  `,
  projects: `
    <div class="section">
      <h2>Projects</h2>
      <div class="card">
        <img src="project1.jpg" alt="Project 1 Example">
        <div class="card-title">Project 1</div>
      </div>
      <div class="card">
        <img src="project2.jpg" alt="Project 2 Example">
        <div class="card-title">Project 2</div>
      </div>
      <div class="card">
        <img src="project3.jpg" alt="Project 3 Example">
        <div class="card-title">Project 3</div>
      </div>
    </div>
  `,
  skills: `
    <div class="section">
      <h2>Skills</h2>
      <div class="card">
        <img src="skill1-logo.png" alt="HTML Logo">
        <div class="card-title">HTML</div>
      </div>
      <div class="card">
        <img src="skill2-logo.png" alt="CSS Logo>
        <div class="card-title">CSS</div>
      </div>
      <div class="card">
        <img src="skill3-logo.png" alt="JavaScript Logo">
        <div class="card-title">JavaScript</div>
      </div>
      <div class="card">
        <img src="skill4-logo.png" alt="React Logo>
        <div class="card-title">React</div>
      </div>
    </div>
  `,
  contact: `
    <div class="section">
      <h2>Contact</h2>
      <p>Contact me at: <a href="mailto:network230206@gmail.com">network230206@gmail.com</a></p>
    </div>
  `
};

// Function to load a specific section
function loadSection(section) {
  const content = document.getElementById('content'); // Ensure you have an element with ID 'content'
  content.innerHTML = sections[section] || '<p>Section not found.</p>';
}

// Example usage
// Call loadSection('about') to dynamically load the 'About Me' section into your page.


navItems.forEach(item => {
  item.addEventListener('click', () => {
    const section = item.dataset.section;
    content.innerHTML = sections[section];
  });
});
