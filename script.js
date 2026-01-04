let currentLang = 'bn';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('language-overlay').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    updateContent();
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

    const list = document.getElementById('manifesto-list');
    list.innerHTML = '';

    langData.points.forEach(point => {
        const div = document.createElement('div');
        div.className = 'manifesto-card';

        div.innerHTML = `
            <h3>${point.title}</h3>
            <ul>
                ${point.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
        `;
        list.appendChild(div);
    });

    document.documentElement.lang = currentLang;
}
