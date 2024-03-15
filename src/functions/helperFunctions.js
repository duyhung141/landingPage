export const formatDate = (date, type = "") => {
    let formattedDate;
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
};

export const formatMoney = (money) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    const formattedMoney = formatter.format(money);
    return formattedMoney;
};

export const getPriceSale = (price, percentSale) => {
    const previousSalePrice = parseInt(price / ((100 - percentSale) / 100) / 1000);
    return formatMoney(previousSalePrice * 1000);
}

