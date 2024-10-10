const endPoint = `https://uunoyalmreaywqwsrymh.supabase.co/rest/v1/management`

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1bm95YWxtcmVheXdxd3NyeW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNDczNzAsImV4cCI6MjA0MzkyMzM3MH0.t_yzEGMttCDR2oITWMF_YYLdibKrOcXbSnXE29-WHg8`


getTasks()

async function getTasks() {

    let response = await fetch(endPoint, {
        method: 'GET',
        headers: {
            'apikey': token,
            'Authorization': token
        }
    })

    let data = await response.json()

    console.log (data)
    
    renderTasks(data)

}

function getTasks(data) {

    let tableLayout = ` <tr>
                            <th>Name</th>
                            <th>Descrition</th>
                            <th>Date</th>
                            <th>Status</th>
                        <tr>`

    for (let i = 0; i < data.length; i++) {
        tableLayout += ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].description}</td>
                            <td>${data[i].date}</td>
                            <td>${data[i].status}</td>
                        <tr> `

    }

    reportTasks.innerHTML = tableLayout

}

async function postContact() {

    event.preventDefault()

    let name = inputName.value
    let description = inputDescription.value
    let date = inputDate.value
    let status = inputStatus.value

    let jsonData = {
        name,
        description,
        date,
        status

    }

    let response = await fetch(endPoint, {
        method: 'POST',
        headers: {
            'apikey': token,
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })


    if (response.status >= 200 && response.status <= 299) {
        console.log("Task Done")
        getContacts()
    } else {
        console.log("Task was not done")
        console.log(response.statusText)
    }


}