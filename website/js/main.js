// ============================================
// TCI Church Website - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ============================================
    // DATA
    // ============================================
    
    const countries = [
        { name: "Zimbabwe", flag: "🇿🇼", region: "southern-africa", hq: true },
        { name: "South Africa", flag: "🇿🇦", region: "southern-africa" },
        { name: "Mozambique", flag: "🇲🇿", region: "southern-africa" },
        { name: "Zambia", flag: "🇿🇲", region: "southern-africa" },
        { name: "Malawi", flag: "🇲🇼", region: "southern-africa" },
        { name: "DR Congo", flag: "🇨🇩", region: "east-africa" },
        { name: "Eswatini", flag: "🇸🇿", region: "southern-africa" },
        { name: "Lesotho", flag: "🇱🇸", region: "southern-africa" },
        { name: "Namibia", flag: "🇳🇦", region: "southern-africa" },
        { name: "Tanzania", flag: "🇹🇿", region: "east-africa" },
        { name: "Kenya", flag: "🇰🇪", region: "east-africa" },
        { name: "Burundi", flag: "🇧🇮", region: "east-africa" },
        { name: "Rwanda", flag: "🇷🇼", region: "east-africa" },
        { name: "Uganda", flag: "🇺🇬", region: "east-africa" },
        { name: "South Sudan", flag: "🇸🇸", region: "east-africa" },
        { name: "Ghana", flag: "🇬🇭", region: "west-africa" },
        { name: "Nepal", flag: "🇳🇵", region: "asia" },
        { name: "Botswana", flag: "🇧🇼", region: "southern-africa" }
    ];
    
    const events = [
        { title: "AGM 2026", date: "January 31, 2026", type: "meeting", icon: "fa-users" },
        { title: "National Conference", date: "Easter Weekend 2026", type: "conference", icon: "fa-calendar" },
        { title: "Local Council Meeting", date: "First Sunday Monthly", type: "meeting", icon: "fa-handshake" },
        { title: "Pastoral Council", date: "Feb 21, Jun 20, Oct 19", type: "meeting", icon: "fa-user-tie" },
        { title: "TCI Board Meeting", date: "Quarterly", type: "meeting", icon: "fa-building" },
        { title: "Water Baptism", date: "During Conferences", type: "service", icon: "fa-water" }
    ];
    
    const sermons = [
        { title: "The Second Storm", speaker: "Founder & International Bishop", date: "May 4, 2026", duration: "45 min", scripture: "Acts 1:8" },
        { title: "Provincial Onslaughts", speaker: "Founder & International Bishop", date: "Apr 27, 2026", duration: "42 min", scripture: "Matthew 28:19" },
        { title: "The 2x2 Strategy", speaker: "Founder & International Bishop", date: "Apr 20, 2026", duration: "38 min", scripture: "Luke 10:1" },
        { title: "Great Commission Now", speaker: "Founder & International Bishop", date: "Apr 13, 2026", duration: "50 min", scripture: "Mark 16:15" },
        { title: "Decade of Exploits", speaker: "Founder & International Bishop", date: "Apr 6, 2026", duration: "44 min", scripture: "Daniel 11:32" },
        { title: "Everyone, Everyday", speaker: "Founder & International Bishop", date: "Mar 30, 2026", duration: "40 min", scripture: "John 4:35" }
    ];
    
    const testimonies = [
        { name: "Sarah M.", location: "Harare, Zimbabwe", text: "God healed me from a chronic illness after our all-night prayer meeting. The power of prayer in TCI is real!", category: "Healing" },
        { name: "John K.", location: "Lusaka, Zambia", text: "Through the 2x2 Strategy, I led my neighbor to Christ. Now they attend home church every Wednesday!", category: "Salvation" },
        { name: "Grace T.", location: "Nairobi, Kenya", text: "TCI restored my marriage. The pastoral council provided counseling that saved our family.", category: "Restoration" }
    ];
    
    const prayerRequests = [
        { category: "Healing", text: "Praying for complete healing from surgery", private: false },
        { category: "Family", text: "Restoration of relationship with estranged son", private: true },
        { category: "Finances", text: "Provision for National Conference travel", private: false }
    ];
    
    const galleryItems = [
        { title: "Sunday Worship", category: "services", icon: "fa-church" },
        { title: "National Conference 2025", category: "conferences", icon: "fa-users" },
        { title: "Water Baptism", category: "events", icon: "fa-water" },
        { title: "Home Church Gathering", category: "community", icon: "fa-home" },
        { title: "Youth Ministry", category: "community", icon: "fa-child" },
        { title: "Easter Conference Flyer", category: "flyers", icon: "fa-image" },
        { title: "All-Night Prayer", category: "events", icon: "fa-moon" },
        { title: "Community Outreach", category: "community", icon: "fa-hands-helping" }
    ];
    
    // ============================================
    // RENDER FUNCTIONS
    // ============================================
    
    // Render Countries
    const countriesGrid = document.getElementById('countriesGrid');
    if (countriesGrid) {
        countriesGrid.innerHTML = countries.map(c => `
            <div class="country-item" data-region="${c.region}">
                <span class="country-flag">${c.flag}</span>
                <span class="country-name">${c.name} ${c.hq ? '(HQ)' : ''}</span>
            </div>
        `).join('');
    }
    
    // Render Events Preview (Homepage)
    const eventsPreview = document.getElementById('eventsPreview');
    if (eventsPreview) {
        eventsPreview.innerHTML = events.slice(0, 3).map(e => `
            <div class="event-card">
                <div class="event-image"><i class="fas ${e.icon}"></i></div>
                <div class="event-content">
                    <span class="event-date">${e.date}</span>
                    <h3>${e.title}</h3>
                    <p>${e.type.charAt(0).toUpperCase() + e.type.slice(1)}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Render Testimonies Preview (Homepage)
    const testimoniesPreview = document.getElementById('testimoniesPreview');
    if (testimoniesPreview) {
        testimoniesPreview.innerHTML = testimonies.map(t => `
            <div class="testimony-card">
                <p class="testimony-text">"${t.text}"</p>
                <div class="testimony-author">
                    <div class="testimony-avatar"><i class="fas fa-user"></i></div>
                    <div>
                        <div class="testimony-name">${t.name}</div>
                        <div class="testimony-location">${t.location}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Render Approved Testimonies (Testimonies Page)
    const approvedTestimonies = document.getElementById('approvedTestimonies');
    if (approvedTestimonies) {
        approvedTestimonies.innerHTML = testimonies.map(t => `
            <div class="testimony-card">
                <span class="event-date" style="margin-bottom: 1rem; display: inline-block;">${t.category}</span>
                <p class="testimony-text">"${t.text}"</p>
                <div class="testimony-author">
                    <div class="testimony-avatar"><i class="fas fa-user"></i></div>
                    <div>
                        <div class="testimony-name">${t.name}</div>
                        <div class="testimony-location">${t.location}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Render Sermons Grid
    const sermonsGrid = document.getElementById('sermonsGrid');
    if (sermonsGrid) {
        sermonsGrid.innerHTML = sermons.map(s => `
            <div class="sermon-card">
                <div class="sermon-thumb"><i class="fas fa-play-circle"></i></div>
                <div class="sermon-card-content">
                    <span class="event-date">${s.date}</span>
                    <h3>${s.title}</h3>
                    <p><i class="fas fa-user"></i> ${s.speaker} • <i class="fas fa-clock"></i> ${s.duration}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Render Services Events
    const servicesEvents = document.getElementById('servicesEvents');
    if (servicesEvents) {
        const serviceEvents = [
            { title: "Home Churches", desc: "Every Wednesday 18:30-19:30. Quorum: 2 people minimum.", icon: "fa-home" },
            { title: "Sunday Services", desc: "Every Sunday 9:00-11:00 AM. Virtual or Physical.", icon: "fa-church" },
            { title: "National Conference", desc: "Annual during Easter. Water Baptism available.", icon: "fa-calendar" },
            { title: "International Conference", desc: "Every 3 years. All members expected to attend.", icon: "fa-globe" },
            { title: "All-Night Prayer", desc: "At home church, assembly, or national levels.", icon: "fa-moon" },
            { title: "Holy Communion", desc: "During all big Sundays and Conferences.", icon: "fa-wine-glass-alt" }
        ];
        
        servicesEvents.innerHTML = serviceEvents.map(e => `
            <div class="event-card">
                <div class="event-image"><i class="fas ${e.icon}"></i></div>
                <div class="event-content">
                    <h3>${e.title}</h3>
                    <p>${e.desc}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Render Prayer Wall
    const prayerItems = document.getElementById('prayerItems');
    if (prayerItems) {
        prayerItems.innerHTML = prayerRequests.filter(p => !p.private).map(p => `
            <div class="prayer-item">
                <span class="prayer-cat">${p.category}</span>
                <p>${p.text}</p>
            </div>
        `).join('');
    }
    
    // Render Gallery
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
        galleryGrid.innerHTML = galleryItems.map((g, i) => `
            <div class="gallery-item" data-category="${g.category}" data-index="${i}" data-title="${g.title}">
                <i class="fas ${g.icon}"></i>
            </div>
        `).join('');
        
        // Gallery Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                
                document.querySelectorAll('.gallery-item').forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Lightbox
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxCaption = document.getElementById('lightboxCaption');
        let currentIndex = 0;
        
        galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                currentIndex = parseInt(item.dataset.index);
                openLightbox(currentIndex);
            });
        });
        
        function openLightbox(index) {
            const item = galleryItems[index];
            lightboxImg.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="%231a1a2e" width="800" height="600"/><text fill="%23fff" font-family="Arial" font-size="40" x="400" y="300" text-anchor="middle">${item.title}</text></svg>`;
            lightboxCaption.textContent = item.title;
            lightbox.classList.add('active');
        }
        
        document.getElementById('lightboxClose').addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
        
        document.getElementById('lightboxPrev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            openLightbox(currentIndex);
        });
        
        document.getElementById('lightboxNext').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            openLightbox(currentIndex);
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('active');
        });
    }
    
    // Render Locations
    const locationsGrid = document.getElementById('locationsGrid');
    if (locationsGrid) {
        locationsGrid.innerHTML = countries.map(c => `
            <div class="location-card" data-region="${c.region}">
                <div class="country-flag">${c.flag}</div>
                <h3>${c.name}</h3>
                <p>${c.hq ? 'Global Headquarters' : 'TCI Branch'} • Branch info coming soon</p>
                <div class="location-meta">
                    <span><i class="fas fa-map-marker-alt"></i> Map pin TBD</span>
                    <span><i class="fas fa-phone"></i> Contact TBD</span>
                </div>
            </div>
        `).join('');
        
        // Location Search
        const locationSearch = document.getElementById('locationSearch');
        const regionFilter = document.getElementById('regionFilter');
        
        function filterLocations() {
            const search = locationSearch ? locationSearch.value.toLowerCase() : '';
            const region = regionFilter ? regionFilter.value : 'all';
            
            document.querySelectorAll('.location-card').forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                const cardRegion = card.dataset.region;
                const matchesSearch = name.includes(search);
                const matchesRegion = region === 'all' || cardRegion === region;
                
                card.style.display = matchesSearch && matchesRegion ? 'block' : 'none';
            });
        }
        
        if (locationSearch) locationSearch.addEventListener('input', filterLocations);
        if (regionFilter) regionFilter.addEventListener('change', filterLocations);
    }
    
    // ============================================
    // FORMS & INTERACTIVITY
    // ============================================
    
    // Testimony Submission
    const testimonyForm = document.getElementById('testimonyForm');
    const pendingTestimonies = document.getElementById('pendingTestimonies');
    const adminPanel = document.getElementById('adminPanel');
    const toggleAdmin = document.getElementById('toggleAdmin');
    
    let pending = [];
    
    if (testimonyForm) {
        testimonyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newTestimony = {
                id: Date.now(),
                name: document.getElementById('tName').value,
                location: document.getElementById('tLocation').value,
                text: document.getElementById('tContent').value,
                category: document.getElementById('tCategory').value
            };
            
            pending.push(newTestimony);
            updatePendingList();
            testimonyForm.reset();
            alert('Thank you! Your testimony has been submitted for review.');
        });
    }
    
    function updatePendingList() {
        if (!pendingTestimonies) return;
        
        if (pending.length === 0) {
            pendingTestimonies.innerHTML = '<p style="color: #666; font-size: 0.9rem;">No pending testimonies.</p>';
            return;
        }
        
        pendingTestimonies.innerHTML = pending.map(t => `
            <div class="pending-item" data-id="${t.id}">
                <h4>${t.name} • ${t.location}</h4>
                <p>${t.text.substring(0, 100)}...</p>
                <div class="pending-actions">
                    <button class="btn-approve" onclick="approveTestimony(${t.id})">Approve</button>
                    <button class="btn-reject" onclick="rejectTestimony(${t.id})">Reject</button>
                </div>
            </div>
        `).join('');
    }
    
    window.approveTestimony = function(id) {
        const t = pending.find(x => x.id === id);
        if (t) {
            testimonies.push(t);
            pending = pending.filter(x => x.id !== id);
            updatePendingList();
            
            // Refresh approved list
            if (approvedTestimonies) {
                approvedTestimonies.innerHTML = testimonies.map(t => `
                    <div class="testimony-card">
                        <span class="event-date" style="margin-bottom: 1rem; display: inline-block;">${t.category}</span>
                        <p class="testimony-text">"${t.text}"</p>
                        <div class="testimony-author">
                            <div class="testimony-avatar"><i class="fas fa-user"></i></div>
                            <div>
                                <div class="testimony-name">${t.name}</div>
                                <div class="testimony-location">${t.location}</div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }
    };
    
    window.rejectTestimony = function(id) {
        pending = pending.filter(x => x.id !== id);
        updatePendingList();
    };
    
    if (toggleAdmin) {
        toggleAdmin.addEventListener('click', () => {
            if (adminPanel.style.display === 'none') {
                adminPanel.style.display = 'block';
                toggleAdmin.innerHTML = '<i class="fas fa-unlock"></i> Hide Admin Panel';
                updatePendingList();
            } else {
                adminPanel.style.display = 'none';
                toggleAdmin.innerHTML = '<i class="fas fa-lock"></i> Admin Login (Demo)';
            }
        });
    }
    
    // Prayer Form
    const prayerForm = document.getElementById('prayerForm');
    if (prayerForm) {
        prayerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your prayer request has been submitted. Our team will pray for you!');
            prayerForm.reset();
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will respond within 2-3 business days.');
            contactForm.reset();
        });
    }
    
    // Events Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            const target = document.getElementById(tab);
            if (target) target.classList.add('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
});