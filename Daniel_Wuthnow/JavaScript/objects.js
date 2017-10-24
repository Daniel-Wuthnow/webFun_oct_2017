function object() {
	var student = [
		{first_name: 'Michael', last_name: 'Jordan'},
		{first_name: 'John', last_name: 'Rosales'},
		{first_name: 'Mark', last_name: 'Guillen'},
		{first_name: 'KB', last_name: 'Tonel'}
	]

	for(var i = 0; i < student.length; i++){
		console.log(`${student[i].first_name} ${student[i].last_name}`)
	}
}
object();

