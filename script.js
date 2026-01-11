document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // 1. Data Structure
    // -------------------------------------------------------------------------

    /**
     * HOW TO ADD A NEW PUBLICATION:
     * 1. Find the appropriate category below (e.g., "Finance & Stock Market Research").
     * 2. Add a new object to the list inside the brackets [ ... ].
     * 3. Texture structure:
     *    {
     *        title: "Exact Title of your Paper",
     *        doi: "DOI Number (optional, set to null if none)",
     *        link: "Link to the paper (URL)"
     *    },
     * 
     * HOW TO ADD A NEW CATEGORY:
     * 1. Add a new key-value pair to the 'publications' object.
     *    "New Category Name": [ ... array of objects ... ]
     */
    const publications = {
        "Finance & Stock Market Research": [
            {
                title: "Dynamic interlinkages among FDI, Remittances and Economic Growth in India: SN Business & Economics - (Scopus Index)",
                doi: "10.1007/s43546-025-01019-y",
                link: "https://link.springer.com/article/10.1007/s43546-025-01019-y",
                dop: "January 2025"
            },
            {
                title: "Assessing the interplay between FDI, Stock Market Performance and Economy growth: A study of prominent European Nation- IJFME",
                doi: "10.33545/26179210.2025.v8.i2.623",
                link: "https://www.theeconomicsjournal.com/archives/2025.v8.i2.623",
                dop: "February 2025"
            },
            {
                title: "Determinants of Stock Price Volatility in Commercial Banks: An Empirical Analysis of the Indian Banking Sector – The Empirical Economic Letters (ABDC Index)",
                doi: "10.5281/zenodo.15160224",
                link: "https://zenodo.org/record/15160224",
                dop: "December 2024"
            },
            {
                title: "Influence of Macroeconomic Indicators on Stock Market Performance of the USA (NYSE Index) and China (SSE Index) – The Empirical Economic Letters (ABDC Index)",
                doi: "10.5281/zenodo.13756072",
                link: "https://zenodo.org/record/13756072",
                dop: "December 2024"
            },
            {
                title: "Impact of GDP, Inflation, and Interest Rate on Stock Market Performance of the United States: A Case Study of NYSE Index – Annual Research Journal of SCMS Pune",
                doi: null,
                link: "https://www.researchgate.net/publication/386094815_IMPACT_OF_GDP_INFLATION_AND_INTEREST_RATE_ON_STOCK_MARKET_PERFORMANCE_OF_UNITED_STATES_A_CASE_STUDY_OF_NYSE_INDEX"
            },
            {
                title: "Impact of GDP and Inflation on Stock Market in India: A Case Study of BSE Index - BMC Journal of Scientific Research",
                doi: "10.3126/bmcjsr.v6i1.60961",
                link: "https://www.nepjol.info/index.php/bmcjsr/article/view/60961"
            },
            {
                title: "Impact of GDP and Inflation on Stock Market Performance in Nepal and Sri Lanka: A Comparative Study of NEPSE and CSE Index – OCEM Journal of Management, Technology and Science",
                doi: "10.3126/ocemjmtss.v3i1.62228",
                link: "https://www.nepjol.info/index.php/ocemjmtss/article/view/62228"
            },
            {
                title: "Exploring Macroeconomic Indicators’ Influence on Capital Market Performance: A Cross-BRICS Analysis – Journal of Informatics Education and Research",
                doi: "10.52783/jier.v4i2.862",
                link: "https://jier.org/index.php/journal/article/view/862"
            },
            {
                title: "Analyzing the Interplay Between Economic Growth Rate, GDP Per Capita, and Stock Market Performance in India: A Case Study of the BSE Index – International Journal for Multidisciplinary Research",
                doi: "10.36948/ijfmr.2024.v06i03.19617",
                link: "https://www.ijfmr.com/research-paper.php?id=19617"
            }
        ],
        "Entrepreneurship & Business Studies": [
            {
                title: "Pivotal Factors Driving Entrepreneurial Success: A Study Based in Kerala's MSME Landscape – International Journal of Engineering Research and Applications",
                doi: "10.9790/9622-14100110",
                link: "https://www.ijera.com/papers/vol14no10/14100110.pdf"
            }
        ],
        "Education & Learning Research": [
            {
                title: "The Interplay of Online Attributes and Learning Modes in Shaping Satisfaction and Effectiveness in Online Learning – Discover Education (Scopus Index)",
                doi: "10.1007/s44217-024-00344-y",
                link: "https://link.springer.com/article/10.1007/s44217-024-00344-y"
            }
        ],
        "Management & Organizational Behaviour": [
            {
                title: "Understanding Employee Retention through Job Satisfaction: Evidence from Nepales Banks – The Empirical Economic Letters (ABDC Index)",
                doi: "10.5281/zenodo.17265205",
                link: "https://zenodo.org/record/17265205"
            },
            {
                title: "Student Satisfaction Towards College Canteen Services in Chitwan and Nawalpur Districts of Nepal – OCEM Journal of Management, Technology and Science",
                doi: "10.3126/ocemjmtss.v3i2.67863",
                link: "https://www.nepjol.info/index.php/ocemjmtss/article/view/67863"
            },
            {
                title: "Employee Satisfaction and Retention in the Banking Sector of Bharatpur Metropolis in Nepal: A Confirmatory Factor Analysis – OCEM Journal of Management Technology & Social Sciences",
                doi: "10.3126/ocemjmtss.v3i2.68072",
                link: "https://www.nepjol.info/index.php/ocemjmtss/article/view/68072"
            }
        ]
    };

    // Category Color Mapping (Modern Palette) - "Theming"
    const categoryStyles = {
        "Finance & Stock Market Research": { icon: "fa-chart-line", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-100 dark:border-blue-900" },
        "Entrepreneurship & Business Studies": { icon: "fa-rocket", color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "border-indigo-100 dark:border-indigo-900" },
        "Education & Learning Research": { icon: "fa-graduation-cap", color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-50 dark:bg-teal-900/20", border: "border-teal-100 dark:border-teal-900" },
        "Management & Organizational Behaviour": { icon: "fa-users", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-900/20", border: "border-rose-100 dark:border-rose-900" }
    };
    const defaultStyle = { icon: "fa-folder", color: "text-gray-600 dark:text-gray-300", bg: "bg-gray-50 dark:bg-gray-800", border: "border-gray-200 dark:border-gray-700" };

    // -------------------------------------------------------------------------
    // 2. Rendering Logic
    // -------------------------------------------------------------------------

    function createPublicationCard(pub, categoryStyle, index = 0) {
        // Animation delay staggered
        const delay = index * 50;

        // Check availability of DOI for rendering
        const doiHtml = pub.doi
            ? `<div class="mt-auto pt-4 mb-1">
                 <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer" class="doi-badge group/doi" onclick="event.stopPropagation();">
                    <i class="fas fa-fingerprint text-[10px] opacity-70"></i>
                    <span>${pub.doi}</span>
                 </a>
               </div>`
            : `<div class="mt-auto h-4"></div>`;

        // Date of Publication (DOP)
        const dopHtml = pub.dop
            ? `<span class="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 ml-auto border-l border-slate-200 dark:border-slate-700 pl-3">
                 <i class="far fa-calendar-alt opacity-70"></i> ${pub.dop}
               </span>`
            : ``;

        // Map accent border color class (used for CSS hover targeting) and custom property for glow
        const accentClass = `border-accent-${categoryStyle.color.split('-')[1]}`;
        // Extract hex or variable for glow - simplified approach using style variable
        // We will inject the color as a CSS variable for the glow effect
        // NOTE: Tailwind classes are great, but for dynamic glow color in ::before, inline var is easier

        let glowColor = '#0891b2'; // Default cyan
        if (categoryStyle.color.includes('blue')) glowColor = '#2563eb';
        if (categoryStyle.color.includes('indigo')) glowColor = '#4f46e5';
        if (categoryStyle.color.includes('teal')) glowColor = '#0d9488';
        if (categoryStyle.color.includes('rose')) glowColor = '#e11d48';

        return `
            <article class="research-card-modern flex flex-col h-full animate-fade-in group cursor-pointer" 
                     style="animation-delay: ${delay}ms; --card-glow-color: ${glowColor};"
                     onclick="window.location.href='${pub.link}'">
                
                <div class="p-6 flex flex-col h-full relative z-10">
                    
                    <!-- Header: Icon & Category -->
                    <div class="flex items-start justify-between mb-5">
                        <div class="icon-box ${categoryStyle.bg} ${categoryStyle.color}">
                            <i class="fas ${categoryStyle.icon}"></i>
                        </div>
                        
                        <!-- Top actions -->
                        <div class="flex flex-col items-end gap-2">
                            <div class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors pointer-events-none">
                                <i class="fas fa-arrow-up-right-from-square text-slate-300 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Title -->
                    <h4 class="card-title text-lg md:text-xl text-slate-900 dark:text-white mb-3 line-clamp-3 group-hover:text-slate-700 dark:group-hover:text-slate-200">
                        ${pub.title}
                    </h4>

                    <!-- DOI and Bottom Action -->
                    ${doiHtml}
                    
                    <div class="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 mt-4 group/footer">
                        <div class="flex items-center gap-3">
                             <span class="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover/footer:text-${categoryStyle.color.split('-')[1]}-600 dark:group-hover/footer:text-${categoryStyle.color.split('-')[1]}-400 transition-colors">Read Paper</span>
                             ${dopHtml}
                        </div>
                        
                        <span class="action-btn flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white 
                                     group-hover/footer:bg-${categoryStyle.color.split('-')[1]}-100 dark:group-hover/footer:bg-${categoryStyle.color.split('-')[1]}-900/50 
                                     group-hover/footer:text-${categoryStyle.color.split('-')[1]}-600 dark:group-hover/footer:text-${categoryStyle.color.split('-')[1]}-400 
                                     group-hover/footer:scale-110 group-hover/footer:shadow-md
                                     transition-all duration-300">
                            <i class="fas fa-arrow-right text-xs transform group-hover/footer:-rotate-45 transition-transform duration-300"></i>
                        </span>
                    </div>

                </div>
            </article>
        `;
    }

    // Function to render Accordion on Home Page - Updated for Bento Box Style
    function renderHomeAccordion() {
        const container = document.getElementById('publications-accordion');
        if (!container) return;

        container.innerHTML = '';

        Object.keys(publications).forEach((category, index) => {
            const style = categoryStyles[category] || defaultStyle;

            // Accordion Wrapper (Bento Card Style)
            const wrapper = document.createElement('div');
            wrapper.className = 'bento-card mb-4 transition-all duration-300';

            // Button
            const button = document.createElement('button');
            button.className = 'w-full text-left focus:outline-none group';
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-controls', `section-${index}`);

            button.innerHTML = `
                <div class="flex items-center p-5 justify-between">
                    <div class="flex items-center gap-4">
                        <div class="p-3 rounded-lg ${style.bg} ${style.color} shadow-sm group-hover:shadow-md transition-all">
                            <i class="fas ${style.icon} text-lg"></i>
                        </div>
                        <div>
                            <span class="block text-lg font-bold text-slate-900 dark:text-white">
                                ${category}
                            </span>
                            <span class="text-xs font-medium text-gray-500 dark:text-gray-400">
                                ${publications[category].length} Paper${publications[category].length !== 1 ? 's' : ''}
                            </span>
                        </div>
                    </div>
                    <div class="accordion-icon h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-colors">
                        <i class="fas fa-plus text-xs"></i>
                    </div>
                </div>
            `;

            // Content Container
            const content = document.createElement('div');
            content.id = `section-${index}`;
            content.className = 'accordion-content'; // Uses CSS max-height transition

            // Inner Padding
            const paddingDiv = document.createElement('div');
            paddingDiv.className = 'p-6 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-700/50';

            // Grid
            const grid = document.createElement('div');
            grid.className = 'grid gap-8 md:grid-cols-2'; // Wider grid for accordion

            publications[category].forEach((pub, i) => {
                grid.innerHTML += createPublicationCard(pub, style, i);
            });

            paddingDiv.appendChild(grid);
            content.appendChild(paddingDiv);
            wrapper.appendChild(button);
            wrapper.appendChild(content);
            container.appendChild(wrapper);

            // Click Event
            button.addEventListener('click', () => {
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                const icon = button.querySelector('.accordion-icon i');
                const iconContainer = button.querySelector('.accordion-icon');

                if (isExpanded) {
                    button.setAttribute('aria-expanded', 'false');
                    content.style.maxHeight = null;
                    content.classList.remove('active');
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                } else {
                    button.setAttribute('aria-expanded', 'true');
                    content.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            });
        });
    }

    // Function to render All Publications on dedicated page
    function renderAllPublications() {
        const container = document.getElementById('all-publications-container');
        if (!container) return;

        for (const [category, items] of Object.entries(publications)) {
            const style = categoryStyles[category] || defaultStyle;

            const section = document.createElement('div');
            section.className = 'mb-12 animate-fade-in text-left';

            const header = document.createElement('div');
            header.className = 'flex items-center gap-4 mb-6 pb-2 border-b border-slate-200 dark:border-slate-700';
            header.innerHTML = `
                <div class="p-2.5 rounded-lg ${style.bg} ${style.color}">
                    <i class="fas ${style.icon} text-lg"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">${category}</h3>
            `;

            const grid = document.createElement('div');
            grid.className = 'grid gap-8 md:grid-cols-2 lg:grid-cols-3';

            items.forEach((pub, i) => {
                grid.innerHTML += createPublicationCard(pub, style, i);
            });

            section.appendChild(header);
            section.appendChild(grid);
            container.appendChild(section);
        }
    }

    // Initialize based on page
    if (document.getElementById('publications-accordion')) {
        renderHomeAccordion();
    } else if (document.getElementById('all-publications-container')) {
        renderAllPublications();
    }

    // -------------------------------------------------------------------------
    // 3. Theme Toggle & UI Logic
    // -------------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check local storage only. Default to dark.
    const userTheme = localStorage.getItem('theme');

    // If 'dark' or null (default), add class
    if (userTheme === 'dark' || !userTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);

    // Mobile Menu Toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Copyright Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // -------------------------------------------------------------------------
    // 4. Certificates Lightbox Logic
    // -------------------------------------------------------------------------
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxClose = document.getElementById('lightbox-close');
    const certificateItems = document.querySelectorAll('.certificate-item, .gallery-item, .training-item');

    if (lightbox && certificateItems.length > 0) {

        // Open Lightbox
        certificateItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const title = item.getAttribute('data-title');
                const desc = item.getAttribute('data-desc');

                lightboxImg.src = img.src;

                // Only set text if elements exist (Gallery items might not have them)
                if (lightboxTitle) lightboxTitle.textContent = title || '';
                if (lightboxDesc) lightboxDesc.textContent = desc || '';

                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Disable background scroll
            });
        });

        // Close Lightbox functions
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable background scroll

            // Clear src after transition to avoid flicker
            setTimeout(() => {
                lightboxImg.src = '';
            }, 300);
        };

        // Close on Button Click
        lightboxClose.addEventListener('click', closeLightbox);

        // Close on Background Click (Outside Image)
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close on Escape Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // -------------------------------------------------------------------------
    // Awards "View More" Logic
    // -------------------------------------------------------------------------
    const awardsGrid = document.getElementById('awards-grid');
    const viewMoreBtn = document.getElementById('view-more-awards');
    const viewMoreText = document.getElementById('view-more-text');
    const viewMoreIcon = viewMoreBtn ? viewMoreBtn.querySelector('i') : null;

    if (awardsGrid && viewMoreBtn) {
        const cards = Array.from(awardsGrid.children);
        const initialVisibleCount = 4;
        let isExpanded = false;

        // Hide cards initially
        cards.forEach((card, index) => {
            if (index >= initialVisibleCount) {
                card.classList.add('hidden');
            }
        });

        // Toggle visibility on click
        viewMoreBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;

            cards.forEach((card, index) => {
                if (index >= initialVisibleCount) {
                    if (isExpanded) {
                        card.classList.remove('hidden');
                        card.classList.add('animate-fade-in'); // Add fade-in animation
                    } else {
                        card.classList.add('hidden');
                        card.classList.remove('animate-fade-in');
                    }
                }
            });

            // Update Button State
            if (isExpanded) {
                viewMoreText.textContent = "View Less Awards";
                viewMoreIcon.classList.add('rotate-180');
            } else {
                viewMoreText.textContent = "View More Awards";
                viewMoreIcon.classList.remove('rotate-180');

                // Optional: Scroll back to top of awards section if wanted
                // awardsGrid.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // -------------------------------------------------------------------------
    // Combined "View More" Logic (Certifications & Research)
    // -------------------------------------------------------------------------
    const certList = document.getElementById('certifications-list');
    const resList = document.getElementById('research-list');
    const viewMoreCombinedBtn = document.getElementById('view-more-combined');
    const viewMoreCombinedText = document.getElementById('view-more-combined-text');
    const viewMoreCombinedIcon = viewMoreCombinedBtn ? viewMoreCombinedBtn.querySelector('i') : null;

    if (certList && resList && viewMoreCombinedBtn) {
        const certItems = Array.from(certList.children);
        const resItems = Array.from(resList.children);
        const initialCount = 2; // Show top 2
        let isCombinedExpanded = false;

        // Helper to hide items > initialCount
        const hideExcessItems = (items) => {
            items.forEach((item, index) => {
                if (index >= initialCount) {
                    item.classList.add('hidden');
                }
            });
        };

        // Helper to show/hide items with animation
        const toggleItems = (items, show) => {
            items.forEach((item, index) => {
                if (index >= initialCount) {
                    if (show) {
                        item.classList.remove('hidden');
                        item.classList.add('animate-fade-in');
                    } else {
                        item.classList.add('hidden');
                        item.classList.remove('animate-fade-in');
                    }
                }
            });
        };

        // Initial setup
        hideExcessItems(certItems);
        hideExcessItems(resItems);

        // Toggle visibility on click
        viewMoreCombinedBtn.addEventListener('click', () => {
            isCombinedExpanded = !isCombinedExpanded;

            toggleItems(certItems, isCombinedExpanded);
            toggleItems(resItems, isCombinedExpanded);

            // Update Button State
            if (isCombinedExpanded) {
                viewMoreCombinedText.textContent = "View Less Details";
                viewMoreCombinedIcon.classList.add('rotate-180');
            } else {
                viewMoreCombinedText.textContent = "View More Details";
                viewMoreCombinedIcon.classList.remove('rotate-180');
            }
        });
    }
});
