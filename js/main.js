var odd=[5,8,13,17,20,23,28,30,31,10,6,1,40];
document.write("input values:&nbsp;"+odd+"<br><br>");
var count=0;
for(let i=0;i<odd.length;i++)
{
	
	if(odd[i]%2!=0)
	{
		count++;
		
	}
	
}
document.write("number of odd count&nbsp;:&nbsp;"+count);
	