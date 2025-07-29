// Ultra-Optimized Interactive Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize only essential interactive features
        initTypewriterEffect();
        initInteractiveButtons();
        initNavigationEffects();
        initFormEnhancements();
        initStarSystem(); // Initialize star system
        
        console.log('🎉 Essential features loaded successfully!');
    } catch (error) {
        console.log('JavaScript loaded with basic features');
    }
});

// Ultra-Fast Typewriter Effect for Hero Text
function initTypewriterEffect() {
    const heroText = document.querySelector('.hero h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        heroText.classList.add('typewriter');
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30); // Ultra-fast typing speed
            }
        };
        typeWriter();
    }
}

// Ultra-Simple Interactive Buttons (No delays)
function initInteractiveButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Simple hover effect only
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.02)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        
        // Simple click effect
        button.addEventListener('click', (e) => {
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

// Simple Navigation Effects
function initNavigationEffects() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    
    // Highlight current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#00ff88';
            link.style.textShadow = '0 0 10px rgba(0, 255, 136, 0.5)';
        }
    });
}

// Simple Form Enhancements
function initFormEnhancements() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Message Sent! 🚀';
            submitBtn.style.background = 'linear-gradient(45deg, #00ff88, #00ff88)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = 'linear-gradient(45deg, #00ff88, #00bfff)';
                form.reset();
            }, 2000);
        });
    }
}

// Modal functionality
function showDetails(type) {
    const modal = document.getElementById('details-modal');
    const modalBody = document.getElementById('modal-body');
    
    const details = {
        web: {
            title: '🚀 Web Development',
            content: `
                <h3>Full-Stack Web Development</h3>
                <ul>
                    <li>React.js & Vue.js Frontend</li>
                    <li>Node.js & Python Backend</li>
                    <li>Database Design & Management</li>
                    <li>API Development & Integration</li>
                    <li>Responsive Design & UX</li>
                    <li>Performance Optimization</li>
                </ul>
                <p>Creating modern, scalable web applications that deliver exceptional user experiences.</p>
            `
        },
        mobile: {
            title: '📱 Mobile App Development',
            content: `
                <h3>Cross-Platform Mobile Solutions</h3>
                <ul>
                    <li>React Native Development</li>
                    <li>iOS & Android Apps</li>
                    <li>Progressive Web Apps (PWA)</li>
                    <li>App Store Optimization</li>
                    <li>Push Notifications</li>
                    <li>Offline Functionality</li>
                </ul>
                <p>Building powerful mobile applications that work seamlessly across all devices.</p>
            `
        },
        translation: {
            title: '🌍 Translation Services',
            content: `
                <h3>Professional Tigrinya Translation</h3>
                <ul>
                    <li>Document Translation</li>
                    <li>Website Localization</li>
                    <li>App Interface Translation</li>
                    <li>Cultural Adaptation</li>
                    <li>Quality Assurance</li>
                    <li>Fast Turnaround Times</li>
                </ul>
                <p>Bridging language barriers with accurate, culturally-sensitive translations.</p>
            `
        },
        experience: {
            title: '🎯 Professional Experience',
            content: `
                <h3>5+ Years of Development Excellence (2020-2025)</h3>
                <ul>
                    <li>Senior Full-Stack Developer (2022-2025)</li>
                    <li>Mobile App Developer (2020-2022)</li>
                    <li>Web Developer (2019-2020)</li>
                    <li>Freelance Developer (2018-2019)</li>
                    <li>50+ Successful Projects Completed</li>
                    <li>Client Satisfaction Rate: 98%</li>
                </ul>
                <p>Dedicated to delivering high-quality solutions that exceed client expectations.</p>
            `
        },
        education: {
            title: '🎓 Educational Background',
            content: `
                <h3>Computer Science & Software Engineering</h3>
                <ul>
                    <li>Bachelor's in Computer Science</li>
                    <li>Specialization in Software Engineering</li>
                    <li>Web Development Certification</li>
                    <li>Mobile App Development Course</li>
                    <li>Database Management Systems</li>
                    <li>Continuous Learning & Skill Development</li>
                </ul>
                <p>Committed to staying current with the latest technologies and best practices.</p>
            `
        },
        achievements: {
            title: '🏆 Notable Achievements',
            content: `
                <h3>Recognition & Success Stories</h3>
                <ul>
                    <li>Best Developer Award 2023</li>
                    <li>100+ Happy Clients Worldwide</li>
                    <li>Featured in Tech Magazine</li>
                    <li>Speaker at Developer Conference</li>
                    <li>Open Source Contributor</li>
                    <li>Mentor to Junior Developers</li>
                </ul>
                <p>Proud to have made a positive impact in the tech community.</p>
            `
        }
    };
    
    modalBody.innerHTML = `
        <h2>${details[type].title}</h2>
        ${details[type].content}
        <button class="btn" onclick="closeModal()">Close</button>
    `;
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('details-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Add CSS for modal with better visibility
const style = document.createElement('style');
style.textContent = `
    .modal {
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(5px);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .modal.show {
        opacity: 1;
    }
    
    .modal-content {
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(10px);
        margin: 5% auto;
        padding: 30px;
        border: 2px solid rgba(0, 255, 136, 0.5);
        border-radius: 15px;
        width: 80%;
        max-width: 600px;
        position: relative;
        transform: translateY(-50px);
        transition: transform 0.3s ease;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
    }
    
    .modal.show .modal-content {
        transform: translateY(0);
    }
    
    .close {
        color: #00ff88;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .close:hover {
        color: #00bfff;
        transform: scale(1.2);
    }
    
    .modal-content h2 {
        color: #00ff88;
        margin-bottom: 20px;
        font-size: 2em;
    }
    
    .modal-content h3 {
        color: #00bfff;
        margin-bottom: 15px;
        font-size: 1.5em;
    }
    
    .modal-content ul {
        list-style: none;
        padding: 0;
        margin: 20px 0;
    }
    
    .modal-content li {
        padding: 10px 0;
        border-bottom: 1px solid rgba(0, 255, 136, 0.2);
        position: relative;
        padding-left: 30px;
        color: #ffffff;
        font-size: 1.1em;
    }
    
    .modal-content li::before {
        content: "✓";
        color: #00ff88;
        position: absolute;
        left: 0;
        font-weight: bold;
        font-size: 1.2em;
    }
    
    .modal-content p {
        color: #e0e0e0;
        margin-top: 20px;
        font-style: italic;
        font-size: 1.1em;
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Glowing Golden Stars System
function initStarSystem() {
  const starCount = 12; // Reduced number for central area
  const sizes = ['small', 'medium', 'large'];
  
  for (let i = 0; i < starCount; i++) {
    createStar(sizes[Math.floor(Math.random() * sizes.length)]);
  }
  
  // Create new stars periodically
  setInterval(() => {
    if (document.querySelectorAll('.star').length < 15) {
      createStar(sizes[Math.floor(Math.random() * sizes.length)]);
    }
  }, 4000);
}

function createStar(size) {
  const star = document.createElement('div');
  star.className = `star ${size}`;
  
  // Get the hero section element
  const heroSection = document.querySelector('.hero');
  
  if (heroSection) {
    const heroRect = heroSection.getBoundingClientRect();
    
    // Position only within the hero section boundaries
    const heroX = heroRect.left + Math.random() * heroRect.width;
    const heroY = heroRect.top + Math.random() * heroRect.height;
    
    star.style.left = heroX + 'px';
    star.style.top = heroY + 'px';
  } else {
    // Fallback: position in center area if hero not found
    const centerX = window.innerWidth * 0.3 + Math.random() * (window.innerWidth * 0.4);
    const centerY = window.innerHeight * 0.2 + Math.random() * (window.innerHeight * 0.3);
    
    star.style.left = centerX + 'px';
    star.style.top = centerY + 'px';
  }
  
  // Random delay for animation to create natural blinking pattern
  star.style.animationDelay = Math.random() * 3 + 's, ' + Math.random() * 2 + 's';
  
  document.body.appendChild(star);
  
  // Remove star after some time to prevent too many
  setTimeout(() => {
    if (star.parentNode) {
      star.parentNode.removeChild(star);
    }
  }, 12000 + Math.random() * 8000);
}
