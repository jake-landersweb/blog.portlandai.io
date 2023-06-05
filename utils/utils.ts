export function capitalize(input: string): string {
    const words = input.split(' ');

    const capitalizedWords = words.map(word => {
        const firstLetter = word.charAt(0);

        if (firstLetter === firstLetter.toLowerCase()) {
            const capitalizedFirstLetter = firstLetter.toUpperCase();
            const restOfWord = word.slice(1);
            return capitalizedFirstLetter + restOfWord;
        }

        return word;
    });

    return capitalizedWords.join(' ');
}

export function isNumeric(str: string): boolean {
    return !isNaN(parseFloat(str)) && isFinite(str as any);
}

export function convertEpochToDateString(epochMs: number): string {
    const date = new Date(epochMs);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}