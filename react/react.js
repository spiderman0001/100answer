(() => {
    let rootDOMElement, rootReactElement;
    const REACT_CLASS = 'REACT_CLASS'

    function anElement(element, props, children) {
        if (isClass(element)) {
            return handleClass(element, props, children)
        } else if (typeof (element) === 'function') {
            return element(props);
        } else {
            return handleHtmlElement(element, props, children);
        }
    }

    function handleHtmlElement(element, props, children) {
        const anElement = document.createElement(element);
        children.forEach(child => appendChild(anElement, child));
        props && Object.keys(props).forEach(propName => {
            if (/^on.*$/.test(propName)) {
                anElement.addEventListener(propName.substring(2).toLowerCase(), props[propName]);
            } else {
                anElement.setAttribute(propName, props[propName]);
            }
        });
        return anElement;
    }

    function appendChild(element, child) {
        if (child.type === REACT_CLASS) {
            appendChild(element, child.render());
        } else if (Array.isArray(child)) {
            child.forEach(ch => appendChild(element, ch));
        } else if (typeof (child) === 'object') {
            element.appendChild(child);
        } else {
            element.innerHTML += child;
        }
    }

    function handleClass(clazz, props, children) {
        const reactElement = new clazz(props);
        reactElement.children = children;
        reactElement.type = REACT_CLASS;
        return reactElement;
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
        setState(state) {
            this.state = Object.assign({}, this.state, state);
            reRender();
        }
    }



    function reRender() {
        //删除所有子节点
        while (rootDOMElement.hasChildNodes()) {
            rootDOMElement.removeChild(rootDOMElement.lastChild);
        }
        ReactDOM.render(rootReactElement, rootDOMElement);
    }
    window.React = {
        createElement,
        Component
    };
    window.ReactDOM = {
        render: (el, domEl) => {
            rootReactElement = el;
            rootDOMElement = domEl;
            const currentDOM = rootReactElement.render();
            domEl.appendChild(currentDOM);
        }
    };
})();