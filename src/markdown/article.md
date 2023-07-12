# Javascript DOM cheat sheet

---

### Overview

![DOM TREE](https://res.cloudinary.com/practicaldev/image/fetch/s--XJXQBOm5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jyysivaxrdeux6q59m9l.png)

DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic.

The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

---

### Accessing Dom Elements

1. Get element by id

<Code language="javascript">
document.getElementById("id");
</Code>

2. Get element by class

<Code language="javascript">
document.getElementByclassName("className");
</Code>

3. Query selector

<Code language="javascript">
document.querySelector(".className");
</Code>

4. Query selector All

<Code language="javascript">
document.querySelectorAll(".className");
</Code>

---

### Get Children or Parent Node

1. Access child node

<Code language="javascript">
const element = document.getElementById("id");
element.childNode;
</Code>

2. Access parent node

<Code language="javascript">
document.getElementByclassName("className");
element.parentNode;
</Code>

---

### Create new elements

1. Create a HTML element

<Code language="javascript">
const ourElement = document.createElement("section");
</Code>

2. Create a text node

<Code language="javascript">
const textNode = document.createTextNode("Hello");
</Code>

---

### Add & Delete Elements to the DOM

1. Access and element first

<Code language="javascript">
const ourElement = document.getElementById("ourelement");
</Code>

2. Using innerHTML

<Code language="javascript">
 ourElement.innerHTML = "Appended from innerHTML";
</Code>

3. Append as a child for a element

<Code language="javascript">
 ourElement.appendChild(htmlNode);
</Code>

4. Remove child from a element

<Code language="javascript">
 ourElement.removeChild(htmlNode);
</Code>

5. Replace child from a element

<Code language="javascript">
 ourElement.removeChild(newElement,oldElement);
</Code>

6. Insert before or after an element

<Code language="javascript">
 ourElement.insertAdjacentHTML('beforeend',htmlNode);
</Code>
