const custormers = ["Tom", "Manuel", "Anna"];
const activeCustomers = ["Max", "Manuel", "Anna"];

const inactiveCustomers = _.difference(custormers, activeCustomers);

console.log(inactiveCustomers);
