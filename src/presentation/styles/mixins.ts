export function centerAbsoluteElement(
  $horizontal: boolean,
  $vertical: boolean
) {
  return `
    position: absolute;
    ${
      $horizontal && $vertical
        ? `
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            `
        : $horizontal
        ? `
                left: 50%;
                transform: translate(-50%, 0);
            `
        : $vertical
        ? ` 
                top: 50%;
                transform: translate(0, -50%);`
        : `
                display: initial;
            `
    }`
}

export function centerBlockElement() {
  return `
        display: block;
        margin-left: auto;
        margin-right: auto;
    `
}
