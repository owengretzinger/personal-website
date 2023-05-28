

export default function handleClickScroll(section: string) {
    const yOffset = -60;
    const element = document.getElementById(section);
    if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};