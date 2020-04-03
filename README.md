# Cam.TV Login API
Tramite Cam.TV Login API è possibile integrare la funzionalità di login a Cam.TV su siti di terze parti. Per farlo, aggiungi all'interno della tua pagina HTML un tag script come indicato qui di seguito:
```
<script src="https://www.cam.tv/assets/js/camtv_login_v3.js"></script>
```
In secondo luogo, effettua la chiamata all'API di Login eseguendo la seguente funzione al click sul bottone designato all'apertura del modulo di login di Cam.TV. L'API accetta 3 parametri in ingresso, come specificato di seguito:
```
CTV.ExternalLogin(redirectUrl[, action, channelName]);
```

## Parametri
I seguenti sono i parametri che l'API accetta in ingresso e la relativa descrizione:

* redirectUrl	È l'URL al quale verrà effettuato il reindirizzamento una volta completato il login da parte dell'utente
* action	(opzionale) Determina quale modulo di login verrà mostrato
    * CTV.ACTION.CREATE: (default) da usare qualora l'utente abbia intenzione di creare un nuovo account
    * CTV.ACTION.LOGIN: da usare qualora l'utente abbia intenzione di effettuare il login
    * CTV.ACTION.CREATE_CHANNEL: da usare qualora l'utente venga invitato ad iscriversi tramite un canale già esistente su Cam.TV
* channelName	(opzionale) Solo con parametro action uguale a CTV.ACTION.CREATE_CHANNEL. Permette di specificare il nome del canale di un utente cha fa già parte di Cam.TV

## Esempio completo
```
<script src="https://www.cam.tv/assets/js/camtv_login_v3.js"></script>
<button onclick="Login()">Login</button>
<script>
    function Login() {
        var redirectUrl = "https://www.miosito.it";
        var action = CTV.ACTION.CREATE;
        CTV.ExternalLogin(redirectUrl[, action, channelName]);
    }
</script>
```
