document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const wordCount = document.getElementById('word-count');
    const charCount = document.getElementById('char-count');
    const sentenceCount = document.getElementById('sentence-count');
    const paragraphCount = document.getElementById('paragraph-count');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');

    function updateStats() {
        const text = textInput.value;
        const trimmedText = text.trim();

        // Character Count
        charCount.innerText = text.length.toLocaleString();

        // Word Count
        // Split by whitespace and filter empty strings
        const words = trimmedText === '' ? [] : trimmedText.split(/\s+/).filter(word => word.length > 0);
        wordCount.innerText = words.length.toLocaleString();

        // Sentence Count
        // Split by . ! ? followed by space or end of string
        // This is a basic approximation
        const sentences = trimmedText === '' ? [] : trimmedText.split(/[.!?]+(?=\s|$)/).filter(s => s.trim().length > 0);
        sentenceCount.innerText = sentences.length.toLocaleString();

        // Paragraph Count
        // Split by double newlines or more
        const paragraphs = trimmedText === '' ? [] : trimmedText.split(/\n\s*\n/).filter(p => p.trim().length > 0);
        paragraphCount.innerText = paragraphs.length.toLocaleString();
    }

    // Event Listeners
    textInput.addEventListener('input', updateStats);

    clearBtn.addEventListener('click', () => {
        textInput.value = '';
        updateStats();
        textInput.focus();
    });

    copyBtn.addEventListener('click', () => {
        if (!textInput.value) return;

        textInput.select();
        navigator.clipboard.writeText(textInput.value).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '✅ Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    });

    // Initialize
    updateStats();
});
