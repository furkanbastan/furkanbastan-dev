export function classes(...classes) {
    let classnames = "";

    for (let index = 0; index < classes.length - 1; index++) {
        classnames += classes[index] + " ";
    }

    classnames += classes[classes.length - 1];

    return classnames;
}
