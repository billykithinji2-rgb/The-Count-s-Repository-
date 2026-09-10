/**
 * Utility to calculate clinic open/closed status based on Nairobi time (UTC+3)
 */
export function getClinicCurrentStatus(): {
  isOpen: boolean;
  statusBadge: string;
  detail: string;
  nextChange: string;
} {
  // Nairobi is UTC+3
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const nairobiTime = new Date(utc + 3 * 3600000);

  const day = nairobiTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = nairobiTime.getHours();
  const minutes = nairobiTime.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  // Mon-Fri: 8:00 AM (480 min) to 5:00 PM (1020 min)
  if (day >= 1 && day <= 5) {
    if (timeInMinutes >= 480 && timeInMinutes < 1020) {
      const remainingMinutes = 1020 - timeInMinutes;
      const remHours = Math.floor(remainingMinutes / 60);
      const remMins = remainingMinutes % 60;
      return {
        isOpen: true,
        statusBadge: 'Open Now',
        detail: `Open today until 5:00 PM (closes in ${remHours > 0 ? `${remHours}h ` : ''}${remMins}m)`,
        nextChange: 'Closes at 5:00 PM',
      };
    } else if (timeInMinutes < 480) {
      return {
        isOpen: false,
        statusBadge: 'Opens at 8:00 AM',
        detail: 'Currently closed. Opens today at 8:00 AM (EAT)',
        nextChange: 'Opens at 8:00 AM',
      };
    } else {
      const nextDayStr = day === 5 ? 'Saturday at 8:00 AM' : 'tomorrow at 8:00 AM';
      return {
        isOpen: false,
        statusBadge: 'Closed for the day',
        detail: `Currently closed. Opens ${nextDayStr}`,
        nextChange: `Opens ${nextDayStr}`,
      };
    }
  }

  // Saturday: 8:00 AM (480 min) to 3:00 PM (900 min)
  if (day === 6) {
    if (timeInMinutes >= 480 && timeInMinutes < 900) {
      const remainingMinutes = 900 - timeInMinutes;
      const remHours = Math.floor(remainingMinutes / 60);
      const remMins = remainingMinutes % 60;
      return {
        isOpen: true,
        statusBadge: 'Open Now',
        detail: `Open today until 3:00 PM (closes in ${remHours > 0 ? `${remHours}h ` : ''}${remMins}m)`,
        nextChange: 'Closes at 3:00 PM',
      };
    } else if (timeInMinutes < 480) {
      return {
        isOpen: false,
        statusBadge: 'Opens at 8:00 AM',
        detail: 'Currently closed. Opens today at 8:00 AM (Saturday hours)',
        nextChange: 'Opens at 8:00 AM',
      };
    } else {
      return {
        isOpen: false,
        statusBadge: 'Closed until Monday',
        detail: 'Currently closed. Opens Monday at 8:00 AM (Sunday closed)',
        nextChange: 'Opens Monday at 8:00 AM',
      };
    }
  }

  // Sunday: Closed
  return {
    isOpen: false,
    statusBadge: 'Closed on Sunday',
    detail: 'Sunday routine closed. On-call emergency hotline available (+254 795 803 669). Opens Monday at 8:00 AM.',
    nextChange: 'Opens Monday at 8:00 AM',
  };
}
