export default ()=>{
  const john = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    hobbies: ['Surf', 'Design']
  }
  
  const jane ={
    name: 'Jane',
    surname: 'Doe',
    age: 30,
    hobbies: ['Surf', 'Design']
  }
  
  jane.name = 'Jane'
  jane.hobbies.push('MuayThai', 'Programming')

  document.querySelector("#name_jhon").innerHTML = `nome: ${john.name}`
  document.querySelector("#apelido_jhon").innerHTML = `apelido: ${john.surname}`
  document.querySelector("#idade_jhon").innerHTML = `idade: ${john.age}`
  document.querySelector("#hobbie_jhon").innerHTML = `hobbies: ${john.hobbies}`

  
  document.querySelector("#name_jane").innerHTML = `nome: ${jane.name}`
  document.querySelector("#apelido_jane").innerHTML = `apelido: ${jane.surname}`
  document.querySelector("#idade_jane").innerHTML = `idade: ${jane.age}`
  document.querySelector("#hobbie_jane").innerHTML = `hobbies: ${jane.hobbies}`

}