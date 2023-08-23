let a=document.querySelectorAll(".sidebar .btn");
for(let i=0;i<a.length;i++){
    a[i].addEventListener("click",function(){
        let step=this.innerHTML;
        console.log(step);
        switch(step)
        {
            case "1":
            {
                a[0].classList.add("clicked");
                console.log("clicked");
                for(let j=0;j<4;j++)
                {
                    if(j!=step-1)
                    {
                        if(a[j].classList.contains("clicked"))
                        {
                            a[j].classList.remove("clicked");
                        }
                    }
                }
                break;
            }
            case "2":
            {
                a[1].classList.add("clicked");
                console.log("clicked");
                sessionStorage.setItem(scheme,"0");
                for(let j=0;j<4;j++)
                {
                    if(j!=step-1)
                    {
                        if(a[j].classList.contains("clicked"))
                        {
                            a[j].classList.remove("clicked");
                        }
                    }
                }
                break;
            }
            case "3":
            {
                a[2].classList.add("clicked");
                console.log("clicked");
                for(let j=0;j<4;j++)
                {
                    if(j!=step-1)
                    {
                        if(a[j].classList.contains("clicked"))
                        {
                            a[j].classList.remove("clicked");
                        }
                    }
                }
                break;
            }
            case "4":
            {
                a[3].classList.add("clicked");
                console.log("clicked");
                for(let j=0;j<4;j++)
                {
                    if(j!=step-1)
                    {
                        if(a[j].classList.contains("clicked"))
                        {
                            a[j].classList.remove("clicked");
                        }
                    }
                }
                break;
            }

        }
    })
}
let selected_plan;
let card=$(".card");
let cards=Array.from(card);
for(let i=0;i<cards.length;i++)
{
    card[i].addEventListener("click",function(){
        sessionStorage.setItem(selected_plan,i);
        card[i].classList.add("selected");
        for(let j=0;j<cards.length;j++)
        {
            if(i!=j&&card[j].classList.contains("selected"))
            {
                card[j].classList.remove("selected");
            }
        }
    })
}
let scheme=0;
let slide=0;
$(".slider").click(function()
    {
        slide++;
        if(slide%2==0)
        {
            $(".monthly").addClass("marked");
            $(".yearly").removeClass("marked");
            document.querySelector("p.price1").innerHTML="$9/mo";
            document.querySelector("p.price2").innerHTML="$12/mo";
            document.querySelector("p.price3").innerHTML="$15/mo";
            sessionStorage.setItem(scheme,"0");
        }
        else
        {
            $(".yearly").addClass("marked");
            $(".monthly").removeClass("marked");
            document.querySelector("p.price1").innerHTML="$90/yr<br><span>2 months free<span>";
            document.querySelector("p.price2").innerHTML="$120/yr<br><span>2 months free<span>";
            document.querySelector("p.price3").innerHTML="$150/yr<br><span>2 months free<span>";
            sessionStorage.setItem(scheme,"1");
        }
    }
)
let checked=[];
$(".checkbox").click(function(){
    let array=document.querySelectorAll(".checkbox");
    let elem=Array.from(array);
    console.log(elem);
    let arr=document.querySelectorAll(".box");
    let box=Array.from(arr);
    for(let i=0;i<elem.length;i++)
    {
        if(elem[i].checked)
        {
            let arr=document.querySelectorAll(".box");
            box[i].classList.add("chosen");
        }
        else
        {
            box[i].classList.remove("chosen");
        }
    }
})
let array=document.querySelectorAll(".checkbox");
let elem=Array.from(array);
let addon=[];
$(".next").click(function(){
    for(let i=0;i<elem.length;i++)
    {
        if(elem[i].checked)
            checked.push(i);
    }
    console.log(checked);
    if(typeof(storage)!=undefined)
    {
        sessionStorage.setItem(addon,checked);
    }
    else
    {
        console.log("sorry!No web storage supported");
    }
})
let cost=0;
if(Number(sessionStorage.getItem(selected_plan))==0)
{
    if(Number(sessionStorage.getItem(scheme))===0)
    {
        document.querySelector(".upper").innerHTML='<h5 class="plan">Arcade <span>(Monthly)</span><p class="plan cost">$9/mo</p></h5><a class="change" href="index2.html">change</a>';
        cost=9;
    }
    else
    {
        document.querySelector(".upper").innerHTML='<h5 class="plan">Arcade <span>(Yearly)</span><p class="plan cost-yearly">$90/yr</p></h5><a class="change-yearly" href="index2.html">change</a>';
        cost=90;
    }
}
else if(Number(sessionStorage.getItem(selected_plan))==1)
{
    if(Number(sessionStorage.getItem(scheme))===0)
    {
        document.querySelector(".upper").innerHTML='<h5 class="plan">Advanced <span>(Monthly)</span><p class="plan cost2">$12/mo</p></h5><a class="change2" href="index2.html">change</a>';
        cost=12;
    }
    else
    {
        document.querySelector(".upper").innerHTML='<h5 class="plan">Advanced <span>(Yeary)</span><p class="plan cost2-yearly">$120/yr</p></h5><a class="change2-yearly" href="index2.html">change</a>';
        cost=120;
    }
}
else
{
    if(Number(sessionStorage.getItem(scheme))===0)
    {
        document.querySelector(".upper").innerHTML='<h5 class="plan">Pro <span>(Monthly)</span><p class="plan cost3">$15/mo</p></h5><a class="change3" href="index2.html">change</a>';
        cost=15;
    }
    else
    {
        document.querySelector(".upper").innerHTML='<h5 class="plan">Pro <span>(Yearly)</span><p class="plan cost3-yearly">$150/yr</p></h5><a class="change3-yearly" href="index2.html">change</a>';
        cost=150;
    }
}
let extraPlan=""; 
for(let i=0;i<(sessionStorage.getItem(addon)).length;i++)
{
    console.log(sessionStorage.getItem(addon)[i]);
    if((sessionStorage.getItem(addon))[i]==='0')
    {
        if(Number(sessionStorage.getItem(scheme))===0)
        {
            extraPlan+='<p class="addons">Online Service<p class="addons price1">$1/mo</p></p>';
            console.log("happy");
            cost+=1;
        }
        else
        {
            extraPlan+='<p class="addons">Online Service<p class="addons price1">$10/yr</p></p>';
            console.log("happy");
            cost+=10;
        }
    }
    else if((sessionStorage.getItem(addon))[i]==='1')
    {
        if(Number(sessionStorage.getItem(scheme))===0)
        {
            extraPlan+='<p class="addons">Local Storage<p class="addons price2">$2/mo</p></p>';
            console.log("happy");
            cost+=2;
        }
        else
        {
            extraPlan+='<p class="addons">Local Storage<p class="addons price2">$20/yr</p></p>';
            console.log("happy");
            cost+=20;
        }
    }
    else if((sessionStorage.getItem(addon))[i]==='2')
    {
        if(Number(sessionStorage.getItem(scheme))===0)
        {
            extraPlan+='<p class="addons">Customisable Profile<p class="addons price3">$2/mo</p></p>';
            console.log("happy");
            cost+=2;
        }
        else
        {
            extraPlan+='<p class="addons">Customisable Profile<p class="addons price3">$20/yr</p></p>';
            console.log("happy");
            cost+=20;
        }
    }
}
document.querySelector(".lower").innerHTML=extraPlan;
console.log(cost);
if(Number(sessionStorage.getItem(scheme))===0)
{
    document.querySelector(".totalcost").innerHTML=`+${cost}$/mo`;
}
else
{
    document.querySelector(".totalcost").innerHTML=`+${cost}$/yr`;
}