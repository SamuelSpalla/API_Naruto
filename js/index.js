const listPersons = document.querySelector('.personagens')

const fetchNaruto = async (query)=>{
    const APIresponse = await fetch(`https://narutoql.up.railway.app/graphql/?query=${query}`)
    if (APIresponse.status == 200){
        const response = await APIresponse.json()
        return response.data
    }
}


function main(){
    const persons = `{
        clans {
          results {
            _id
            avatarSrc
            name
            description
            signatureAbilities
            village 
            
          }
        }
    }`
     

      

    fetchNaruto(persons).then(res => entryNaruto(res))

      
}

function entryNaruto(persons){
    let template = ''
    console.log(persons)
    naruto = persons.clans.results

    naruto.forEach(chave => (
        template += `
            <li class="main_infos">
                <img class="image" src="${chave.avatarSrc}">
                <div class="infos">
                    <h5>${chave.name}</h5>
                    <p class="desc">${chave.description}</p>
                    <p class="hab">${chave.signatureAbilities}</p>
                    <p class="vila ID${chave._id}">${chave.village}</p>
                </div>
            </li>
        `

        
    ))
    
    
    
    listPersons.innerHTML = `
    <ul class="lista">
        ${template}
    </ul>`
    

    
}





main()