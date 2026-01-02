let currentLang = 'bn';

function setLanguage(lang) {
    currentLang = lang;
    const overlay = document.getElementById('language-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        updateContent();
    }, 400);
}

function toggleLanguage() {
    currentLang = currentLang === 'bn' ? 'en' : 'bn';
    updateContent();
    window.scrollTo(0, 0);
}

function updateContent() {
    const langData = content[currentLang];
    
    document.getElementById('candidate-name').innerText = langData.name;
    document.getElementById('candidate-pos').innerText = langData.position;
    document.getElementById('ballot-label').innerText = langData.ballotLabel;
    document.getElementById('ballot-no').innerText = langData.ballotNo;
    document.getElementById('nav-title').innerText = langData.navTitle;
    document.getElementById('manifesto-title').innerText = langData.manifestoTitle;
    document.getElementById('lang-toggle-btn').innerText = langData.langBtn;
    document.getElementById('footer-text').innerText = langData.footer;

    const listContainer = document.getElementById('manifesto-list');
    listContainer.innerHTML = '';

    langData.points.forEach(point => {
        const card = document.createElement('div');
        card.className = 'manifesto-card';
        
        let itemsHtml = '<ul>';
        point.items.forEach(item => {
            itemsHtml += `<li>${item}</li>`;
        });
        itemsHtml += '</ul>';

        card.innerHTML = `<h3>${point.title}</h3>${itemsHtml}`;
        listContainer.appendChild(card);
    });

    document.documentElement.lang = currentLang;
}