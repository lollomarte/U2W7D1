function aggiungiUtente() {
    // Recupera i valori dai campi input
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var dataNascita = document.getElementById("data-nascita").value;
  
    // Crea una nuova riga per la tabella
    var nuovaRiga = document.createElement("tr");
  
    // Crea le celle per la riga e le popola con i dati dell'utente
    var cellaNome = document.createElement("td");
    cellaNome.innerHTML = nome;
    nuovaRiga.appendChild(cellaNome);
  
    var cellaCognome = document.createElement("td");
    cellaCognome.innerHTML = cognome;
    nuovaRiga.appendChild(cellaCognome);
  
    var cellaDataNascita = document.createElement("td");
    cellaDataNascita.innerHTML = dataNascita;
    nuovaRiga.appendChild(cellaDataNascita);
  
    // Recupera la tabella e aggiunge la nuova riga
    var tabella = document.getElementById("tabella-utenti");
    tabella.appendChild(nuovaRiga);
  }
  