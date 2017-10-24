function nums_only(arr) {
	var x = [];
	for(var i = 0; i < arr.length; i++)
	{
		if(typeof arr[i] === "number")
			x.push(arr[i]);
	}
	console.log(x);
}
nums_only([1, "apple", -3, "orange", 0.5]);

function never_nums(arr) {
	var x = [];
	for(var i = 0; i < arr.length; i++)
	{
		if(typeof arr[i] !== "number")
			x.push(arr[i]);
	}
	console.log(x);
}
never_nums([1, "apple", -3, "orange", 0.5]);