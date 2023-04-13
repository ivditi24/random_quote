const quotes = [
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: '-Walt Disney'
    },
    {
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall. ',
        author: '-Nelson Mandela'
    },
    {
        quote: 'If life were predictable it would cease to be life, and be without flavor.',
        author: '-Eleanor Roosevelt'
    },
    {
        quote: 'Always remember that you are absolutely unique. Just like everyone else.',
        author: '-Margaret Mead'
    },
    {
        quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn. ',
        author: '-Benjamin Franklin'
    },
    {
        quote: 'If life were predictable it would cease to be life, and be without flavor.',
        author: '-Eleanor Roosevelt'
    },
    {
        quote: 'It is during our darkest moments that we must focus to see the light. ',
        author: '-Aristotle'
    }
];



function generateQuote() {
    const btn = document.querySelector('button');
    const quote = document.querySelector('blockquote');
    const author = document.querySelector('cite');  

    btn.addEventListener('click', () => {
        const randomNum = Math.floor(Math.random() * quotes.length);
        const newQuote = quotes[randomNum];
        quote.textContent = newQuote.quote;
        author.textContent = newQuote.author;
    });
}

generateQuote();