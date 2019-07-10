// JavaScript Document

var number = 1;

var titles = [];

var align = [];

var parapgraph = [];

function updateForm() {
	var annotations = document.getElementById('annotations');
	
	var content = annotations.innerHTML;
	
	number++;
	
	content = content + "<h5>Annotation " + number + "</h5>" + "<input type='text' name='subject' placeholder='Annotation Title'><br>" + "<input class='align' type='button' name='align-left' value='Align Left'>" + "<input class='align' type='button' name='align-left' value='Align Center'>" + "<input class='align' type='button' name='align-left' value='Align Right'>" + "<textarea name='text' id='input-paragraph-" + number + "' placeholder='Paragraph Description'></textarea><br>";
	
	annotations.innerHTML = content;
}

function submitForm() {
	for (var n = 1; n <= number; n++) {
		var inputParagraph = document.getElementById("input-paragraph-" + n);
		
		parapgraph.push(inputParagraph.value);
		
	}
	
	var result = document.getElementById("result");
	var generatedCode = document.getElementById("generated-code");
	
	result.style.display = "block";
	generatedCode.style.display = "block";
	
	result.value = parapgraph;

}