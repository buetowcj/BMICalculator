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
                document.bmiForm.meaning.value = "That you are too thin.";
            }
            else if(finalBmi > 18.5 && finalBmi < 25){
                document.bmiForm.meaning.value = "That you are healthy.";
            }
            else if(finalBmi > 25){
                document.bmiForm.meaning.value = "That you are overweight.";
            }
            else{
            alert("Please fill in boxes correctly");

            $("#BMINumber").text(finalBmi.toFixed(1));
            $("#BMIText").text("");
            $(".output").show();
        }
    }
}
);