import lighthouse from 'lighthouse'
import dayjs from 'dayjs';

it('should be able to import lighthouse', () => {
  console.log('dayjs', dayjs);
  // Importing lighthouse fails, if we comment this line and line 1, then it works normally
  console.log('lighthouse', lighthouse)
})
