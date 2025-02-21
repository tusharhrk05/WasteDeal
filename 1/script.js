document.getElementById('calculate').addEventListener('click', function() {
    const pollutionType = document.getElementById('pollution-type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const carbonCredit = calculateCarbonCredit(pollutionType, amount);
    document.getElementById('carbon').textContent = `Carbon Credit: ${carbonCredit.toFixed(2)} tons`;
});

function calculateCarbonCredit(pollutionType, amount) {
    let emissionFactor;
    switch (pollutionType) {
        case 'dry':
            emissionFactor = 1.0;
            break;
        case 'plastics':
            emissionFactor = 1.2;
            break;
        case 'chemical':
            emissionFactor = 1.5;
            break;
        case 'paper':
            emissionFactor = 0.8;
            break;
        default:
            emissionFactor = 1.0;
    }
    const reductionTarget = 100; 
    return (amount - reductionTarget) / emissionFactor;
}