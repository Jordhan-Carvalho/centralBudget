import moment from "moment";
import selectVisible from "../selectors/visibleTrans";
import getTotal from "../selectors/transaction-total";


const year = '2019';

const filters = {
    text: "",
    sortBy: "date",
  };


export  const getApril = (expenses, incomes) => {
    const filter = {
      ...filters,
      startDate: moment(`${year}-04-01`),
      endDate: moment(`${year}-04-30`)
    };
    const newData = {
      name: "April",
      expenses: getTotal(selectVisible(expenses, filter)) / 100,
      incomes: getTotal(selectVisible(incomes, filter)) / 100
    };
  return newData;
  };

  export  const getMay = (expenses, incomes) => {
    const filter = {
      ...filters,
      startDate: moment(`${year}-05-01`),
      endDate: moment(`${year}-05-31`)
    };
    const newData = {
      name: "May",
      expenses: getTotal(selectVisible(expenses, filter)) / 100,
      incomes: getTotal(selectVisible(incomes, filter)) / 100
    };
  return newData;
  };

  export  const getJune = (expenses, incomes) => {
    const filter = {
      ...filters,
      startDate: moment(`${year}-06-01`),
      endDate: moment(`${year}-06-30`)
    };
    const newData = {
      name: "June",
      expenses: getTotal(selectVisible(expenses, filter)) / 100,
      incomes: getTotal(selectVisible(incomes, filter)) / 100
    };
  return newData;
  };

  export  const getJuly = (expenses, incomes) => {
    const filter = {
      ...filters,
      startDate: moment(`${year}-07-01`),
      endDate: moment(`${year}-07-31`)
    };
    const newData = {
      name: "July",
      expenses: getTotal(selectVisible(expenses, filter)) / 100,
      incomes: getTotal(selectVisible(incomes, filter)) / 100
    };
  return newData;
  };

  export  const getAugust = (expenses, incomes) => {
    const filter = {
      ...filters,
      startDate: moment(`${year}-08-01`),
      endDate: moment(`${year}-08-31`)
    };
    const newData = {
      name: "August",
      expenses: getTotal(selectVisible(expenses, filter)) / 100,
      incomes: getTotal(selectVisible(incomes, filter)) / 100
    };
  return newData;
  };

  export  const getSept = (expenses, incomes) => {
    const filter = {
      ...filters,
      startDate: moment(`${year}-09-01`),
      endDate: moment(`${year}-09-30`)
    };
    const newData = {
      name: "Sept",
      expenses: getTotal(selectVisible(expenses, filter)) / 100,
      incomes: getTotal(selectVisible(incomes, filter)) / 100
    };
  return newData;
  };

  export  const getOctober = (expenses, incomes) => {
    const filter = {
      ...filters,
      startDate: moment(`${year}-10-01`),
      endDate: moment(`${year}-10-31`)
    };
    const newData = {
      name: "Oct",
      expenses: getTotal(selectVisible(expenses, filter)) / 100,
      incomes: getTotal(selectVisible(incomes, filter)) / 100
    };
  return newData;
  };

  export  const getNovember = (expenses, incomes) => {
    const filter = {
      ...filters,
      startDate: moment(`${year}-11-01`),
      endDate: moment(`${year}-11-30`)
    };
    const newData = {
      name: "Nov",
      expenses: getTotal(selectVisible(expenses, filter)) / 100,
      incomes: getTotal(selectVisible(incomes, filter)) / 100
    };
  return newData;
  };

  export  const getDezember = (expenses, incomes) => {
    const filter = {
      ...filters,
      startDate: moment(`${year}-12-01`),
      endDate: moment(`${year}-12-31`)
    };
    const newData = {
      name: "Dez",
      expenses: getTotal(selectVisible(expenses, filter)) / 100,
      incomes: getTotal(selectVisible(incomes, filter)) / 100
    };
  return newData;
  };