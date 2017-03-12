class: center, middle

# My ✨ Presentation 😛🦊

???
some notes about the slide
---

# Agenda

1. hello 🐻
2. hi 🐼
3. yo 🦁

---
# Hello 🌍

```javascript
let a = x => {
  return x + 1
}
```

???
Javascript rocks!
---
background-image: url(pictures/merida.gif)
background-size: 65%
# WTF❓

---
## ☁️ ❤️ Scala

```scala
def getUserById(id: Int): Either[String, Any] = {
  try { // OK, there is something more "stylish"
    val userOption = JSON.parseFull(fromURL("http://localhost:9090/users/"+id.toString).mkString)
    // JSON.parseFull returns an Option 😊
    userOption match {
  👉  case None => Left("😡 Bad Json")
      case Some(user) => {
        user.asInstanceOf[Map[String, Any]].get("id") match {
          👉 case None => Left("😡 User unknown")
          👉 case Some(value) => Right(user)
    }}}
  } catch {
    👉 case e: Exception => Left("😡 " + e.toString)
  }
}
```
