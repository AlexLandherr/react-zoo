//NOTE: The constants used here are treated by other components as milliseconds

//Constant to hold trigger value for feeding interval.
//For tests use 120000 for real usecases use 3 * 3600 * 1000.
//3 represents number of hours.
export const feedAlertIntervalLow = 3 * 3600 * 1000; 

//Constant to hold trigger value for global alert to feed given animal(s).
//For tests use 240000 for real usecases use 4 * 3600 * 1000.
//4 represents number of hours.
export const feedAlertIntervalHigh = 4 * 3600 * 1000;