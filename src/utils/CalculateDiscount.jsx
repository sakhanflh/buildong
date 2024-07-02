export function calculateDiscount(total, discount){
    const discountAmount = total * (discount / 100);
    const sum = total - discountAmount;
    return {sum, discountAmount}
}