export default function home() {
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const h2 = document.createElement("h2");
    const pHours = document.createElement("p");

    const h1Text = document.createTextNode("[redacted] Bistro");
    const pText = document.createTextNode(
        "We do not serve food, please don't visit as we don't exist."
    );
    const h2Text = document.createTextNode("Hours of Operation");
    const hoursText = document.createTextNode("[redacted]");

    h1.appendChild(h1Text);
    p.appendChild(pText);
    h2.appendChild(h2Text);
    pHours.appendChild(hoursText);

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(h2);
    div.appendChild(pHours);

    content.appendChild(div);
}
