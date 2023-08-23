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
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    console.log(forms);
    let email=document.getElementById("inputEmail");
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()