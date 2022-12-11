## :star: Primer proyecto del curso de Scrimba con React

Pueden ver toda la teoria y practica completo del curso de React : Scrimba con  Bob Ziroll, haciendo [click aca](https://github.com/eugenia1984/react-varios-cursos)

---

## Tecnologías 🛠️

- <img src="https://img.icons8.com/color/30/null/html-5--v1.png"/> **HTML5**

- <img src="https://img.icons8.com/stickers/30/null/css3.png"/> **CSS3**

- <img src="https://img.icons8.com/color/30/null/javascript--v1.png"/> **JAVASCRIPT**

- <img src="https://img.icons8.com/office/40/null/react.png"/> **REACT**

---


## Demo 📦

Si quieres ver cómo fue este proyecto, puedes hacerlo desde:
:arrow_right: [Netlify -sin dark / light mode-](https://scrimba-proyect1.netlify.app/)

---

###  <img src="https://img.icons8.com/dusk/40/null/untested.png"/>  Proyecto


### 1er proyecto: Página estática en React

- Debiamos llegar a esta SPA estática:

![image](https://user-images.githubusercontent.com/72580574/200196250-ec76c280-a6f6-4b79-ba73-92dac7779299.png)


-> Es una página estática, como las que se hacen con HTML y CSS, pero empezando a usar React, para así poder aprender la sintaxis básica y el vocabulario de React.

-> Se aprende a cómo pensar en React, porque se modifica el modo de crear aplicaciones.

Temas que se ven:

```
- JSX
- componentes
- aplicar CSS
```

---

## :star: Teoría


- **1 - ¿Como es el layout ?**

Va a tener un rectangulo (Header/Nav) que va a tener a la izquierda el icono y logo y a la derecha el nombre. Luego esta el segundo rectangulo(Main)  que tendra el titulo (```h1```) y la lista desordenada(```ul```). Entocnes seria algo asi:

```
<div.container>
  <nav>
     <img />
     <h3></h3>
     <h4></h4>
  </nav>
  <main>
     <h1></h1>
     <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
     </ul>
  </main>
</div>
```

-> Esto pasandolo a React veo que voy a tener dos componentes: Nav y Main.

---
---

### :book: Componentes Padres / Hijos

Aca se ve el ejemplo del componente padre **App** y del componente hijo **Header**

![image](https://user-images.githubusercontent.com/72580574/200211268-0bcd2901-8001-4c40-8c00-b5fa6cbf278d.png)


:tv: [En este Sandbox.io esta el codigo](https://codesandbox.io/s/mini-proyecto4-rm4z2q)

---

### :book: Estilizando con clases

En vez de utilizar **class** usamos **className** y lo hacemos como siempre en la hoja de estilos de CSS:

![image](https://user-images.githubusercontent.com/72580574/200212466-727713c1-5333-47d9-ba04-457a7dbd0e54.png)

---

### <img src="https://img.icons8.com/ios/40/null/project-setup--v1.png"/> Otro mini desafio para practicar


- Realizar otra SPA [con este figma de ejemplo](https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A1)

- Requerimientos:

```
- empezala desde cero
- completala con tu informacion personal
- debe tener los siguientes componentes por separado: Info( foto, nambre, botones, etc), About (titulo y texto), Interest (titulo y texto), Footer (iconos de RS)
```

---

### :book: Mini quiz

1. ¿Por que necesitamos importart "React" de "react" en nuestros archivos ?

Porque "React" es lo que define JSX

2. Si voy a consologear "page" en el index.js que se va a ver

El objto JavaScript. Son los elementos REact que se van a renderizar en el DOM real.

3.  ¿Qué esta mal en este codigo?

```JSX
const page = (
 <h1>Hello</h1>
 <p>Esta es my pagina web</p>
) 
```

Tenemos dos elementos que retornamos y solo debemos tener un elemento padre, lo podemos envolver todo dentro de un div padre o utilizar fragment.

4. ¿Que significa que sea "declarativo" a diferencia de "imperativo"?

Declarativo significa que le decimos a la computadora que hacer. 

Imperativo debo decirle que hacer en cada paso.

5. ¿Que significa que sea codigo componible?

Puedo crear pequeños pedazos de la UI y ponerlo en un componente, y luego juntar todos estos componentes para hacer la pagina web.

6. ¿ Que es un componente de React?

Una funcion que devuelve elementos de React, los objetos que se crean en JSX, se convierten luego a elementos reales del DOm, son las UI. Puede ser reutilizado, las veces que se necesiten.

7. ¿Que esta mal en este codigo?

```JSX
function myComponent() {
 return(
  <small>I´m tiny text!</small>
 )
}
```

Se escriben **PascalCase** la primer letra debe estar en mayuscula, y liego cada primer letra de la palabra debe estar en mayuscula.

8. ¿ Que esta mal con este codigo?
```JSX
function Header() {
 return (
  <header>
   <nav>
    <img src="./react-logo.png" width="40px" />
   </nav>
  </header>
 )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

En ReactDOM.render en vez de llamarla como la funcion se debe llamar como un componente: ```<Header />```


---

## :star: Así quedo

- Sin versión dark / light mode

Desktop:

![image](https://user-images.githubusercontent.com/72580574/202922562-de52be79-8c19-4cda-9364-18d3afc2ccf1.png)


Mobil:

![image](https://user-images.githubusercontent.com/72580574/202922596-a93ab6aa-0613-490b-bdde-5e0005f83903.png)

Esta es la estructura de las carpetas:
![image](https://user-images.githubusercontent.com/72580574/202922681-add96725-83ac-4b10-9b89-dd4e8f7ca052.png)

- Con versión dark / light mode

Light Mode

![image](https://user-images.githubusercontent.com/72580574/206919841-b2debd5e-7c8e-43a3-bb18-8de1eb4f5798.png)


Dark Mode

![image](https://user-images.githubusercontent.com/72580574/206919851-4ec2a69f-f9a2-4d0c-9a2c-2fa63d6ec203.png)


---

## Por favor: 🎁

* Comparte este proyecto con otros 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
* Muchas gracias 🤓.

---

## Notas

Agradezco su interés en este Proyecto ⌨️ con ❤️ de [María Eugenia Costa](https://github.com/eugenia1984) 😊 y síganme en [LinkedIn](http://www.linkedin.com/in/maríaeugeniacosta)

---


