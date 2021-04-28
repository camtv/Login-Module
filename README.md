# Cam.TV Login API
Tramite Cam.TV Login API è possibile integrare la funzionalità di login a Cam.TV su siti di terze parti. 

### Procedura di integrazione: 
* Aggiungere all'interno della tua pagina HTML un tag script come indicato qui di seguito:

```
<script src="https://www.cam.tv/login/extern_login.js"></script>
```

* Aggiungi un click handler ad un qualunque elemento UI del dom, tipicamente un button che chiama la seguente funzione dell'API di login di Cam.TV:

```
CTV.ExternalLogin(redirectUrl);
```
dove redirectUrl l'URL al quale verrà effettuato il reindirizzamento una volta completato il login da parte dell'utente


### Esempio completo

Di seguito è riportato un esempio di invocazione dell'API di login tramite la gestione dell'evento click su un button. E' possibile provare operativamente l'esempio al seguente url: [https://camtv.github.io/login-module/](https://camtv.github.io/login-module/)


```
<script src="https://www.cam.tv/login/extern_login.js"></script>
<button onclick="Login()">Login</button>
<script>
    function Login() {
        CTV.ExternalLogin("https://www.cam.tv");
    }
</script>
```
