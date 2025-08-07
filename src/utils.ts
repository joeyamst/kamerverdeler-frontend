export const dayNumberToString = (dayNumber: number): string => {
    const realDayNumber = dayNumber % 5;

    let day = '';
    switch (realDayNumber) {
        case 0:
            day = 'Maandag';
            break;
        case 1:
            day = 'Dinsdag';
            break;
        case 2:
            day = 'Woensdag';
            break;
        case 3:
            day = 'Donderdag';
            break;
        case 4:
            day = 'Vrijdag';
            break;
        default:
            throw new Error('Invalid day number');
    }

    const week = (dayNumber - 4 > 0 ? 2 : 1);

    return `Week ${week} - ${day}`;
}