
  async function newInvoice (dataInvoice, details) {
    const urlInvoice = 'http://localhost:7000/invoice/create/'
    const urlDetails = 'http://localhost:7000/invoice/create/details/'
    const setOptions = (dataBody)=>{
        return {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",  
            },
            redirect: "follow",
            referrerPolicy: "no-referrer", 
            body: JSON.stringify(dataBody), 
          }
    }
    
    return fetch(urlInvoice, setOptions(dataInvoice))
    .then(response => response.json())
    .then(invoiceData => {
      details.map(async detail => {
        const dataDetails = {...invoiceData, ...detail}
        await fetch(urlDetails,setOptions(dataDetails))
        .catch(()=> 'Operation failed: add Invoice details')
      })
    })
    .catch(()=>'Operation failed: New Invoice')
  }



  export {newInvoice}