class TerminalWebsite {
    constructor() {
        this.currentDirectory = 'home';
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isAdminMode = false;
        this.config = WEBSITE_CONFIG;
        this.pages = this.initializePages();
        
        this.init();
    }
    
    initializePages() {
        // Convert skills, certifications, and services to HTML lists
        const skillsList = this.config.skills ? this.config.skills.split(', ').map(skill => `    <li>• ${skill.trim()}</li>`).join('\n') : '<li>• No skills listed</li>';
        const certsList = this.config.certifications ? this.config.certifications.split(', ').map(cert => `    <li>• ${cert.trim()}</li>`).join('\n') : '<li>• No certifications listed</li>';
        const servicesList = this.config.services ? this.config.services.split(', ').map(service => `    <li>• ${service.trim()}</li>`).join('\n') : '<li>• No services listed</li>';
        
        const linkedinLink = this.config.linkedinUrl ? `<p>• LinkedIn: <a href="${this.config.linkedinUrl}" target="_blank">${this.config.linkedinUrl}</a></p>` : '';
        const githubLink = this.config.githubUrl ? `<p>• GitHub: <a href="${this.config.githubUrl}" target="_blank">${this.config.githubUrl}</a></p>` : '';
        
        return {
            'home': {
                type: 'directory',
                content: `
<div class="ascii-art">
╔══════════════════════════════════════════════════════════════╗
║  ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██║
║  ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║
║     ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║
║     ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║
║     ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║██║
║     ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚╝
╚══════════════════════════════════════════════════════════════╝
</div>
                <h1>Welcome to ${this.config.siteName}</h1>
                <p>Hi! I'm ${this.config.fullName}, and this is my terminal-style portfolio.</p>
                <p>Navigate through this site using terminal commands to learn more about my work and experience.</p>
                <p>Type 'help' to see available commands, or 'ls' to see available pages.</p>
                `
            },
            'about': {
                type: 'file',
                content: `
                <h1>About ${this.config.firstName}</h1>
                <p>Hello! I'm ${this.config.fullName}, a passionate developer and designer who loves creating innovative digital solutions.</p>
                <p>I specialize in building modern, responsive websites and applications that provide exceptional user experiences.</p>
                
                <h2>Skills & Technologies:</h2>
                <ul>
${skillsList}
                </ul>
                
                <h2>Certifications:</h2>
                <ul>
${certsList}
                </ul>
                
                <p>I'm always learning new technologies and staying up-to-date with the latest industry trends.</p>
                <p>Feel free to explore my portfolio or get in touch to discuss potential collaborations!</p>
                `
            },
            'portfolio': {
                type: 'file',
                content: `
                <h1>${this.config.firstName}'s Portfolio</h1>
                <p>Here are some of my featured projects and work:</p>
                
                <h2>Terminal Website Generator</h2>
                <p>An interactive bash script that generates terminal-style websites like this one.</p>
                <p>Features: Customizable content, admin panel, responsive design</p>
                <p>Technologies: HTML5, CSS3, JavaScript, Bash</p>
                
                <h2>Custom Web Applications</h2>
                <p>Full-stack web applications built with modern frameworks and technologies.</p>
                <p>Features: User authentication, database integration, API development</p>
                <p>Technologies: React, Node.js, MongoDB, Express.js</p>
                
                <h2>E-commerce Solutions</h2>
                <p>Complete online store development with payment processing and inventory management.</p>
                <p>Features: Shopping cart, payment gateway, admin dashboard</p>
                <p>Technologies: WordPress, WooCommerce, Shopify, Stripe API</p>
                
                <h2>UI/UX Design Projects</h2>
                <p>User interface and experience design for web and mobile applications.</p>
                <p>Features: Wireframing, prototyping, user testing, responsive design</p>
                <p>Tools: Figma, Adobe XD, Sketch, InVision</p>
                
                ${githubLink ? `<p>Visit my <a href="${this.config.githubUrl}" target="_blank">GitHub</a> to see more projects and code samples!</p>` : ''}
                `
            },
            'contact': {
                type: 'file',
                content: `
                <h1>Contact ${this.config.firstName}</h1>
                <p>I'd love to hear from you! Get in touch using the form below or through other channels:</p>
                
                <div class="terminal-form">
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                
                <h2>Other Ways to Reach Me:</h2>
                <p>• Email: <a href="mailto:${this.config.email}">${this.config.email}</a></p>
                ${linkedinLink}
                ${githubLink}
                `
            },
            'services': {
                type: 'file',
                content: `
                <h1>Services by ${this.config.firstName}</h1>
                <p>Here's how I can help bring your ideas to life:</p>
                
                <h2>Available Services:</h2>
                <ul>
${servicesList}
                </ul>
                
                <h2>Why Choose Me?</h2>
                <ul>
                    <li>• Professional and reliable service</li>
                    <li>• Modern, cutting-edge technologies</li>
                    <li>• Responsive and mobile-first design</li>
                    <li>• SEO optimized solutions</li>
                    <li>• Ongoing support and maintenance</li>
                    <li>• Competitive pricing</li>
                </ul>
                
                <p>Ready to start your project? Use 'cd contact' to get in touch and discuss your requirements!</p>
                `
            }
        };
    }
    
    init() {
        this.terminalInput = document.getElementById('terminal-input');
        this.terminalOutput = document.getElementById('terminal-output');
        
        this.terminalInput.addEventListener('keydown', (e) => this.handleKeyDown(e));
        this.terminalInput.focus();
        
        // Keep focus on input
        document.addEventListener('click', () => {
            this.terminalInput.focus();
        });
        
        // Update prompt with user's name
        document.querySelector('.prompt').textContent = `${this.config.firstName.toLowerCase()}@terminal:~$ `;
        
        // Initialize with home directory content
        this.showPage('home');
    }
    
    handleKeyDown(e) {
        if (e.key === 'Enter') {
            const command = this.terminalInput.value.trim();
            if (command) {
                this.commandHistory.push(command);
                this.historyIndex = this.commandHistory.length;
                this.executeCommand(command);
            }
            this.terminalInput.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.terminalInput.value = this.commandHistory[this.historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
                this.terminalInput.value = this.commandHistory[this.historyIndex];
            } else {
                this.historyIndex = this.commandHistory.length;
                this.terminalInput.value = '';
            }
        }
    }
    
    executeCommand(command) {
        this.addOutput(`${this.config.firstName.toLowerCase()}@terminal:~$ ${command}`);
        
        const parts = command.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);
        
        switch (cmd) {
            case 'ls':
                this.listDirectory();
                break;
            case 'cd':
                this.changeDirectory(args[0]);
                break;
            case 'pwd':
                this.printWorkingDirectory();
                break;
            case 'cat':
                this.catFile(args[0]);
                break;
            case 'help':
                this.showHelp();
                break;
            case 'clear':
                this.clearTerminal();
                break;
            case 'whoami':
                this.whoami();
                break;
            case 'date':
                this.showDate();
                break;
            case 'admin':
                this.adminCommand(args);
                break;
            case 'sudo':
                if (args[0] === 'admin') {
                    this.adminCommand(args.slice(1));
                } else {
                    this.addOutput(`sudo: ${args[0]}: command not found`, 'error');
                }
                break;
            case 'uname':
                this.showSystemInfo();
                break;
            case 'history':
                this.showHistory();
                break;
            default:
                this.addOutput(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
        }
    }
    
    listDirectory() {
        if (this.currentDirectory === 'home') {
            const pages = Object.keys(this.pages).filter(p => p !== 'home');
            this.addOutput('Available pages:');
            pages.forEach(page => {
                const type = this.pages[page].type === 'directory' ? 'd' : '-';
                this.addOutput(`${type}rwxr-xr-x  1 ${this.config.firstName.toLowerCase()} ${this.config.firstName.toLowerCase()}    ${page}`, 'info');
            });
            if (this.isAdminMode) {
                this.addOutput('drwxr-xr-x  1 admin admin    admin_panel', 'warning');
            }
        } else {
            this.addOutput('No subdirectories available in this location.');
        }
    }
    
    changeDirectory(dir) {
        if (!dir) {
            this.currentDirectory = 'home';
            this.showPage('home');
            this.addOutput('Changed to home directory');
            return;
        }
        
        if (dir === '..' || dir === 'home') {
            this.currentDirectory = 'home';
            this.showPage('home');
            this.addOutput('Changed to home directory');
        } else if (dir === 'admin_panel' && this.isAdminMode) {
            this.showAdminPanel();
        } else if (this.pages[dir]) {
            this.currentDirectory = dir;
            this.showPage(dir);
            this.addOutput(`Changed to ${dir}`);
        } else {
            this.addOutput(`Directory not found: ${dir}`, 'error');
        }
    }
    
    printWorkingDirectory() {
        if (this.isAdminMode && this.currentDirectory === 'admin_panel') {
            this.addOutput(`/home/${this.config.firstName.toLowerCase()}/admin_panel`);
        } else {
            this.addOutput(`/home/${this.config.firstName.toLowerCase()}/${this.currentDirectory}`);
        }
    }
    
    catFile(file) {
        if (!file) {
            this.addOutput('Usage: cat <filename>', 'error');
            return;
        }
        
        if (this.pages[file]) {
            this.showPage(file);
        } else {
            this.addOutput(`File not found: ${file}`, 'error');
        }
    }
    
    showHelp() {
        this.addOutput('Available commands:');
        this.addOutput('  ls            - List directory contents', 'info');
        this.addOutput('  cd <dir>      - Change directory', 'info');
        this.addOutput('  cat <file>    - Display file contents', 'info');
        this.addOutput('  pwd           - Print working directory', 'info');
        this.addOutput('  whoami        - Display current user', 'info');
        this.addOutput('  date          - Display current date/time', 'info');
        this.addOutput('  uname         - Display system information', 'info');
        this.addOutput('  history       - Show command history', 'info');
        this.addOutput('  clear         - Clear terminal screen', 'info');
        this.addOutput('  admin         - Access admin panel (password required)', 'info');
        this.addOutput('  help          - Show this help message', 'info');
        this.addOutput('');
        this.addOutput('Available pages: about, portfolio, contact, services');
        this.addOutput('');
        this.addOutput('Navigation: Use ls to list pages, cd <page> to visit a page');
    }
    
    clearTerminal() {
        this.terminalOutput.innerHTML = '';
    }
    
    whoami() {
        if (this.isAdminMode) {
            this.addOutput(`${this.config.firstName.toLowerCase()} (admin privileges)`, 'warning');
        } else {
            this.addOutput(this.config.firstName.toLowerCase());
        }
    }
    
    showDate() {
        this.addOutput(new Date().toString());
    }
    
    showSystemInfo() {
        this.addOutput(`${this.config.siteName} Terminal v1.0`);
        this.addOutput(`Generated by Terminal Website Generator`);
        this.addOutput(`Owner: ${this.config.fullName}`);
    }
    
    showHistory() {
        this.addOutput('Command history:');
        this.commandHistory.forEach((cmd, index) => {
            this.addOutput(`  ${index + 1}  ${cmd}`, 'info');
        });
    }
    
    adminCommand(args) {
        if (!args.length) {
            this.addOutput('Admin access requires password. Usage: admin <password>', 'warning');
            return;
        }
        
        const password = args.join(' ');
        
        if (password === this.config.adminPass) {
            this.isAdminMode = true;
            this.addOutput('Admin access granted! Welcome back.', 'warning');
            this.addOutput('Additional admin commands available. Type "cd admin_panel" to manage content.', 'warning');
            this.addOutput('Admin session will remain active until page refresh.', 'info');
            
            // Update prompt to show admin status
            document.querySelector('.prompt').textContent = `${this.config.firstName.toLowerCase()}@terminal:~# `;
        } else {
            this.addOutput('Access denied. Invalid password.', 'error');
            // Add a small delay to prevent brute force
            setTimeout(() => {}, 1000);
        }
    }
    
    showAdminPanel() {
        this.currentDirectory = 'admin_panel';
        const adminContent = `
        <div class="admin-panel">
            <h1>🔧 Admin Panel</h1>
            <p>Welcome, ${this.config.fullName}! You have administrative access.</p>
            
            <h2>Quick Actions:</h2>
            <p>• Type 'admin update skills' to update your skills list</p>
            <p>• Type 'admin update services' to update your services</p>
            <p>• Type 'admin update contact' to update contact information</p>
            <p>• Type 'admin update certifications' to update certifications</p>
            <p>• Type 'admin config' to view current configuration</p>
            <p>• Type 'admin backup' to backup current settings</p>
            <p>• Type 'admin help' for all admin commands</p>
            
            <h2>Current Status:</h2>
            <p>• Site Name: ${this.config.siteName}</p>
            <p>• Owner: ${this.config.fullName}</p>
            <p>• Email: ${this.config.email}</p>
            <p>• Skills Count: ${this.config.skills.split(', ').length} skills listed</p>
            <p>• Services Count: ${this.config.services.split(', ').length} services listed</p>
            
            <p class="warning">Note: Changes made here are temporary and will reset on page refresh.</p>
            <p class="info">For permanent changes, regenerate the site with the bash script.</p>
        </div>
        `;
        
        const pageDiv = document.createElement('div');
        pageDiv.className = 'output-line';
        pageDiv.innerHTML = adminContent;
        this.terminalOutput.appendChild(pageDiv);
        this.scrollToBottom();
    }
    
    addOutput(text, className = '') {
        const line = document.createElement('div');
        line.className = `output-line ${className}`;
        line.textContent = text;
        this.terminalOutput.appendChild(line);
        this.scrollToBottom();
    }
    
    showPage(pageName) {
        const page = this.pages[pageName];
        if (page) {
            const pageDiv = document.createElement('div');
            pageDiv.className = 'output-line';
            pageDiv.innerHTML = page.content;
            this.terminalOutput.appendChild(pageDiv);
            
            // Handle contact form if it exists
            const contactForm = pageDiv.querySelector('#contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleContactForm(contactForm);
                });
            }
            
            this.scrollToBottom();
        }
    }
    
    handleContactForm(form) {
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        this.addOutput('');
        this.addOutput(`Thank you, ${name}! Your message has been received.`, 'info');
        this.addOutput('(This is a demo - in a real implementation, this would send an email)', 'warning');
        this.addOutput(`Subject: ${subject}`, 'info');
        this.addOutput(`From: ${email}`, 'info');
        this.addOutput('I\'ll get back to you as soon as possible!', 'info');
        form.reset();
    }
    
    scrollToBottom() {
        this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
    }
}

// Initialize the terminal when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TerminalWebsite();
});
