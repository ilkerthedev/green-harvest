const sections = [
  { id: 'header', path: './partials/header.html' },
  { id: 'mobilemenu', path: './partials/mobilemenu.html' },
  { id: 'hero', path: './partials/hero.html' },
  { id: 'howitworks', path: './partials/howitworks.html' },
  { id: 'advertisement', path: './partials/advertisement.html' },
  { id: 'vegetables', path: './partials/vegetables.html' },
  { id: 'reviews', path: './partials/reviews.html' },
  { id: 'yourorder', path: './partials/yourorder.html' },
  { id: 'footer', path: './partials/footer.html' },
];

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await Promise.all(
      sections.map(async (section) => {
        const response = await fetch(section.path);
        if (!response.ok) throw new Error(`${section.path} yüklenemedi!`);
        document.getElementById(section.id).innerHTML = await response.text();
      })
    );
    
    console.log('Tüm HTML parçaları yüklendi!');
    
    // HTML yüklendikten sonra menu.js'i dinamik olarak ekle
    const menuScript = document.createElement('script');
    menuScript.src = './js/menu.js';
    document.body.appendChild(menuScript);
    
  } catch (error) {
    console.error('Hata:', error);
  }
});


