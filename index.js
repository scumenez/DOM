const addProduct = () => {
  const input = document.querySelector("input");
  const add = input.value;
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  li.innerText = add;
  ul.appendChild(li);
  li.appendChild(checkbox);
};
