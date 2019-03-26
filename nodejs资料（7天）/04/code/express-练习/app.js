var express=require('express')

var app=express()
app.get('/',function(req,res){
	res.send('hello wordl')
})
app.get('/login',function(req,res){
	res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Document</title>
</head>
<body>
<h1>hello 你好吗</h1>

</body>
</html>

		`)
})

app.listen(3000,function(){
	console.log('express app is running...') 
})