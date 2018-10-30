class MultiDot {
    constructor(element) {
        // Make sure jQuery Elements work
        element = this._getElementFromObject(element);

        const requestedHeight = MultiDot._getComputedHeightFromObject(element);
        const content = element.getElementsByClassName('content')[0];

        if (!content) {
            throw new DOMException('Invalid multidot html syntax');
        }

        while (MultiDot._getComputedHeightFromObject(content) > requestedHeight) {
            content.innerHTML = content.innerHTML.replace(/\W*\s(\S)*$/, '...');
        }
    }

    _getElementFromObject(element) {
        if (window.jQuery !== undefined && element instanceof jQuery) {
            element = element[0];
        }

        if (!(element instanceof HTMLElement)) {
            throw new DOMException('MultiDot only supports jQuery-Objects or HTMLElements')
        }

        return element;
    }

    static _getComputedHeightFromObject(element) {
        return parseInt(window.getComputedStyle(element).getPropertyValue('height'));
    }
}
