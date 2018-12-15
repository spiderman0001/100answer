(() => {
    function anElement(element, props, children) {
        if (isClass(element)) {
            return handleClass(element, props)
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


    function handleClass(clazz, props) {
        const component = new clazz(props);
        return component.render();
    }

    function isClass(func) {
        return typeof func === 'function' &&
            /^class\s/.test(Function.prototype.toString.call(func));
    }

    function createElement(el, props, ...children) {
        return anElement(el, props, children);
    }

    class Component {
        constructor(props) {
            this.props = props;
        }
    }
    window.React = {
        createElement,
        Component
    };
    window.ReactDOM = {
        render: (el, domEl) => {
            domEl.appendChild(el);
        }
    };
})();