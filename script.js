const gameContainer = document.querySelector("#gameContainer");
const gameCount = 150;

const colors = {

}

const getGames = async () => {
    const response = await fetch(`https://games-test-api-81e9fb0d564a.herokuapp.com/api/`, {
        headers: {"dev-email-address": "teste@gmail.com"}
    })
    const data = await response.json()
    console.log(data)
}

getGames()



