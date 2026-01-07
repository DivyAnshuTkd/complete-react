function customRender(reactElement, container){      // A custom function to create a DOM element from a React element object.
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement) 
    

} 

const reactElement = {          // A React element object. This is how React represents elements (html) internally.
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Go to Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)