const number = (num) => {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(num);
};

export default number;
