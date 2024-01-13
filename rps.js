
       function whowins( you, comp)
        {  const result=document.querySelector(".result");
              
            if((you+1)%3==comp)
              result.textContent="you lose";
            else if(you==comp)
            result.textContent="draw";
          else
            result.textContent="you win";
            
        }
        function choice(yourchoice,compchoiceno)
        { let yourchoiceno;
            let compchoice;
            const your=document.querySelector('#your');
            const comp=document.querySelector('#comp');
            if(yourchoice=="rock")
            yourchoiceno= 0;
             else if(yourchoice=="paper")
              yourchoiceno =1;
            else
            yourchoiceno= 2;
          if(compchoiceno==0)
            compchoice="rock";
            else if(compchoiceno==1)
            compchoice="paper";
         else
          compchoice="scisser";
              your.textContent=`your choice : ${yourchoice}`;
              comp.textContent=`computer's choice : ${compchoice}`;
            whowins(yourchoiceno,compchoiceno);
        }
        const container=document.querySelector(".container");
    const rock=document.querySelector('#rock');
    const paper=document.querySelector('#paper');
    const scissor=document.querySelector('#scissor');
    let compchoiceno=Math.round(Math.random()*2);
    
    rock.addEventListener('click', function () {
    
        choice("rock", compchoiceno);
    });
    
    paper.onclick = function () {
        choice("paper", compchoiceno);
    };
    
    scissor.onclick = function () {
        choice("scissor", compchoiceno);
    };
       
    