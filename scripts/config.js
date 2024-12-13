const titleName = 'Daniel Mazzeu Teste';
const phone = '+55' + '11987654321';
const message = 'Olá, gostaria de agendar uma avaliação.';
const links = document.querySelectorAll('a.whatsapp');
const client = document.getElementById("client");

// Whatsapp Links
function generate(numero, mensagem) {
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

// Title
links.forEach(link => {
    const newLink = generate(phone, message);
    link.href = newLink;
});

document.title = titleName;
client.textContent = titleName;

// Metatags
const newKeywords = "palavra-chave1, palavra-chave2, palavra-chave3";
const newDescription = "Esta é a nova descrição da página.";

const metaKeywords = document.querySelector('meta[name="keywords"]');
const metaDescription = document.querySelector('meta[name="description"]');

metaKeywords.content = newKeywords;
metaDescription.content = newDescription;

// Og Metatags
const newOgTitle = "Título da Página para o Facebook";
const newOgDescription = "Descrição da Página para o Facebook";
const newOgImage = '../images/presentation.jpg';

const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogImage = document.querySelector('meta[property="og:image"]');

ogTitle.content = newOgTitle;
ogDescription.content = newOgDescription;
ogImage.content = newOgImage;
