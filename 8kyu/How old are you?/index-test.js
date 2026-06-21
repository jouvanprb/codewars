const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.expect(age ("07/20/2020","06/15/2015") == -1, "Birthday date is after endDate date.")

Test.expect(age("05/20/000","02/15/2015") == -1, "Should return -1, One of your date doesn't have the good format 'MM/DD/YYYY")

Test.expect(age("05/25/2000","04/03/2016") == 15,"Error : birthday= 05/25/2000 and enddate= 04/03/2016 -> should be '15' and not "+age("05/25/2000","04/03/2016"))

Test.expect(age("05/25/2000","05/25/2016") == 16,"Error : birthday= 05/25/2000 and enddate= 05/25/2016 -> should be '16' and not "+age("05/25/2000","05/25/2016"))

Test.expect(age("06/09/3051","04/23/4208") == 1156,"Error : birthday= 06/09/3051 and enddate= 04/23/4208 -> result should be 1156 and not "+age("06/09/3051","04/23/4208"))

Test.expect(age("10/09/2104","10/09/3911") == 1807,"Error : birthday= 10/09/2104 and enddate= 10/09/3911 -> result should be 1807 and not "+age("10/09/2104","10/09/3911"))


  });
});
