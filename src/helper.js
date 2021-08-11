export function getDifferenceYear(year) {
    return new Date().getFullYear()- year;
    
}

export function calculateBrand(brand) {

    let increment;

    switch(brand){
        case 'europeo':
            increment = 1.13;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
            default:
                break;
    }
    return increment;
}
export function calculatePlan(plan) {
  return (plan === 'basic') ? 1.20 : 1.50;

}
export function fristLetterUppercase(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}