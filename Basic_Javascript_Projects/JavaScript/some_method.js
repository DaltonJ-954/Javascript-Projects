var years = [2016, 1989, 1934, 2000, 2010, 1988, 1765]; /* variables of different years*/

/*This arrow function is used to find a paritcular year in the array*/
checkYear = (year) => year >= 1988;

function array_Fucntion() {
    /*the .some() will sift (iterate) through the array of years and return a result*/
    document.getElementById('yearly').innerHTML = years.some(checkYear);
}
