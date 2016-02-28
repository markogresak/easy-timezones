/* @Flow */

import moment from 'moment-timezone';

export default function timezones(filterString = '') {
  // Original city/region string uses _ in place of spaces.
  const filter = filterString.replace(/\s/g, '_');
  return moment.tz.names()
    .filter(str => str.toLowerCase().indexOf(filter) !== -1)
    .map(str => {
      const [region, city] = str.split('/');
      return {
        timezoneString: str,
        region,
        city: (city || region).replace(/_/g, ' '),
      };
    });
};
