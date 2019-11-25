function fun()
{
    const list = document.querySelectorAll('li')
    let input = document.getElementById('input').value.toUpperCase()
    for(var i=0 ; i<list.length ; i++)
    {
       if(list[i].innerHTML.toUpperCase().indexOf(input)>-1)
        {
            list[i].style.display = ""
        }
        else
        {
            list[i].style.display = "none"
        }
    
    }
}