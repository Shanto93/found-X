interface Idate {
    dateFound: Date;
  }
  
  const dateToIso = (date: Idate) => {
    // Extract the dateFound property
    return new Date(date.dateFound).toISOString();
  };
  
  export default dateToIso;
  