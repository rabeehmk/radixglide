export type Opening = {
  title: string;
  type: string;
  location: string;
  summary: string;
  /** Application link (form, email or job board). */
  href: string;
};

/**
 * Open positions. Leave empty when there are no vacancies — the careers page then shows
 * "No current openings" with a "Send Your CV" option. Add only real, approved roles.
 */
export const openings: Opening[] = [];
