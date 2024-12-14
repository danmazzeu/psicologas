const titleName = 'Bianca Macedo';
const phone = '+55' + '16997989601';
const instagram = '';
const message = 'Olá, gostaria de agendar uma avaliação.';
const wpplinks = document.querySelectorAll('a.whatsapp');
const instalinks = document.querySelectorAll('a.instagram');
const client = document.getElementById("client");

// Whatsapp Generate
function whatsappGenerate(numero, mensagem) {
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
wpplinks.forEach(link => {
    const newLink = whatsappGenerate(phone, message);
    link.href = newLink;
});

// Instagram Generate
function instagramGenerate(instagram) {
    return `https://www.instagram.com/${instagram}`;
}
instalinks.forEach(link => {
    const newLink = instagramGenerate(instagram);
    link.href = newLink;
});

// Title
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
