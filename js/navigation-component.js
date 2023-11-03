class Navigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});

        const nav = document.createElement("nav");
        nav.innerHTML = `
            
            <a href="index.html">Home</a>
            <details open>
                <summary>Forms</summary>
                <div>
                    <a href="forms/form-data-api.html">Form Data API</a>
                    <a href="forms/input-capture.html">Input Capture</a>
                    <a href="forms/select-list.html">Selectlist</a>
                </div>
            </details>
            
            <details>
                <summary>Interactivity</summary>
                <div>
                    <a href="interactivity/dialog.html">Dialogs</a>
                    <a href="interactivity/popover.html">Popover (Html only)</a>
                    <a href="interactivity/popover-js.html">Popovers (JS API)</a>
                </div>
            </details>
            
            <details>
                <summary>Webcomponents</summary>
                <div>
                    <a href="webcomponents/navigation.html">Navigation Component</a>
                    <a href="interactivity/popover.html">Popover (Html only)</a>
                    <a href="interactivity/popover-js.html">Popovers (JS API)</a>
                </div>
            </details>
            
            <details>
                <summary>Internationalization</summary>
                <div>
                    <a href="intl/number-formats.html">Number Formatting</a>
                    <a href="intl/date-formats.html">Date Formatting</a>
                    <a href="intl/relative-time.html">Relative Time</a>
                    <a href="intl/segments.html">Segmentation</a>
                </div>
            </details>
        `

        const style = document.createElement("style")
        style.textContent = `
            nav {
                display: flex;
                flex-direction: column;
            }
            
            details {
                margin-top: 1em;
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
}

window.customElements.define(
    "navigation-component", // ⚠️ Must contain hyphen
    Navigation
)