// Define the elevator calculations function
function calculateElevatorCost(apartments, floors, tier) {
    // Validate inputs
    if (isNaN(apartments) || isNaN(floors) || !['standard', 'premium', 'excelium'].includes(tier)) {
        throw new Error('Invalid input');
    }
  
    // Define tier costs
    const tierCosts = {
        standard: 8000,
        premium: 12000,
        excelium: 15000,
    };
  
    // Calculate number of elevators needed
    const elevators = Math.ceil(apartments / 6);
  
    // Calculate final cost based on selected tier
    const finalCost = elevators * tierCosts[tier];
  
    // Return the results
    return { elevators, finalCost };
  }
  
  // Export the elevator calculations function
  module.exports.calculateElevatorCost = calculateElevatorCost;