(() => {
    function anElement(element, props, children) {
        if (isClass(element)) {
            const component = new element();
            return component.render();
        } else if (typeof (element) === 'function') {
            return element(props);
        } else {
            return handleHtmlElement(element, children);
        }
    }

    function handleHtmlElement(element, children) {
        const anElement = document.createElement(element);
        children.forEach(child => {
            if (typeof (child) === 'object') {
                anElement.appendChild(child);
            } else {
                anElement.innerHTML += child;
            }
        });
        return anElement;
    }

    function isClass(func) {
        return typeof func === 'function' &&
            /^class\s/.test(Function.prototype.toString.call(func));
    }

    function createElement(el, props, ...children) {
        return anElement(el, props, children);
    }

    window.React = {
        createElement
    };
    window.ReactDOM = {
        render: (el, domEl) => {
            domEl.appendChild(el);
        }
    };
})();