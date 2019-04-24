import moment from 'moment';

// Get visible trans
const getVisibleTransactions = (transaction, { text, sortBy, startDate, endDate }) => {
    return transaction.filter((transaction) => {
      const createdAtMoment = moment( transaction.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
      const textMatch = transaction.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };

  export default getVisibleTransactions;