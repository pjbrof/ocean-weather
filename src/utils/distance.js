/**
 * Calculates the straight-line distance between two GPS coordinates using the Haversine formula.
 * @param {number} lat1 - Latitude of the first point.
 * @param {number} lon1 - Longitude of the first point.
 * @param {number} lat2 - Latitude of the second point.
 * @param {number} lon2 - Longitude of the second point.
 * @param {boolean} [useMiles=false] - If true, returns distance in miles. Default is kilometers.
 * @returns {number} The distance between the points.
 */
export const getHaversineDistance = (lat1, lon1, lat2, lon2, useMiles = false) => {
    // 1. Set Earth's radius (6371 km or 3959 miles)
    const R = useMiles ? 3959.0 : 6371.0;

    // 2. Helper function to convert degrees to radians
    const toRadians = (degree) => (degree * Math.PI) / 180;

    // 3. Convert all inputs to radians
    const phi1 = toRadians(lat1);
    const phi2 = toRadians(lat2);
    const deltaPhi = toRadians(lat2 - lat1);
    const deltaLambda = toRadians(lon2 - lon1);

    // 4. Apply Haversine formula math
    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) * Math.cos(phi2) * 
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // 5. Return final distance rounded to 2 decimal places
    return Math.round((R * c) * 100) / 100;
}


// ==========================================
// EXAMPLE USAGE: Point Judith to Block Island
// ==========================================
// const pjLat = 41.3644, pjLon = -71.4883;
// const biLat = 41.1738, biLon = -71.5583;

// const distanceInKm = getHaversineDistance(pjLat, pjLon, biLat, biLon);
// const distanceInMiles = getHaversineDistance(pjLat, pjLon, biLat, biLon, true);

// console.log(`Distance: ${distanceInKm} km`);       // Output: Distance: 22.01 km
// console.log(`Distance: ${distanceInMiles} miles`); // Output: Distance: 13.68 miles
