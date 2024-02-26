export default function menu() {
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const menuItem1 = document.createElement("p");
    const menuItem2 = document.createElement("p");
    const menuItem3 = document.createElement("p");

    const h1Text = document.createTextNode("Menu");
    const menuItem1Text = document.createTextNode(
        "[redacted] Sandwich served with [redacted]"
    );
    const menuItem2Text = document.createTextNode(
        "Salad with [redacted] and your choice of [redacted]"
    );
    const menuItem3Text = document.createTextNode("Cake.");

    h1.appendChild(h1Text);
    menuItem1.appendChild(menuItem1Text);
    menuItem2.appendChild(menuItem2Text);
    menuItem3.appendChild(menuItem3Text);

    div.appendChild(h1);
    div.appendChild(menuItem1);
    div.appendChild(menuItem2);
    div.appendChild(menuItem3);

    content.appendChild(div);
}
