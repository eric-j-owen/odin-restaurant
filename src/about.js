export default function about() {
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    const h1Text = document.createTextNode("About");
    const pText = document.createTextNode(
        "Explore the mystique of [Redacted] Bistro, an imaginary culinary haven where an enigmatic chef conjures [redacted] dishes that defy reality. [Redacted] comments from imaginative minds speak of [redacted] experiences and [redacted] flavors. Welcome to [Redacted] Bistro, a whimsical [redacted] woven [redacted] creative thought, [redacted] its [redacted] [redacted] in the boundless landscapes of the imaginary."
    );

    h1.appendChild(h1Text);
    p.appendChild(pText);

    div.appendChild(h1);
    div.appendChild(p);

    content.appendChild(div);
}
