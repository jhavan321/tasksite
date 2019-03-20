function add() {
    var input = document.getElementById("tarefa");
    if (input.value != 0) {
      var nDiv = document.createElement("div");
      var aDiv = document.createElement("div");
      var botao = document.createElement("BUTTON");
      var botao2 = document.createElement("BUTTON");
      var checkBox = document.createElement("INPUT");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("id", "toools");
      aDiv.setAttribute("id", "eoq");
      nDiv.classList.add("space1");
      aDiv.classList.add("space");
      nDiv.setAttribute("id", "eoq");
      nDiv.style.height = "22px";
      aDiv.style.height = "22px";
      //botao.setAttribute("id", "tools");
      botao2.setAttribute("id", "tools");
      botao.classList.add("remover");
      botao2.classList.add("editar");
      botao.addEventListener("click", function (remover) {
        nDiv.remove()
        aDiv.remove()
      })
      botao2.addEventListener("click", function (editar) {
        Edit()

      })

      document.getElementById("tarefas").appendChild(nDiv);
      document.getElementById("Actions").appendChild(aDiv);
      nDiv.innerText = input.value + ' ';

      botao2.innerText = "Editar";
      botao.innerText = "X";


      nDiv.appendChild(checkBox);
      aDiv.appendChild(botao2);
      aDiv.appendChild(botao);
      //	nDiv.appendChild(nSpan);
      input.value = '';
      function Edit() {
        var nText = document.createElement("INPUT")
        var botao3 = document.createElement("BUTTON")
        // botao.setAttribute("id", "tools");

        botao3.setAttribute("id", "tools");
        botao.remove();
        botao2.remove();
        var x = nDiv.innerText;
        nText.value = x;
        nDiv.innerText = null;
        nDiv.nText;
        botao3.innerText = "Salvar";
        nDiv.appendChild(nText);
        aDiv.appendChild(botao3);
        botao3.addEventListener("click", function (Salvar) {
          botao3.remove()
          nDiv.innerText = nText.value + ' ';
          nDiv.appendChild(nText);
          nDiv.removeChild(nText);
          botao = document.createElement("BUTTON");
          botao2 = document.createElement("BUTTON");
          botao2.setAttribute("class", "editar");
          checkBox = document.createElement("INPUT");
          checkBox.setAttribute("type", "checkbox");
          //checkBox.setAttribute("id", "tools");
          botao.classList.add("remover");
          botao2.classList.add("editar");
          botao2.innerText = "Editar";
          botao.innerText = "X";
          nDiv.appendChild(checkBox)
          aDiv.appendChild(botao2);
          aDiv.appendChild(botao);
          botao2.addEventListener("click", function (editar) {

            Edit()

          })
          botao.addEventListener("click", function (remover) {
            nDiv.remove()
            aDiv.remove()
          })
        })
      }
    }
    else {
      alert('Por favor digite uma Tarefa.')
    }
  }

