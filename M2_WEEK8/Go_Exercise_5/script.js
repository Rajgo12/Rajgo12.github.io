// DOM Elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const shareBtn = document.getElementById('shareBtn');

// Function to fetch and display a random quote
function fetchQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteElement.textContent = `"${data.content}"`;
      authorElement.textContent = `- ${data.author}`;
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      quoteElement.textContent = 'Failed to load quote. Please try again.';
      authorElement.textContent = '';
    });
}

// Button Event Listeners
newQuoteBtn.addEventListener('click', fetchQuote);
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(`${quoteElement.textContent} ${authorElement.textContent}`)
    .then(() => alert('Quote copied to clipboard!'))
    .catch(err => alert('Failed to copy quote.'));
});
shareBtn.addEventListener('click', () => {
  const quoteText = `${quoteElement.textContent} ${authorElement.textContent}`;
  const shareLink = `https://wa.me/?text=${encodeURIComponent(quoteText)}`;
  window.open(shareLink, '_blank');
});

// Fetch the initial quote when the page loads
fetchQuote();
