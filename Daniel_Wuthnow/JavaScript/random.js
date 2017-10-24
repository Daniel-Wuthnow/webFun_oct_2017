function slots(quar) {
	var winnings = Math.floor(Math.random()*50)+50+quar;
	var ran = Math.floor(Math.random()*100)
	for(var i = 1; i <= quar; i++)
	{
		if(Math.floor(Math.random()*100) == ran)
		{
			console.log(`YOU WON ${winnings}!!!`);
			return;
		}
		else{
			console.log("YOU LOSE!!!!");
		}
		
		}
	
}

slots(100)