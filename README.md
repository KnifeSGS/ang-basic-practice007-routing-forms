# Router Gyakorlat 01

**_Instrukciók_**: tedd lehetővé, hogy kattintásra egy külön oldalon megnyíló űrlapon lehessen szerkeszteni az eseményeket.

## Kezdő lépések
- Lépj be a letöltött mappába és állítsd be a projektet:
- `cd ang-basic-practice006-routing`
- `code . -r`
- Telepítsd a függőségeket:
- `npm i`
- Indítsd el az Angular Development Server -t:
- `npm start`

## Bevezetés
> Az alkalmazás főoldala már készen van. Itt a listában való kattintásra kell megnyitni a másik oldalt, ahol egy esemény részeletei vannak betöltve egy űrlapon.

1. Hozd létre egy gombot minden eseményhez a táblázat adott sorában, az utolsó cellában. Erre a gombra kattintva navigáljon el az alkalmazás az `event/:id` oldalra, ahol az `:id` az adott esemény id -je. 
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/app-routing.module.ts#L17)

1. Hozd létre az EventEditor komponenst `ng g c event-editor`. Injektáld be a constructor -ban az EventService és az ActivatedRoute szolgáltatásokat.

1. Iratkozz fel az ActivatedRoute params -ra, és ha változik a params, akkor olvasd ki belőle az id változót és ez alapján kérd le az EventService -ből az adott eseményt. Segítség képpen elkészítettem erre a célra a get metódust, ami egy `Observable<Event>` -et ad vissza.  
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.ts#L22)

1. Az EventEditor komponensben hozz létre egy űrlapot. Az űrlap jelenítse meg 
szerkeszthető formában a Event összes tulajdonságát (a beágyazott tulajdonságokat 
is a Location -ból). Minden adat kitöltése legyen kötelező, az event.name 
pedig legalább 8 karakter hosszú legyen. 
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.html#L6)

1. Ha valamelyik adat nem megfelelően van megadva, jelenjen meg hibaüzenet. 
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.html#L8)

1. Ha az űrlap nem valid, ne lehessen elküldeni, nem működjön a mentés gomb. 
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.html#L22)

1. Egy osztály metódusnak legyen átadva az ngForm objektumra mutató változó, és 
ez a metódus hívja meg az update metódust az EventService -ből. 
[Segítség](https://github.com/Training360/str-angular-004/blob/3a165b952b7ee6a0ca091b8dd80a57ad0ffc1c01/str-angular-routing-and-form/src/app/page/product-editor/product-editor.component.html#L3)

> A metódusok meg vannak írva az EventService -ben, csak a megfelelő 
paraméterekkel meg kell őket hívni a komponens osztályából.

## Sok sikert.
