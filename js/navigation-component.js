class Navigation extends HTMLElement {

    currentSection;

    constructor() {
        super();
        this.attachShadow({mode: "open"});

        this.currentSection = this.determineSection(window.location);

        const nav = document.createElement("nav");

        nav.innerHTML = `
            <a href="index.html">Home</a>
            <details ${this.currentSection === "forms" ? "open" : ""}>
                <summary>Forms</summary>
                <div>
                    <a href="forms/form-data-api.html">Form Data API</a>
                    <a href="forms/input-capture.html">Html attribute: capture</a>
                    <a href="forms/select-list.html">Selectlist</a>
                </div>
            </details>
            
            <details ${this.currentSection === "interactivity" ? "open" : ""}>
                <summary>Interactivity</summary>
                <div>
                    <a href="interactivity/dialog.html">Dialogs</a>
                    <a href="interactivity/popover.html">Popover (Html only)</a>
                    <a href="interactivity/popover-js.html">Popovers (JS API)</a>
                </div>
            </details>
            
            <details ${this.currentSection === "webcomponents" ? "open" : ""}>
                <summary>Webcomponents</summary>
                <div>
                    <a href="webcomponents/navigation.html">Navigation Component</a>
                </div>
            </details>
            
            <details ${this.currentSection === "intl" ? "open" : ""}>
                <summary>Internationalization</summary>
                <div>
                    <a href="intl/number-formats.html">Number Formatting</a>
                    <a href="intl/date-formats.html">Date Formatting</a>
                    <a href="intl/relative-time.html">Relative Time</a>
                </div>
            </details>
        `

        const style = document.createElement("style")
        style.textContent = `
            nav {
                display: flex;
                flex-direction: column;
                
                @media screen and (min-width: 900px) {
                    width: 100%;
                    flex-direction: row;
                    justify-content: space-around;
                }
            }
            
            details {
                margin-top: 1em;
                @media screen and (min-width: 900px) {
                    margin-top: 0em;
                    margin-left: 2em;
                }
            }
            
            details div {
                display: flex;
                flex-direction: column;
                margin-left: 1.5em;
            }
            
            details div a {
                margin-top: 0.75em;
            }
        `
        this.shadowRoot.append(nav, style);

    }

    determineSection(location) {
        const pathname = location.pathname;
        if (pathname.includes("forms/")) return "forms";
        if (pathname.includes("interactivity/")) return "interactivity";
        if (pathname.includes("webcomponents/")) return "webcomponents";
        if (pathname.includes("intl/")) return "intl";

    }


}

window.customElements.define(
    "navigation-component", // ⚠️ Must contain hyphen
    Navigation
)