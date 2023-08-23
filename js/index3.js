let a=document.querySelectorAll(".sidebar .btn");
a[2].classList.add("clicked");
console.log("clicked");
for(let j=0;j<4;j++)
{
    if(j!=2)
    {
        if(a[j].classList.contains("clicked"))
        {
            a[j].classList.remove("clicked");
        }
    }
}