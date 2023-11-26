export function takeID(objt) {
  const Array = localStorage.getItem("Cart");
  let existingArray = [];
  if (Array) {
    existingArray = JSON.parse(Array);
  }
  console.log(existingArray);
  const newData = objt;
  existingArray.push(newData);

  localStorage.setItem("Cart", JSON.stringify(existingArray));
}
export function GetID() {
  const DonationData = localStorage.getItem("Cart");
  return DonationData;
}
