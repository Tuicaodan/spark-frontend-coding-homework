export const minToHour = (min: number) => {
    const hour = Math.floor(min / 60);
    const minute = min % 60;
    return `${hour}h ${minute}min`;
}

