$(document).ready(
    function () {
// add event listener (clicks, etc.)
        $("#BMIButton").click(calculateBMI);
// add all other functions here
        function calculateBMI()
        {
            var height = $("#height").val();
            height = parseFloat(height);

            var weight = $("#weight").val();
            weight = parseFloat(weight);

            var finalBmi = (weight/(height*height)) * 703;

            if(finalBmi < 18.5){
                var desc = "thin.";
            }
            else if(finalBmi > 18.5 && finalBmi < 25){
                var desc = "healthy.";
            }
            else if(finalBmi > 25){
                var desc = "overweight.";
            }
            else {
                alert("Please fill in boxes correctly");
            }

            $("#BMINumber").text(finalBmi.toFixed(1));
            $("#BMIText").text(desc);
            $(".output").show();
        }
}
);