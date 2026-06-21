// Given a birthday date, and another date, write a function that return the resulting age.
// 
// age("05/25/2000","04/03/2016") = 15
// age("05/25/2000","05/25/2016") = 16
// The entries must have this format : "mm/dd/yyyy" and be valid dates (month between 01 and 12, day between 01 and 31) and you need to round down the age like in the first example.
// 
// and the birthday date must be prior to the tested date
// 
// elsewhere the function return -1


// The Solution 

// Helper function to check if date string has valid format "mm/dd/yyyy"
function isValidFormat(dateStr) {
    const parts = dateStr.split('/');
    if (parts.length !== 3) return false; 
    if (parts[0].length !== 2) return false;
    if (parts[1].length !== 2) return false;
    if (parts[2].length !== 4) return false;
    // All format checks passed
    return true;
}

function age(birthDay, endDate) {
    // STEP 1: Validate format of both date strings
    if (!isValidFormat(birthDay) || (!isValidFormat(endDate))) {
        return -1
    }

    // STEP 2: Parse birthDay string into numbers
    const partsBirth = birthDay.split('/');
    const birthDayMonth = parseInt(partsBirth[0]);
    const birthDayDate = parseInt(partsBirth[1]);
    const birthDayYear = parseInt(partsBirth[2]);
    //  Parse endDate string into numbers
    const partsEnd = endDate.split('/');
    const partsEndMonth = parseInt(partsEnd[0]);
    const partsEndDate = parseInt(partsEnd[1]);
    const partsEndYear = parseInt(partsEnd[2]);

    // STEP 3: Validate month range (1-12)
    if (birthDayMonth < 1 || birthDayMonth > 12 || partsEndMonth < 1 || partsEndMonth > 12) {
        return -1 ;
    } 
    // Validate day range (1-31)
    if (birthDayDate < 1 || birthDayDate > 31 || partsEndDate < 1 || partsEndDate > 31) {
        return -1;
    }

    // STEP 4: Create Date objects (IMPORTANT: month is 0-based in JS, so subtract 1)
    const birthObj = new Date(birthDayYear, birthDayMonth -1, birthDayDate);
    const endObj = new Date(partsEndYear, partsEndMonth -1, partsEndDate);

    //  Verify birthDate is real (not auto-corrected by JS)
    if (birthObj.getFullYear() !== birthDayYear) return -1;
    if (birthObj.getMonth() !== birthDayMonth -1) return -1;
    if (birthObj.getDate() !== birthDayDate) return -1;
    // endDate is real
    if (endObj.getFullYear() !== partsEndYear) return -1;
    if (endObj.getMonth() !== partsEndMonth -1) return -1; 
    if (endObj.getDate() !== partsEndDate) return -1;

    // STEP 5: Check birthDate is before endDate
    if (birthObj > endObj) {
        return -1;
    }

    // STEP 6: Calculate age
    let age = partsEndYear - birthDayYear;

    // Condition 1: Test month is less than birth month
    // Meaning: NOT birthday yet
    if (partsEndMonth < birthDayMonth) {
        age = age - 1;

    // Condition 2: SAME month, but test date is smaller
    // Meaning: NOT yet birthday
    } else if (partsEndMonth === birthDayMonth && partsEndDate < birthDayDate) {
        age = age - 1;
    }

    // It's already your birthday → Return calculated age
    return age;
}

console.log(age("05/25/2000","04/03/2016"));
console.log(age("11/31/1777","04/03/2016"));