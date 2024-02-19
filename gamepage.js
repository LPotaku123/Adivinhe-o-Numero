// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
playername = localStorage.getItem("player_name");

var guess = 1;

// até acerto    
  function submit()
  {
    var x = document.getElementById("guessField").value;
  }
// função para o número enviado pelo usuário

if(x == y)
{
    alert("PARABÉNS!!!"+playername+", você acertou em"
            + guess + "tentativa(s)!");
            guess=1;
}

else if(x > y)
{
    guess++;
    alert("Opa, resposta errada!!Tente um número menor")
}
else
{
    guess++;
    alert("Opa, resposta errada!! Tente um número maior")
}
function playAgain()
{
    y= Math.floor(Math.random()* 10+1);
}