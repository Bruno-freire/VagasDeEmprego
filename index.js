let option = ""
let vagasDeEmprego = []
let lista = ""
let candidatosInscritos = 0
let indice = 0
let confirmação
let novaVaga = {}
const btn = document.querySelector('#restart')
btn.addEventListener('click', () => {
  location.reload()
})
function CriarVaga (informaçoes){
  informaçoes.nome = prompt("Qual o nome da vaga?")
  informaçoes.descrição = prompt("Conte-nos sobre a vaga!")
  informaçoes.dataLimite = prompt("Data limite para se candidatar!  dd/mm/aaaa")
  informaçoes.candidatosDaVaga = []
  informaçoes.candidatosInscritos = 0
}
function listarCandidatos(candidatos){
  candidatos = ""
  for(let i=0; i<vagasDeEmprego.length;i++){
    candidatos += +(i+1)+"° "+vagasDeEmprego[i].nome+"\nQuantidade de candidatos: "+vagasDeEmprego[i].candidatosInscritos+"\n"
  }
  return candidatos
}
do {
  option = parseInt(prompt("Vagas de emprego\nEscolha uma opção:\n1-Vagas de emprego disponiveis\n2-Criar uma nova vaga\n3-Visualizar uma vaga\n4-Inscrever um candidato em uma vaga\n5-Excluir um candidato\n6-Excluir uma vaga\n7-Sair"))
  switch(option){
    case 1:
      lista = listarCandidatos(lista)
      alert(lista)
      break
    case 2:
      novaVaga = {}
      CriarVaga(novaVaga)
      confirmação = confirm(
        "Nome da vaga '"+novaVaga.nome+"'"
        +"\nDescrição da vaga:\n"+novaVaga.descrição+
        "\nData limite "+ novaVaga.dataLimite
      )
      if(confirmação){
        vagasDeEmprego.push(novaVaga)
      }
      break;
    case 3:
      lista = listarCandidatos(lista)
      indiceDaVaga = parseInt(prompt("Digite o indice da vaga desejada \n"+lista))
      indiceDaVaga--
      if(vagasDeEmprego[indiceDaVaga].candidatosInscritos === 0){
      alert(
        "Nome da vaga '"+vagasDeEmprego[indiceDaVaga].nome+"'"
        +"\nDescrição da vaga:\n"+vagasDeEmprego[indiceDaVaga].descrição+
        "\nData limite "+ vagasDeEmprego[indiceDaVaga].dataLimite+
        "\nNão há candidatos inscritos nessa vaga."
      )
      }else if(vagasDeEmprego[indiceDaVaga].candidatosInscritos > 0){
        let textoCandidatos = ""
        for( i=0; i<vagasDeEmprego[indiceDaVaga].candidatosDaVaga.length;i++){
          textoCandidatos += "- "+vagasDeEmprego[indiceDaVaga].candidatosDaVaga[i].nome+"\n"
        }
        alert(
          "Nome da vaga '"+vagasDeEmprego[indiceDaVaga].nome+"'"
          +"\nDescrição da vaga:\n"+vagasDeEmprego[indiceDaVaga].descrição+
          "\nData limite "+ vagasDeEmprego[indiceDaVaga].dataLimite+
          "\nCandidatos da vaga \n"+textoCandidatos
        )
      }
      else if(vagasDeEmprego[indiceDaVaga].candidatosInscritos === undefined){
        alert("Error")
      }
      break
    case 4:
      const candidato = {}
      candidato.nome = prompt("Qual o nome do(a) candidato(a)?")
      lista = listarCandidatos(lista)
      indiceDaVaga = parseInt(prompt("Digite o indice da vaga desejada \n"+lista))
      indiceDaVaga--
      confirmação = false
      confirmação = confirm("Candidato(a) "+candidato.nome+" sera adicionado a vaga de "+vagasDeEmprego[indiceDaVaga].nome)
      if(confirmação){
        vagasDeEmprego[indiceDaVaga].candidatosDaVaga.push(candidato)
        vagasDeEmprego[indiceDaVaga].candidatosInscritos++
      }
      break
    case 5:
      lista = listarCandidatos(lista)
      indiceDaVaga = parseInt(prompt("Qual o indice da vaga de emprego do(a) candidato(a)?\n"+lista))
      indiceDaVaga--
      if(vagasDeEmprego[indiceDaVaga].candidatosInscritos === 0){
        alert(
          "Nome da vaga '"+vagasDeEmprego[indiceDaVaga].nome+"'"
          +"\nDescrição da vaga:\n"+vagasDeEmprego[indiceDaVaga].descrição+
          "\nData limite "+ vagasDeEmprego[indiceDaVaga].dataLimite+
          "\nNão há candidatos inscritos nessa vaga."
        )
      }
      else if(vagasDeEmprego[indiceDaVaga].candidatosInscritos > 0){
        let textoCandidatos = ""
        for( i=0; i<vagasDeEmprego[indiceDaVaga].candidatosDaVaga.length;i++){
          textoCandidatos += (i+1)+"- "+vagasDeEmprego[indiceDaVaga].candidatosDaVaga[i].nome+"\n"
        }
        let indiceDoCandidato = parseInt(prompt(
          "Nome da vaga '"+vagasDeEmprego[indiceDaVaga].nome+"'"
          +"\nDescrição da vaga:\n"+vagasDeEmprego[indiceDaVaga].descrição+
          "\nData limite "+ vagasDeEmprego[indiceDaVaga].dataLimite+
          "\nCandidatos da vaga \n"+textoCandidatos+"\nQual o indice do candidato que deseja excluir?"
        ))
        indiceDoCandidato--
        if(indiceDoCandidato !== vagasDeEmprego[indiceDaVaga].candidatosDaVaga.length){
          alert("Indice não encontrado!")
          break
        }
        confirmação = confirm("Deseja realmente excluir o candidato(a) "+vagasDeEmprego[indiceDaVaga].candidatosDaVaga[indiceDoCandidato].nome+" da vaga de "+vagasDeEmprego[indiceDaVaga].nome+"?")
        if(confirmação){
        vagasDeEmprego[indiceDaVaga].candidatosDaVaga.splice(indiceDoCandidato,1)
        vagasDeEmprego[indiceDaVaga].candidatosInscritos--
        }
      }
      else if(vagasDeEmprego[indiceDaVaga].candidatosInscritos === undefined){
        alert("Error")
      }
      break
    case 6:
      lista = listarCandidatos(lista)
      indiceDaVaga = parseInt(prompt("Qual o indice da vaga que deseja apagar?\n"+lista))
      indiceDaVaga--
      if(indiceDaVaga == -1 || indiceDaVaga !== vagasDeEmprego.length){
        alert("Indice não encontrado!")
        break
      }
      textoCandidatos = ""
        for( i=0; i<vagasDeEmprego[indiceDaVaga].candidatosDaVaga.length;i++){
          textoCandidatos += "- "+vagasDeEmprego[indiceDaVaga].candidatosDaVaga[i].nome+"\n"
        }
      confirmação = false
      confirmação = confirm ("a seguinte vaga sera apagada: \nNome da vaga '"+vagasDeEmprego[indiceDaVaga].nome+"'"
      +"\nDescrição da vaga:\n"+vagasDeEmprego[indiceDaVaga].descrição+
      "\nData limite "+ vagasDeEmprego[indiceDaVaga].dataLimite+
      "\ncandidatos da vaga \n"+textoCandidatos)
      if(confirmação){
        vagasDeEmprego.splice(indiceDaVaga,1)
      }
      break
      case 7:
        alert("Encerrando aplicativo...")
        break
      default:
        alert("Opção invalida, tente novamente!")
  }
} while (option !== 7);