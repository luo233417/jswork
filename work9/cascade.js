function createOption(obj,date) {
    for (var i in date) {
        var op = new Option(date[i], i);
        obj .options.add(op);
    }
}
var collegeSelect = document.getElementById('collegeSelect');
createOption(collegeSelect, collegesSelectArr);

var majorelectS = document.getElementById('majorelectS');
collegeSelect.onchange= function () {
    majorelectS.options.length = 0;
    createOption(majorelectS, mojorelectStArr[collegeSelect.value]);
    if (collegeSelect.value >= 0) {
        majorelectS.onchange ();
    } else { 
        classSelect.options.length = 0;
    }
};


var classSelect = document.getElementById('classSelect');
majorelectS.onchange= function () {
    classSelect.options.length = 0;
    createOption(classSelect, classSelectArr[collegeSelect.value][majorelectS.value]);
};
